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

  constructor(private camera: Camera, private auth: AuthProvider, public alert: AlertProvider,
    private scanner: BarcodeScanner) {
    
  }

  alta(){
    if(this.nombre != undefined && this.apellido != undefined && this.dni != undefined && this.cuil != undefined 
      && this.foto != undefined){
        if(this.dni.toString().length == 8 && this.cuil.toString().length == 11 && this.clave.length >= 6){

            this.auth.crearUsuario(this.email, this.clave).then(res =>{
              let data = {
                'nombre': this.nombre,
                'apellido': this.apellido,
                'dni': this.dni,
                'cuil': this.cuil,
                'foto': this.foto,
                'perfil': this.perfil,
                'correo': this.email,
                'estado': '',
                'logueado': false
              }
              this.auth.guardarUsuario(data).then(response =>{
                this.alert.mostrarMensaje("Supervisor creado");
              })
              .catch(error => {
                this.alert.mostrarError(error,"Ocurrio un error al registrar el usuario");
                console.log(error);
              })
            });
        }
        else{
            if(this.dni.toString().length != 8){
              this.alert.mostrarMensaje("El dni debe tener 8 números");
            }
            if(this.cuil.toString().length != 11){
              this.alert.mostrarMensaje("El cuil debe tener 11 números");
            }
            if(this.clave.length < 6){
              this.alert.mostrarMensaje("La clave debe tener por lo menos 6 caracteres");
            }
        }
    }
    else{
      if(this.nombre == undefined || this.apellido == undefined || this.dni == undefined || 
        this.cuil == undefined || this.email == undefined){
        this.alert.mostrarMensaje("Hay campos sin rellenar");
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

    this.scanner.scan(options).then(barcodeData => {
      alert(barcodeData);
      alert(barcodeData.text);
      this.dni = barcodeData.text;
      /*let dniDatos = barcodeData.text.split("@");
      this.apellido = dniDatos[1];
      this.nombre = dniDatos[2];
      this.dni = dniDatos[4];
      this.cuil=dniDatos[8][0]+dniDatos[8][1]+this.dni+dniDatos[8][2];
      this.datos=dniDatos;*/
    }).catch(err => { 
      console.log('Error', err);
    });
  }

}