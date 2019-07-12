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
  public listaEncuestasClientes;
  public listaClientes;
  public listaEspera; 
  public correo;
  public usuarioActual;
  public verEncuestas = false;
  constructor(public navCtrl: NavController,
    public alert: AlertProvider, 
    private modalCtrl: ModalController, 
    public navParams: NavParams,
    private auth: AuthProvider,
    private spinner: SpinnerProvider) {

      console.log("valor inicial");
      console.log(this.verEncuestas);
      this.usuarioActual=JSON.parse(localStorage.getItem("usuario"));
      console.log(this.usuarioActual);
      if(this.usuarioActual.tipo == 'cliente' || this.usuarioActual.tipo == 'cliente anonimo') {
 //       console.log(this.usuarioActual);
  //      console.log("es cliente o anonimo");
   //     this.verificarEstado();  
   
            
            console.log(this.usuarioActual); 
            this.listaEspera =new Array();
            this.auth.getListaEspera().subscribe(lista => {   
                  this.listaEspera=lista;  
                  console.log(this.listaEspera);
                  for(let i=0;i<this.listaEspera.length;i++)
                  {
                    if(this.listaEspera[i].correo == this.usuarioActual.correo) {
                      if (this.listaEspera[i].estado=="en espera"){
                          this.verEncuestas=true;
                          console.log(this.verEncuestas);
                          console.log(this.listaEspera[i]);
                          console.log("puedo ver las encuestas");
                          break;
                      }
                    } 
                  } 
                  if (!this.verEncuestas){
                    this.alert.mostrarErrorLiteral("Solo puede ver las encuestas si esta en Espera");
                    this.navCtrl.setRoot(PrincipalPage);
                  }  
                  console.log("con que valor sale el booleano");
                  console.log(this.verEncuestas); 
                  if (this.verEncuestas){
                    console.log("Si, las puedo ver");
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
          });
      }
   //   console.log("se modifico el booleano");
    //  console.log(this.verEncuestas);
   
     
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
 /* verificarEstado(){
    this.verEncuestas=false; 
    console.log(this.usuarioActual); 
    this.listaEspera =new Array();
    this.auth.getListaEspera().subscribe(lista => {   
          this.listaEspera=lista;  
          console.log(this.listaEspera);
          for(let i=0;i<this.listaEspera.length;i++)
          {
            if(this.listaEspera[i].correo == this.usuarioActual.correo) {
              if (this.listaEspera[i].estado=="en espera"){
                  this.verEncuestas=true;
                  console.log(this.verEncuestas);
                  console.log(this.listaEspera[i]);
                  console.log("puedo ver las encuestas");
                  break;
              }
            } 
          } 
          if (!this.verEncuestas){
            this.alert.mostrarErrorLiteral("Solo puede ver las encuestas si esta en Espera");
            this.navCtrl.setRoot(PrincipalPage);
          }  
          console.log("con que valor sale el booleano");
          console.log(this.verEncuestas);   
   });

  }*/




}
