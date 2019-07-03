import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';
import { SpinnerProvider } from '../../providers/spinner/spinner';
import * as firebase from "firebase";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PrincipalPage } from '../principal/principal';
import { Chart } from 'chart.js';
import { GraficoEncuestaClientePage } from '../grafico-encuesta-cliente/grafico-encuesta-cliente';



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
  
  firebase = firebase;
  foto: string;
  fecha: string;
  usuario;
  encuestasClientes;
  encuestaClienteActual;
  encuestaCliente;
  public yaExiste=false;
  public opinion = 3;
  public pregunta1: string = "Sexo";
  public pregunta2: string = "¿Como conocio nuestro restaurant?";
  public pregunta3: string = "¿Cómo calificaría la cortesía y trato de los empleados de “Grill”?";
  public pregunta4: string = "¿Recomendaria nuestro restaurant “Grill”?";
  public pregunta5: string = "Cuál es la razón por la que nos elije?";
  public pregunta6: string = "Calidad de la comida";

  public respuesta1: string="mujer";
  public respuesta2: string ="Internet";
  public respuesta3: string ="Muy Buena";
  public respuesta4: string= "si";
  public respuesta5: string ="Calidad";
  public respuesta6: string="buena";

  public correo: string ="";
  public comentario: string = "";
  public nombre:string="";
   
  constructor(public alert: AlertProvider, private camera: Camera, 
    public navCtrl: NavController, public navParams: NavParams,
    private auth:AuthProvider,
    private error: AlertProvider,
    
    private spiner: SpinnerProvider,
    private modalCtrl: ModalController,) {   
      let spinner=this.spiner.getAllPageSpinner();
    //this.usuario = navParams.get("usuario");
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    console.log(this.usuario);
    this.encuestaExiste();

    
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestaClientePage');
  }

  VolverAtras() {
    this.navCtrl.setRoot(PrincipalPage);
  }


  EnviarEncuesta() {
    console.log("enviar encuesta");
    let spiner=this.spiner.getAllPageSpinner();
    spiner.present();
    
    if(this.usuario.tipo == "cliente anonimo"){
      this.encuestaCliente= {
        "nombre": this.usuario.nombre,
        "pregunta1":this.pregunta1,
        "respuesta1":this.respuesta1,
        "pregunta2":this.pregunta2,
        "respuesta2":this.respuesta2,
        "pregunta3":this.pregunta3,
        "respuesta3":this.respuesta3,
        "pregunta4":this.pregunta4,
        "respuesta4":this.respuesta4,
        "pregunta5":this.pregunta5,
        "respuesta5":this.respuesta5,
        "pregunta6":this.pregunta6,
        "respuesta6":this.respuesta6,
        "comentario": this.comentario
      }
    }
    else{
      this.encuestaCliente= {
        "nombre": this.usuario.nombre,
        "correo":this.usuario.correo,
        "pregunta1":this.pregunta1,
        "respuesta1":this.respuesta1,
        "pregunta2":this.pregunta2,
        "respuesta2":this.respuesta2,
        "pregunta3":this.pregunta3,
        "respuesta3":this.respuesta3,
        "pregunta4":this.pregunta4,
        "respuesta4":this.respuesta4,
        "pregunta5":this.pregunta5,
        "respuesta5":this.respuesta5,
        "pregunta6":this.pregunta6,
        "respuesta6":this.respuesta6,      
        "comentario": this.comentario
      }
    }
   console.log(this.encuestaCliente);
    localStorage.setItem('encuesta', 'true');
    if (this.yaExiste){
      this.encuestaCliente.id=this.encuestaClienteActual.id;
      this.auth.modificarEncuestaCliente(this.encuestaCliente).then(res => {
        this.error.mostrarMensaje("Se ha actualizado correctamente la encuesta.");
          //mostrar grafico de torta
          this.navCtrl.setRoot(GraficoEncuestaClientePage);
          console.log("veo grafico de encuestas");
        spiner.dismiss();
        
       // this.VolverAtras();
      // this.modalCtrl.create(EstadisticasClientePage, { usuario: this.usuario }).present();
      }).catch(error => {
        this.error.mostrarError(error,"error al guardar la encuesta");
        spiner.dismiss();
      });
    }
    else{
       this.auth.nuevaEncuestaCliente(this.encuestaCliente).then(res => {
        this.error.mostrarMensaje("Se ha cargado correctamente la encuesta.");
        spiner.dismiss();
        this.VolverAtras();
      // this.modalCtrl.create(EstadisticasClientePage, { usuario: this.usuario }).present();
      }).catch(error => {
        this.error.mostrarError(error,"error al guardar la encuesta");
        spiner.dismiss();
      });
    }
 

  }

  async abrirCamara() {
    let date = new Date();
  	let fecha = this.fecha + `${date.getHours()}:${date.getMinutes()}`;
    let imageName = fecha;

    try {

      let options: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };

      let result = await this.camera.getPicture(options);
      let image = `data:image/jpeg;base64,${result}`;
      //guardo en Firebase Storage
      let pictures = this.firebase.storage().ref(`encuestaCliente/${imageName}`);     

      //tomo url de foto en Firebase Storage
      pictures.putString(image, "data_url").then(() => {

        pictures.getDownloadURL().then((url) => {

      	   this.foto = url;
        });
        
      });

    } catch (error) {
      this.alert.mostrarError(error, "Ocurrio un error");
    }
  }

  
  ModificarTextoRange() {

    let arrayAux = ['muy mala','mala','buena','muy buena','excelente'];
    this.respuesta6= arrayAux[this.opinion - 1];
   
  }

  encuestaExiste(){
    //traigo todas las encuestas   
    this.auth.getEncuestasClientes().subscribe(lista => {
       this.encuestasClientes=lista;  
       console.log(this.encuestasClientes);
       for(let i=0;i<this.encuestasClientes.length;i++){
            if(this.encuestasClientes[i].correo == this.usuario.correo) {
                //verifico si el cliente ya tiene creada una encuesta y la modifico
                this.yaExiste=true;
                console.log("la encuesta ya existe");
                console.log(this.encuestasClientes[i]);
                this.encuestaClienteActual=this.encuestasClientes[i];
                console.log("encuesta cliente actual");
                console.log(this.encuestaClienteActual);
                break;
            }
        }
    });
  }
}



