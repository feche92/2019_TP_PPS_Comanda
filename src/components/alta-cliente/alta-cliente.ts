import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from "firebase";
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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
  foto: string;  
  perfil: string = "cliente registrado"; //cliente anonimo
  anonimo: boolean = false;

  constructor(private camera: Camera, private auth: AuthProvider, public alert: AlertProvider,
    private scanner: BarcodeScanner) {
    console.log('Hello AltaClienteComponent Component');
  }

  alta(){
    let data;
    if(this.nombre != undefined && this.foto != undefined){
        if(this.anonimo){
          this.perfil = "cliente anonimo";
          data = {
                'nombre': this.nombre,
                'foto': this.foto,
                'perfil': this.perfil,
                'estado': '',
                'logueado': false
              }
        }
        else{
          if(this.apellido != undefined && this.dni != undefined){
            if(this.dni.toString().length == 8){
              this.perfil = "cliente registrado";
              data = {
                  'nombre': this.nombre,
                  'apellido': this.apellido,
                  'dni': this.dni,
                  'foto': this.foto,
                  'perfil': this.perfil,
                  'estado': '',
                  'logueado': false
                }
            }else{
              this.alert.mostrarMensaje("El dni debe tener 8 números");
            }
          }
          else{
            this.alert.mostrarMensaje("Hay campos sin rellenar");
          }
        }

        this.auth.guardarCliente(data).then(response =>{
            this.alert.mostrarMensaje("Cliente registrado");
        });
    }
    else{
      if(this.nombre == undefined){
        this.alert.mostrarMensaje("Hay campos sin rellenar");
      }
      if(this.foto == undefined){
        this.alert.mostrarMensaje("Falta cargar una foto");
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
      let pictures = this.firebase.storage().ref(`clientes/${imageName}`);
      

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
      //alert(barcodeData.text);
      this.dni = +barcodeData.text;

    }).catch(err => { 
      console.log('Error', err);
    });
  }


}
