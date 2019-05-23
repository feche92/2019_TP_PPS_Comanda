import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from "firebase";

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
  perfil: string;

  constructor(private camera: Camera) {
    
  }

  alta(){
  	
  }

  async abrirCamara() {

    /*
    let date = new Date();
    let imageName = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}-${date.getMilliseconds()}`;
    let fecha = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    */
    let imageName = dni + apellido;

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

      	// guardo en database
      	/*
          let baseRef = this.firebase.database().ref(this.sala);
          baseRef.push({ "usuario": this.usuario.correo, "url": url, "votos": 0, "fecha":  fecha});
        */
        });
        
      });
      //location.reload();

    } catch (error) {

      alert(error);
    }
  }

}
