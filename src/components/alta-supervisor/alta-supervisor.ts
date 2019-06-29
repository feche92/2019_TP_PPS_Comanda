import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from "firebase";
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the AltaSupervisorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alta-supervisor',
  templateUrl: 'alta-supervisor.html'
})
export class AltaSupervisorComponent {

  firebase = firebase;
  nombre: string;
  apellido: string;
  dni: number;
  cuil: string;
  foto: string;
  perfil: string = "supervisor";
  email: string;
  clave: string;
  clave2: string;

  constructor(private camera: Camera, private auth: AuthProvider, public alert: AlertProvider,
    private scanner: BarcodeScanner) {
    
  }

  alta(){
    if(this.nombre != undefined && this.apellido != undefined && this.dni != undefined 
      && this.cuil != undefined && this.foto != undefined && this.email != undefined
      && this.clave != undefined && this.clave2 != undefined){
        if(this.dni.toString().length == 8 && this.cuil.toString().length == 11 
          && this.clave.length >= 6 && this.clave == this.clave2){

            this.auth.crearUsuario(this.email, this.clave).then(res =>{
              let data = {
                'nombre': this.nombre,
                'apellido': this.apellido,
                'dni': this.dni,
                'cuil': this.cuil,
                'foto': this.foto,
                'tipo': this.perfil,
                'correo': this.email,
                'estado': '',
                'logueado': false
              }
              this.auth.guardarUsuario(data).then(response =>{
                this.alert.mostrarMensaje("Supervisor creado");
              })
              .catch(error => {
                this.alert.mostrarErrorLiteral(error,"Ocurrio un error al registrar el usuario");
                console.log(error);
              })
            });
        }
        else{
            if(this.dni.toString().length != 8){
              this.alert.mostrarErrorLiteral("El dni debe tener 8 números");
            }
            if(this.cuil.toString().length != 11){
              this.alert.mostrarErrorLiteral("El cuil debe tener 11 números");
            }
            if(this.clave.length < 6){
              this.alert.mostrarErrorLiteral("La clave debe tener por lo menos 6 caracteres");
            }
            if(this.clave != this.clave2){
              this.alert.mostrarErrorLiteral("Las claves deben ser iguales");
            }
        }
    }
    else{
      if(this.nombre == undefined || this.apellido == undefined || this.dni == undefined || 
        this.cuil == undefined || this.email == undefined || this.clave == undefined
        || this.clave2 == undefined){
        this.alert.mostrarErrorLiteral("Hay campos sin rellenar");
      }
      if(this.foto == undefined){
        this.alert.mostrarErrorLiteral("Se debe cargar una foto");
      }
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
      let pictures = this.firebase.storage().ref(`supervisores/${imageName}`);
      

      //tomo url de foto en Firebase Storage
      pictures.putString(image, "data_url").then(() => {

        pictures.getDownloadURL().then((url) => {

      	   this.foto = url;
          /*
          let baseRef = this.firebase.database().ref(this.sala);
          baseRef.push({ "usuario": this.usuario.correo, "url": url, "votos": 0, "fecha":  fecha});
          */
        });
        
      });

    } catch (error) {

      alert(error);
    }
  }

  escanear(){
    let options = { prompt: "Escaneá el DNI", formats: "PDF_417" };

    this.scanner.scan().then(barcodeData => {
      alert(barcodeData.text);
      this.dni = +barcodeData.text;

    }).catch(err => { 
      console.log('Error', err);
    });
  }

}
