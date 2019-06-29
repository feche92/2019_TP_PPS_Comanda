import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { VerEncuestaClientePage } from '../ver-encuesta-cliente/ver-encuesta-cliente';
import { SpinnerProvider } from "../../providers/spinner/spinner";
import { AuthProvider } from "../../providers/auth/auth";
import { PrincipalPage } from "../../pages/principal/principal";
import { AlertProvider } from "../../providers/alert/alert";

/**
 * Generated class for the ListadoEncuestasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listado-encuestas',
  templateUrl: 'listado-encuestas.html',
})
export class ListadoEncuestasPage {
  listaEncuestasClientes;
  listaClientes;
  listaEspera;
  correo;
  usuarioActual;
  verEncuestas;
  constructor(public navCtrl: NavController,
    public alert: AlertProvider, 
    private modalCtrl: ModalController, 
    public navParams: NavParams,
    private auth: AuthProvider,
    private spinner: SpinnerProvider) {


      this.verEncuestas=false;
      this.usuarioActual=JSON.parse(localStorage.getItem("usuario"));
      if(this.usuarioActual.tipo == 'cliente' || this.usuarioActual.tipo == 'cliente anonimo') {
        this.verificarEstado();        
      }
      if (this.verEncuestas){
        this.listaEncuestasClientes=new Array();
        let spiner=this.spinner.getAllPageSpinner();
        spiner.present();
  
        //traigo los usuario para ver cuales son clientes
        this.auth.getEncuestasClientes().subscribe(lista => {
          this.listaEncuestasClientes=lista;  
          console.log(this.listaEncuestasClientes);
    
       });
        console.log("ver lista de encuestas");
          console.log(this.listaEncuestasClientes);
          spiner.dismiss();
      }
     
  }
//---------FIN CONSTRUCTOR-----------------------
  
  
//--------------------------------
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoEncuestasPage');
  }

//--------------------------------
  MostrarEncuesta(encuesta) {
    console.log("Mostrar Encuesta de:" + encuesta.nombre);
    localStorage.setItem("nombre",encuesta.nombre);
    localStorage.setItem("correo",encuesta.correo);
    console.log(encuesta)
    this.modalCtrl.create(VerEncuestaClientePage, { }).present();
  }

//--------------------------------
  verificarEstado(){
    this.verEncuestas=false; 
    console.log(this.usuarioActual); 
    this.listaEspera =new Array();
    this.auth.getListaEspera().subscribe(lista => {     
      console.log(this.listaEspera);
      for(let i=0;i<this.listaEspera.length;i++)
      {
        if(this.listaEspera[i].correo == this.usuarioActual.correo) {
           if (this.listaEspera[i].estado=="en espera")
               this.verEncuestas=true;
        } 
      } 
      if (!this.verEncuestas){
        this.alert.mostrarErrorLiteral("Solo puede ver las encuestas si esta en Espera");
        this.navCtrl.setRoot(PrincipalPage);
      }     
   });

  }




}
