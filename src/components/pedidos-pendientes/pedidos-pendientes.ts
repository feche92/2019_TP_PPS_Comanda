import { Component } from '@angular/core';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { NavController } from 'ionic-angular';

export interface pedido {
  apellidoCliente:string,
  correo:string,
  estado:string,
  fecha:string,
  precio:string,
  id: string,
  montoTotal: string,
  nombreCliente: string,
  numero: string,
  productos: any[],
}

@Component({
  selector: 'pedidos-pendientes',
  templateUrl: 'pedidos-pendientes.html'
})
export class PedidosPendientesComponent {

  pedidos: pedido[] = [];
  hayProducto: boolean = false;
  usuario: any;

  constructor(private auth: AuthProvider, public alert: AlertProvider,
    public navCtrl: NavController) {
  }

  traerPedidos(){
  	this.usuario = JSON.parse(localStorage.getItem("usuario"));
  	this.auth.getLista('pedidos').subscribe(lista => {
  		switch(this.usuario.perfil){
			case 'cocinero':
				for(let i = 0; i<lista.productos.lenght; i++){
					if(lista.productos[i].estado == 'pendiente' && lista.productos[i].tipo == 'plato'){
						//this.pedidos.push(item);
						this.hayProducto = true;
					}

				}
				for(let item of lista.productos){
				}
			break;
			case 'bartender':
				this.pedidos.push(item);
				this.hayProducto = true;
			break;
		}
  		/*
  		for(let item of lista.productos){
  			if(item.estado == 'pendiente'){
  				switch(this.usuario.perfil){
  					case 'cocinero':
	  					this.productos.push(item);
	  					this.hayProducto = true;
	  				break;
	  				case 'bartender':
	  					this.productos.push(item);
	  					this.hayProducto = true;
	  				break;
  				}
  			}
  		}
  		*/
  	});
  }


  prepararPlato(producto){
  	console.log(producto);

  }

}
