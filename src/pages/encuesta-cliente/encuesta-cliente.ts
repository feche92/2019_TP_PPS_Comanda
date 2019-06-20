import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';
import { SpinnerProvider } from '../../providers/spinner/spinner';


/**
 * Generated class for the EncuestaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuesta-cliente',
  templateUrl: 'encuesta-cliente.html',
})
export class EncuestaClientePage {
  usuario;
  encuestaClientes;
  encuestaCliente;
  public pregunta1: string = "Cuál es la razón por la que nos elije?";
  public pregunta2: string = "Como conocio nuestro restaurant?";
  public respuesta1: string ="Calidad";
  public respuesta2: string ="Internet";
   
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth:AuthProvider,
    private error: AlertProvider,
    private spiner: SpinnerProvider,
    private modalCtrl: ModalController,) {
 
    

    this.usuario = navParams.get("usuario");
    console.log(this.usuario);

    //creo una nueva encuesta
    this.encuestaCliente=new Array();   

   
       


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestaClientePage');
  }

  VolverAtras() {
    this.navCtrl.pop();
  }

  ModificarTextoRange() {
    console.log("modificar rango");
    let arrayAux = ['Pésimo'];
  
  }

  EnviarEncuesta() {
    console.log("enviar encuesta");
    let spiner=this.spiner.getAllPageSpinner();
    spiner.present();

    console.log(this);
    console.log(this.encuestaCliente);
    
    console.log(this.encuestaCliente);

    let data= {
      "pregunta1":this.pregunta1,
      "respuesta1":this.respuesta1,
      "pregunta2":this.pregunta2,
      "respuesta2":this.respuesta2
       
    }
   console.log(data);

    this.auth.nuevaEncuestaCliente(data).then(res => {
      this.error.mostrarMensaje("Se ha cargado correctamente la encuesta.");
      spiner.dismiss();
    // this.modalCtrl.create(EstadisticasClientePage, { usuario: this.usuario }).present();
    }).catch(error => {
      this.error.mostrarError(error,"error al guardar la encuesta");
      spiner.dismiss();
    });

  }

}
