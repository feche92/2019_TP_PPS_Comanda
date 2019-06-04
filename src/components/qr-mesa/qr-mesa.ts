import { Component } from '@angular/core';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
/**
 * Generated class for the QrMesaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

export interface mesa {
  id:string,
  numero:string,
  cantidadComensales:string,
  tipo:string,
  estado:string,
  foto:string,
  cliente: string
}

@Component({
  selector: 'qr-mesa',
  templateUrl: 'qr-mesa.html'
})
export class QrMesaComponent {

  title: string = "";
  id_usuario: string;
  mesas: mesa[] = [];
  estado: number = 0;
  pedidoActual;

  constructor(private auth: AuthProvider, public alert: AlertProvider) {
  	//this.traerMesas();
  }

  //inicia por aca
  verificarEstadoMesa(){
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    this.id_usuario = usuario.id;
    //this.mesas = [];
    let mesasOcupadas: mesa[] = [];
    let libre = true;
    this.auth.getMesas().subscribe(lista => {
      for(let item of lista){
        if(item.estado == "ocupada"){
          mesasOcupadas.push(item);
          libre = false;
        }
      }

      if(libre){
        //todas las mesas estan libres -> muestro mesas
        this.traerMesas();
      }
      else{
        //mesas ocupadas
        let conCliente = false; //con cliente actual o no
        let mesaDeCliente;
        for(let item of mesasOcupadas){
          if(item.cliente == this.id_usuario){
            mesaDeCliente = item;
            conCliente = true;
            break;
          }
        }

        if(!conCliente){
          //hay mesas ocupadas pero no con el cliente actual
          this.traerMesas();
        }
        else{
          //verifico si el pedido esta finalizado o no
          //traigo pedidos
          this.auth.getPedidos().subscribe(data => {
            let final = false;
            for(let item of data){
              if(mesaDeCliente.id_pedido == item.id && item.estado == "finalizado"){
                this.mostrarEncuestaDeSatisfaccion();
                final = true;
                break;
              }
            }
            if(!final){
              //si el pedido no esta finalizado
              this.verEstadoPedido();
            }
          });
        }

      }
    });
  }


  traerMesas(){
    this.title = "Mesas Disponibles";
    this.mesas = [];
  	let flag = false;
  	this.auth.getMesas().subscribe(lista => {
	  	for(let item of lista){
	  		if(item.estado == "libre"){
	  			this.mesas.push(item);
	  			flag = true;
	  		}
	  	}
	  	//ordeno por numero de mesa
	  	this.mesas.sort((mesa, otraMesa) => mesa.numero - otraMesa.numero);
	    if(!flag){
	      this.alert.mostrarMensaje("No hay mesas disponibles");
	    }
  	});
  }

  tomarMesa(e){

    this.estado = 1;
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    let data = {
      cantidadComensales: e.cantidadComensales,
      estado: 'ocupada',
      foto: e.foto,
      id: e.id,
      numero: e.numero,
      tipo: e.tipo,
      'cliente': usuario.id
    };
    this.auth.updateMesa(data);
    this.alert.mostrarMensaje("Mesa asignada");
    console.log(this.mesas);

    /**************************************/
    /*VOLVER A PAGINA PRINCIPAL DE USUARIO*/
    /**************************************/
  }

  verEstadoPedido(){
    this.title = "Estado Actual del Pedido";
    this.estado = 2;
    this.auth.getMesas().subscribe(lista => {
      let id_pedido;
      for(let item of lista){
        if(item.cliente == this.id_usuario){
          //id_pedido = item.id_pedido;
          break;
        }
      }

      this.auth.getPedidos().subscribe(data => {
        for(let item of data){
          if(item.id == id_pedido){
            this.pedidoActual = item;
            break;
          }
        }
      });


    });
  }

  mostrarEncuestaDeSatisfaccion(){
    this.title = "Encuesta de Satisfacción";
    this.estado = 3;
    

    

  }

}
