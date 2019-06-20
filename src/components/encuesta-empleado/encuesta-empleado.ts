import { Component, Inject } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AlertProvider } from "../../providers/alert/alert";
import * as firebase from "firebase";
import { AuthProvider } from "../../providers/auth/auth";

/**
 * Generated class for the EncuestaEmpleadoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'encuesta-empleado',
  templateUrl: 'encuesta-empleado.html'
})
export class EncuestaEmpleadoComponent {

  firebase = firebase;
  dia: string;
  foto: string = "prueba";
  turno: string;
  rol: string;
  comentario: string = "";
  limpieza: any;
  fecha: string;
  rol_mozo = [
      { val: 'Mesas', isChecked: false },
      { val: 'Entrada', isChecked: false },
      { val: 'Pisos', isChecked: false },
      { val: 'Baños', isChecked: false }
    ];
  rol_cocinero = [
      { val: 'Congelador', isChecked: false },
      { val: 'Platos', isChecked: false },
      { val: 'Utensilios', isChecked: false },
      { val: 'Asador/Cocina', isChecked: false }
    ];
  rol_bartender = [
      { val: 'Lavaplatos', isChecked: false },
      { val: 'Barra', isChecked: false },
      { val: 'Deposito de Bebidas', isChecked: false }
    ];



  constructor(private camera: Camera, public alert: AlertProvider,
  	private auth: AuthProvider) {
  	let date = new Date();
    this.fecha = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    //this.rol = usuario.tipo;
    this.rol = 'mozo';
    console.log(this.rol);
  }

  guardar(){

  	if(this.foto != undefined){
	  	if(this.turno != undefined && this.rol != undefined){
	  		let check;
	  		switch(this.rol){
	  			case 'mozo':
	  				check = this.rol_mozo;
	  			break;
	  			case 'bartender':
	  				check = this.rol_bartender;
	  			break;
	  			case 'cocinero':
	  				check = this.rol_cocinero;
	  			break;
	  		}

	  		let data = {
	  			'foto': this.foto,
	  			'turno': this.turno,
	  			'rol': this.rol,
	  			'comentario': this.comentario,
	  			'fecha': this.fecha,
	  			'nivelLimpieza': this.limpieza,
          'dia': this.dia
	   		};
	   		//console.log(data);
	   		for(let item of check){
	   			data[item.val] = item.isChecked;
	   		}
	   		console.log(data);
	  		this.auth.guardarEncuestaEmpleado(data);
	  		this.alert.mostrarMensaje("Listo!");

	  	}
	  	else{
	  		this.alert.mostrarErrorLiteral("Hay campos sin rellenar");
	  	}
  	}
  	else{
  		this.alert.mostrarErrorLiteral("Falta cargar una foto");
  	}
  }


  async abrirCamara() {
    let date = new Date();
  	let fecha = this.fecha + `${date.getHours()}:${date.getMinutes()}`;
    let imageName = fecha;
    //console.log(imageName);

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
      let pictures = this.firebase.storage().ref(`encuesta_empleado/${imageName}`);
      

      //tomo url de foto en Firebase Storage
      pictures.putString(image, "data_url").then(() => {

        pictures.getDownloadURL().then((url) => {

      	   this.foto = url;
        });
        
      });

    } catch (error) {
      this.alert.mostrarErrorLiteral(error, "Ocurrio un error");
    }
  }

}
