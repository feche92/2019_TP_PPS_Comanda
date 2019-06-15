import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from "firebase";
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";

@Component({
  selector: 'alta-producto',
  templateUrl: 'alta-producto.html'
})
export class AltaProductoComponent {
  firebase = firebase;
  tipo: string;
  descripcion: string;
  nombre: number;
  tiempoPromedioElaboracion: string;  
  foto: string;
  lectorQR: boolean;
  precio: number;

  constructor(private camera: Camera, private auth: AuthProvider, private alert: AlertProvider) {
    console.log('Hello AltaProductoComponent Component');
  }

  alta(){
    let data;
    if(this.nombre != undefined && this.foto != undefined){
            data = {
                'nombre': this.nombre,
                'tipo': this.tipo,
                'descripcion': this.descripcion,
                'foto': this.foto,
                'precio': this.precio,
                'lectorQR': this.lectorQR,
                'tiempoPromedioElaboracion': this.tiempoPromedioElaboracion,

              }     
         
      this.auth.guardarProducto(data).then(response =>{
            this.alert.mostrarMensaje("Producto Guardado");
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

    let imageName = this.nombre;

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
      let pictures = this.firebase.storage().ref(`productos/${imageName}`);      
      pictures.putString(image, "data_url").then(() => {
        pictures.getDownloadURL().then((url) => {
      	   this.foto = url;      
        });
        
      });

    } catch (error) {

      alert(error);
    }
  }

 


}
