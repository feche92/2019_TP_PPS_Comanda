import { Component } from '@angular/core';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { NavController } from 'ionic-angular';
import { PrincipalPage } from "../../pages/principal/principal";
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Componente que muestra un listado de clientes con sus estados respectivos
 * usuario registrado/ pendiente de aprobacion
 * y da la posibilidad de cambiar a uno u otro estado
 * SOLO SUPERVISOR
 */
@Component({
  selector: 'lista-cliente-estado',
  templateUrl: 'lista-cliente-estado.html'
})
export class ListaClienteEstadoComponent {

  clientes: any[] = [];

  constructor(private auth: AuthProvider, public alert: AlertProvider, 
  	public navCtrl: NavController, private email: EmailComposer) {
    this.traerClientes();
  }

  traerClientes(){
  	this.auth.getUsuarios().subscribe(lista =>{
	  	for(let item of lista){

	  		if(item.tipo == 'cliente'){
	  			this.clientes.push(item);
	  		}
	  	}
  	});
  }

  modificarRegistro(e){
  	console.log(e);
  	if(e.estado == "Pendiente de aprobación"){
	  	e.estado = "Aprobado";
      
      this.auth.crearUsuario(e.correo, e.clave).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode == 'auth/email-already-in-use'){
          console.log(errorMessage);
        }
      });
      
      this.sendMail(e);
  	}
  	else{
  		e.estado = "Pendiente de aprobación";
  	}
  	this.auth.updateUsuario(e)
  	.then(response =>{
	  	//console.log(response);
	  	this.alert.mostrarMensaje("Estado de cliente modificado correctamente!");
  	});
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  sendMail(e){
    let image = "../../assets/Imagenes/icon.png";
    let email = {
      //to: this.email,
      to: 'samy32m@gmail.com',
      //cc: 'samy32m@gmail.com',
      attachments: [
        image
      ],
      subject: 'Registro Aprobado',
      body: 'Hola ' + e.nombre + ', tu registro en Grills fue aprobado exitosamente. Saludos!',
      isHtml: true,
      app: "Gmail"
    }

    this.email.open(email);
    console.log("envio realizado!");
  }

}
