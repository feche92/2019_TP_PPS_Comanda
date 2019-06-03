import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from "firebase";
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../../pages/home/home";

/**
 * Generated class for the AltaClienteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alta-cliente',
  templateUrl: 'alta-cliente.html'
})
export class AltaClienteComponent {

  firebase = firebase;
  nombre: string;
  apellido: string;
  dni: number;
  foto: string = "prueba"; 
  perfil: string = "cliente registrado"; //cliente anonimo
  //anonimo: boolean = false;
  email: string;
  clave: string;
  clave2: string;
  estado: string = "Pendiente de aprobación";

  constructor(private camera: Camera, private auth: AuthProvider, public alert: AlertProvider,
    private scanner: BarcodeScanner, public navCtrl: NavController) {
  }

  alta(){
    let data;
    if(this.nombre != undefined && this.foto != undefined && this.email != undefined
      && this.clave != undefined && this.apellido != undefined && this.dni != undefined
      && this.dni.toString().length == 8 && this.clave2 != undefined){
        if(this.clave == this.clave2){
          this.perfil = "cliente registrado";
          data = {
              'nombre': this.nombre,
              'apellido': this.apellido,
              'dni': this.dni,
              'foto': this.foto,
              'perfil': this.perfil,
              'tipo': 'cliente',
              'estado': this.estado,
              'logueado': false
          }

          this.auth.guardarUsuario(data).then(response =>{
              this.alert.mostrarMensaje("Cliente registrado");
              this.navCtrl.setRoot(HomePage);
          });
        }
        else{
          this.alert.mostrarError("Las contraseñas son distintas");
        }
    }
    else{
      if(this.nombre == undefined || this.email == undefined || this.clave == undefined 
        ||  this.apellido == undefined ||  this.dni == undefined || this.clave2 == undefined){
        this.alert.mostrarError("Hay campos sin rellenar");
      }
      if(this.foto == undefined){
        this.alert.mostrarError("Falta cargar una foto");
      }
      if(this.dni.toString().length < 8 || this.dni.toString().length > 8)
        this.alert.mostrarError("El dni debe tener 8 caracteres");
    }
  	
  }

  async abrirCamara() {

    let imageName = this.dni + this.apellido;

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
      let pictures = this.firebase.storage().ref(`clientes/${imageName}`);
      

      //tomo url de foto en Firebase Storage
      pictures.putString(image, "data_url").then(() => {

        pictures.getDownloadURL().then((url) => {

      	   this.foto = url;
        });
        
      });

    } catch (error) {

      alert(error);
    }
  }

  escanear(){
    let options = { prompt: "Escaneá el DNI", formats: "PDF_417" };

    this.scanner.scan(options).then(barcodeData => {
      //alert(barcodeData.text);
      this.dni = +barcodeData.text;

    }).catch(err => { 
      console.log('Error', err);
    });
  }


}
