import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JuegosPage } from '../juegos/juegos';
import { AuthProvider } from "../../providers/auth/auth";


@IonicPage()
@Component({
  selector: 'page-juego-descuento',
  templateUrl: 'juego-descuento.html',
})
export class JuegoDescuentoPage {
  animales;
  animalesRandom;
  mostrarFotos;
  juegoEmpezado;
  mensaje;
  myColor = '';
  tiempo:number;
  repetidor:any;
  nombreAnimal;
  respuesta;
  ocultar;
  color;
  mostrarSpiner
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider) {
      this.mostrarSpiner=true;
      this.animales=new Array();
      this.animalesRandom=new Array();
      this.auth.getAnimales().subscribe(lista => {
        this.animales=lista;
        console.log(this.animales);
        //this.obtenerAnimalesRandom();
        this.mostrarSpiner=false;
        this.ocultar=true;
      })
  }

  obtenerAnimalesRandom() {
    this.animalesRandom= [];
    let num=0;
    while(num<8)
    {
      let numRandom:number = Math.floor((Math.random() * 50));
      if(this.PerteneceAnimal(this.animales[numRandom].nombreAnimal)) {
        this.animalesRandom.push(this.animales[numRandom]);
        num++;
      }
    }
    console.log(this.animalesRandom);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegoDescuentoPage');
    this.mostrarFotos=false;
    this.juegoEmpezado=false;
    this.myColor="primary";
    this.color="red";
    this.tiempo=8;
    this.mensaje='';
  }

  back() {
    this.navCtrl.setRoot(JuegosPage);
  }

  PerteneceAnimal(nombre:string) {
    for(let i=0;i<this.animalesRandom.length;i++)
    {
        if(this.animalesRandom[i].nombreAnimal==nombre) {
            return false;
        }
    }
    return true;
  }

  jugar() {
    this.obtenerAnimalesRandom();
    this.mostrarFotos=true;
    this.juegoEmpezado=true;
    this.ocultar=true;
    let numRandom:number = Math.floor((Math.random() * 8)) + 1;
    this.tiempo=8;
    this.mensaje='';
    this.respuesta='';
    this.repetidor = setInterval(()=>{ 
      
      this.tiempo--;
      if(this.tiempo==0 ) {
        //this.GuardarJugada()
        clearInterval(this.repetidor);
        
        this.tiempo=8;
        this.mensaje="Cual es el nombre del animal de la foto "+numRandom+"?";
        this.nombreAnimal=this.animalesRandom[numRandom-1].nombreAnimal;
        this.mostrarFotos=false;
      }
      }, 900);
  }

  verificar() {
    localStorage.getItem("juegoDescuento")
    if(this.respuesta == this.nombreAnimal) {
      if(localStorage.getItem("juegoDescuento") == 'true') {
        this.mensaje = "Felicidades!! Ganaste";
      }
      else {
        this.mensaje = "Felicidades!! Ganaste 10% de descuento para tu pedido";
        localStorage.setItem("juegoDescuento", 'true');
      }  
    }
    else {
      this.mensaje = "Lo siento, perdiste. El animal era " + this.nombreAnimal;
    }
    this.ocultar=false;
  }


}
