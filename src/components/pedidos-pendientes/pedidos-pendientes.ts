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
				for(let item of lista){
					let i = 0;
					let flag = false;
					while(!flag){
						if(item.productos[i].estado == 'pendiente' && item.productos[i].tipo == 'plato'){
							this.pedidos.push(item);
							this.hayProducto = true;
							flag = true;
						}
						if(item.productos.lenght == i++)	
							flag = true;
					}
				}
			break;
			case 'bartender':
				for(let item of lista){
					let i = 0;
					let flag = false;
					while(!flag){
						if(item.productos[i].estado == 'pendiente' && item.productos[i].tipo == 'bebida'){
							this.pedidos.push(item);
							this.hayProducto = true;
							flag = true;
						}
						if(item.productos.lenght == i++)	
							flag = true;
					}
				}
			break;
		}
		console.log(this.pedidos);
  	});
  }


  prepararPlato(producto){
  	console.log(producto);

  }

}
