import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JuegoAhorcadoProvider } from '../../providers/juego-ahorcado/juego-ahorcado';
import { PrincipalPage } from "../../pages/principal/principal";
import { AlertProvider } from "../../providers/alert/alert";
import { JuegosPage } from '../juegos/juegos';
import { CommentStmt } from '@angular/compiler';



@IonicPage()
@Component({
  selector: 'page-ahorcado',
  templateUrl: 'ahorcado.html',
})
export class AhorcadoPage {
  gano: boolean = false;
  perdio: boolean = false;
  letras = [];
  palabra_incompleta = "";
  contadorTurnos: number = 0;
  contadorFallos: number = 0;
  puntaje: number = 0;
  primeraVez: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public nuevoJuego: JuegoAhorcadoProvider,
    public alert: AlertProvider) {
      this.primeraVez = false;
  	this.generaABC();
  	this.iniciar();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AhorcadoPage');
  }

  generaABC() {
    let a = "a";
    let z = "z";
  var i = a.charCodeAt(0), j = z.charCodeAt(0);
  let letra = "";
  let n = 0;
  for( ; i<=j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    this.letras[n] = letra;
    if(i==110) {
      n++;
      this.letras[n] = "Ñ";
    }
    n++;
  }
  //console.log(this.letras);
}

iniciar(){
  this.nuevoJuego.iniciarJuego();
  this.palabra_incompleta = this.nuevoJuego.palabra_incompleta;
  this.gano = false;
  this.perdio = false;
  this.letras = [];
  this.contadorTurnos = this.nuevoJuego.contador;
  this.contadorFallos = 0;
  this.generaABC();
  this.quitarClases();
}

verificar(letra, event){
  //aplico clase 
  //event.target.classList.add("marcado")
  if(this.gano != true && this.perdio != true && !event.target.classList.contains("marcado") && !event.target.classList.contains("marcado-bien")){
    let retorno = this.nuevoJuego.comprobarLetra(letra);
    this.palabra_incompleta = this.nuevoJuego.palabra_incompleta;
    if(retorno == 0){
      this.perdio = true;
      this.setPuntos();
      this.marcarCasilla(event);
      this.contadorTurnos = this.nuevoJuego.contador;
      this.contadorFallos = this.nuevoJuego.fallos;
    }
    else{
      this.marcarCasilla(event);
      this.contadorTurnos = this.nuevoJuego.contador;
      this.contadorFallos = this.nuevoJuego.fallos;
      if(this.nuevoJuego.gano){
        this.gano = true;
        this.setPuntos();
      }

    }
  }
}

marcarCasilla(event){
  if(this.contadorFallos < this.nuevoJuego.fallos) 
    event.target.classList.add("marcado")
  else
    event.target.classList.add("marcado-bien")
}

quitarClases(){
  let botones = document.getElementsByClassName("marcado");
  //console.log(botones);
  for (let i = botones.length-1; i >= 0; i--){
    botones[i].classList.remove("marcado");
  }
  botones = document.getElementsByClassName("marcado-bien");
  for (let i = botones.length-1; i >= 0; i--){
    botones[i].classList.remove("marcado-bien");
  }
}

//si comprobarLetra es false = mostrar mensaje {imagen si es posible}


setPuntos(){
  console.log(this.gano);
  console.log(this.perdio);
  
  if(localStorage.getItem('descuento-bebida') == undefined){
      if(this.perdio) {
          localStorage.setItem('descuento-bebida', 'false');
          this.alert.mostrarMensaje("Perdiste una bebida gratis!!!");
      }
      else {
        localStorage.setItem('descuento-bebida', 'true');
        this.alert.mostrarMensaje("Ganaste una bebida gratis!!!");
      }
      
  }
  else{
    if(this.puntaje > 0){
      if(this.gano){
        this.puntaje++;
        this.alert.mostrarMensaje("Ganaste!!!");
      } 
      else if(this.perdio){
        this.puntaje--;
        this.alert.mostrarMensaje("Perdiste...");
      }
    }else{
      if(this.gano){
        this.puntaje = 1;
        this.alert.mostrarMensaje("Ganaste!!!");
      }
      else if(this.perdio){
        this.puntaje = 0;
        this.alert.mostrarMensaje("Perdiste...");
      }
    }
  }
}

back() {
  this.navCtrl.setRoot(JuegosPage);
}

}
