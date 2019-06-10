import { Component } from '@angular/core';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { NavController } from 'ionic-angular';
import { PrincipalPage } from "../../pages/principal/principal";

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
  	public navCtrl: NavController) {
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
      this.auth.crearUsuario(e.correo, e.clave);
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

  cancelar(){
  	this.navCtrl.setRoot(PrincipalPage);
  }

}
