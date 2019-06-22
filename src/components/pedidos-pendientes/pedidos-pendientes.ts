import { Component } from '@angular/core';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { NavController } from 'ionic-angular';
import { PrincipalPage } from "../../pages/principal/principal";
import * as moment from 'moment';

export interface pedido {
  correo:string,
  nombreCliente:string,
  apellidoCliente:string,
  estado:string,
  fecha:string,
  numero:string,
  tipo:string,
  productos:Array<any>,
  montoTotal:string,
  id:string,
}

@Component({
  selector: 'pedidos-pendientes',
  templateUrl: 'pedidos-pendientes.html'
})
export class PedidosPendientesComponent {

  pedidos: pedido[] = [];
  hayProducto: boolean = false;
  usuario: any;
  listaPedidosOriginal = [];

  constructor(private auth: AuthProvider, public alert: AlertProvider,
    public navCtrl: NavController) {
  	this.traerPedidos();
  }

  traerPedidos(){
  	this.pedidos = [];
  	this.usuario = JSON.parse(localStorage.getItem("usuario"));
  	this.auth.getPedidos().subscribe(lista => {
  		this.pedidos = [];
  		this.listaPedidosOriginal = lista;
		console.log(lista);
  		switch(this.usuario.tipo){
			case 'cocinero':
				for(let item of lista){
					//console.log(item);
					if(item.productos != undefined){
						for(let i = 0; i < item.productos.length; i++){
							if(item.productos[i].tipo != 'plato'){
								item.productos.splice(i, 1);
							}
						}
						if(item.estado == 'esperando pedido'){
							let i = 0;
							let flag = false;
							while(!flag){
								if(item.productos[i].estado == 'pendiente' && item.productos[i].tipo == 'plato'){
									this.pedidos.push(item);
									this.hayProducto = true;
									flag = true;
								}
								if(item.productos.length == i++)	
									flag = true;
							}
						}
						else if(item.estado == 'preparando pedido'){
							let id = JSON.parse(localStorage.getItem('pedidosTomados'));
							if(id.toString() == item.id.toString()){
								this.pedidos.push(item);
								this.hayProducto = true;
							}
						}
					}
				}
			break;
			case 'bartender':
				for(let item of lista){
					if(item.productos != undefined){
						for(let i = 0; i < item.productos.length; i++){
							if(item.productos[i].tipo != 'bebida'){
								item.productos.splice(i, 1);
							}
						}
						if(item.estado == 'esperando pedido'){
							let i = 0;
							let flag = false;
							while(!flag){
								if(item.productos[i].estado == 'pendiente' && item.productos[i].tipo == 'bebida'){
									this.pedidos.push(item);
									this.hayProducto = true;
									flag = true;
								}
								if(item.productos.length == i++)	
									flag = true;
							}
						}
						else if(item.estado == 'preparando pedido'){
							let id = localStorage.getItem('pedidosTomados');
							if(id != undefined && id == item.id){
								this.pedidos.push(item);
								this.hayProducto = true;
							}
						}
					}
				}
			break;
		}
		console.log(this.pedidos);
  	});
  }

  pedirPreparar(pedido){
  	let alertConfirm = this.alert.mostrarMensajeConfimación("¿Estas seguro de tomar el pedido?", "Tomar Pedido");
    alertConfirm.present();
    alertConfirm.onDidDismiss((confirm) => {
      if (confirm) {
        this.prepararPlato(pedido);
      }
    });
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  prepararPlato(pedido){
  	//console.log(pedido);

  	pedido.estado = "preparando pedido";
  	var tipoProducto = "";
  	if(this.usuario.tipo == 'cocinero')
  		tipoProducto = 'plato';
  	else
  		tipoProducto = 'bebida';

  	let tiempo: number = 0;

  	for(let item of pedido.productos){
		tiempo = tiempo + +item.tiempoPromedioElaboracion;
	}

	for(let i = 0; i < this.listaPedidosOriginal.length; i++){
		if(this.listaPedidosOriginal[i].id == pedido.id){
			this.listaPedidosOriginal[i].estado = "preparando pedido";
			this.listaPedidosOriginal[i].tiempoElaboracion = tiempo;
			
			for(let producto of this.listaPedidosOriginal[i].productos){
				if(producto.tipo == tipoProducto){
					producto.estado = "tomado";
				}
			}

			localStorage.setItem("pedidosTomados", JSON.stringify(pedido.id));

			this.auth.actualizarPedido(this.listaPedidosOriginal[i]);
			this.alert.mostrarMensaje("Pedido Tomado");
			break;
		}
	}

  }

  terminar(pedido){
  	let momentoActual = moment(new Date());
  	let hora = momentoActual.format("HH:mm");
  	console.log("termino pedido!");
	for(let i = 0; i < this.listaPedidosOriginal.length; i++){
		if(this.listaPedidosOriginal[i].id == pedido.id){
			this.listaPedidosOriginal[i].estado = "pedido terminado";
			this.listaPedidosOriginal[i].horaFinalizacion = hora;
			this.auth.actualizarPedido(this.listaPedidosOriginal[i]);
			this.alert.mostrarMensaje("Pedido Terminado");
			this.back();
			break;
		}
	}
  }

  renovarpedidos(){
  	for(let pedido of this.listaPedidosOriginal){
  		pedido.estado = "esperando pedido";
  		for(let item of pedido.productos){
  			item.estado = "pendiente";
  		}
  		this.auth.actualizarPedido(pedido);
  	}
  }

}
