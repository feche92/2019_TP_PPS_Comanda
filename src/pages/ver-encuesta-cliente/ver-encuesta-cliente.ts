import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AlertProvider } from "../../providers/alert/alert";
import * as firebase from "firebase";
import { AuthProvider } from "../../providers/auth/auth";
import { PrincipalPage } from '../principal/principal';
import { SpinnerProvider } from "../../providers/spinner/spinner";

/**
 * Generated class for the VerEncuestaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-encuesta-cliente',
  templateUrl: 'ver-encuesta-cliente.html',
})
export class VerEncuestaClientePage {

firebase = firebase;  
  limpieza: any;
  fecha: string;
  encuestasClientes;
  listaClientes;
  encuesta;
  nombre;
  correo;
  public pregunta1:string;
  public pregunta2:string;
  public pregunta3:string;
  public pregunta4:string;
  public pregunta5:string;
  public pregunta6:string;
  public comentario:string;
  public respuesta1:string;
  public respuesta2:string;
  public respuesta3:string;
  public respuesta4:string;
  public respuesta5:string;
  public respuesta6:string;

  constructor(public alert: AlertProvider,public navCtrl: NavController, private spinner: SpinnerProvider,	private auth: AuthProvider)  {

    this.encuestasClientes=new Array();
    this.nombre = localStorage.getItem("nombre");
    this.correo = localStorage.getItem("correo");
    console.log(this.nombre);
    console.log(this.correo);
    let spiner=this.spinner.getAllPageSpinner();
    spiner.present();

    //traigo los usuario para ver cuales son clientes
    
    this.auth.getEncuestasClientes().subscribe(lista => {
      this.encuestasClientes=lista;  
      console.log(this.encuestasClientes);

      for(let i=0;i<this.encuestasClientes.length;i++)
      {
        if(this.encuestasClientes[i].nombre == this.nombre) {
          if(this.encuestasClientes[i].correo == this.correo) {
            console.log(this.encuestasClientes[i]);
           
            this.pregunta1=this.encuestasClientes[i].pregunta1;
            this.respuesta1=this.encuestasClientes[i].respuesta1;

            this.pregunta2=this.encuestasClientes[i].pregunta2;
            this.respuesta2=this.encuestasClientes[i].respuesta2;

            this.pregunta3=this.encuestasClientes[i].pregunta3;
            this.respuesta3=this.encuestasClientes[i].respuesta3;

            this.pregunta4=this.encuestasClientes[i].pregunta4;
            this.respuesta4=this.encuestasClientes[i].respuesta4;

            this.pregunta5=this.encuestasClientes[i].pregunta5;
            this.respuesta5=this.encuestasClientes[i].respuesta5;

            this.pregunta6=this.encuestasClientes[i].pregunta6;
            this.respuesta6=this.encuestasClientes[i].respuesta6;

            this.comentario=this.encuestasClientes[i].comentario;
                      
            break;
          }
        }
     
      }
      console.log("la encuesta");
     console.log(this.encuesta);

     console.log("this.pregunta1");
     console.log(this.pregunta1);
     
    });
  
      
      spiner.dismiss();
    }

  



  ionViewDidLoad() {
    console.log('ionViewDidLoad VerEncuestaClientePage');
  }

  VolverAtras() {
    this.navCtrl.setRoot(PrincipalPage);
  }

}