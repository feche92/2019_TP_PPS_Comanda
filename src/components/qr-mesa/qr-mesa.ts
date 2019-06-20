import { Component } from '@angular/core';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { HomeClienteComponent } from "../home-cliente/home-cliente";
import { NavController, NavParams } from 'ionic-angular';
import { PedirPlatosPage } from "../../pages/pedir-platos/pedir-platos";

export interface mesa {
  id:string,
  numero:string,
  cantidadComensales:string,
  tipo:string,
  estado:string,
  foto:string,
  codigo: string
}

@Component({
  selector: 'qr-mesa',
  templateUrl: 'qr-mesa.html'
})
export class QrMesaComponent {

  texto: string;
  codigo: string[] = ['mesa', '1', 'normal']; //codigo qr de mesa
  title: string = "";
  mesas: mesa[] = [];
  estado: number = 0; 
  ocupada: boolean = false;
  id_usuario: string;
  pedidoActual;
  usuario;
  
  /*estado pedido:
     por pedir, esperando pedido, preparando pedido, pedido terminado, comiendo, por pagar
    
    estado mesa:
    libre, ocupada
   */

  constructor(private auth: AuthProvider, public alert: AlertProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.verificarCodigo();
    this.codigo = navParams.get("codigo");
  }

  //verifico si existe el codigo
  verificarCodigo(){
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    this.title = "Mesa Actual";
    this.auth.getMesas().subscribe(lista =>{
      let flag = false;
      for(let item of lista){
        if(item.numero == this.codigo[1]){
          if(item.estado == 'libre'){
            /*
            * mostrar ventana de mesa libre y boton tomar mesa
            */
            this.mesas.push(item);
            this.estado = 1;
            this.ocupada = false;
            flag = true;
            break;
          }
          else{
            /*
            * si es el usuario que tomo la mesa, muestro su estado, monto total si ya hizo el
            * pedido, y los respectivos botones
            * si no es el usuario que tomo la mesa muestro muestro "mesa ocupada" -> flag = false
            */ 
            this.auth.getPedidos().subscribe(l =>{
              for(let i of l){
                if(i.correo == this.usuario.correo && i.numero == item.numero){
                    //console.log(i);
                    this.pedidoActual = i;
                    this.ocupada = false;

                    switch(i.estado){
                      case 'por pedir':
                        //mostrar boton hacer pedido
                        this.estado = 2;
                      break;
                      case 'esperando pedido':
                      case 'preparando pedido':
                        /*mostrar estado del pedido y monto total, ademas de boton
                        * encuesta, juegos
                        */
                        this.estado = 3;
                      break;
                      case 'pedido terminado':
                        //mostrar boton de pedido recibido
                        this.estado = 4;
                      break;
                      case 'comiendo':
                        //mostrar monto total, encuesta, juegos, boton pagar
                        this.estado = 5;
                      break;
                      case 'por pagar':
                      //liberar mesa
                      break;
                    }
                    break;
                }
              }
            });
            break;
          }
        }
      }
      //console.log(this.mesas);
      if(!flag){
        this.texto = "La mesa esta ocupada";
        this.ocupada = true;
      }
       

    });
  }


  tomarMesa(e){
    //console.log(e);
    this.estado = 0;
    let data = {
      cantidadComensales: e.cantidadComensales,
      estado: 'ocupada',
      foto: e.foto,
      numero: e.numero,
      tipo: e.tipo,
      codigo: e.codigo,
      id: e.id
    };
    this.auth.updateMesa(data);
    
    let date = new Date();
    let fecha = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    let dataPedido = {
      estado: 'por pedir',
      numero: e.numero,
      tipo: e.tipo,
      'nombreCliente': this.usuario.nombre,
      'apellidoCliente': this.usuario.apellido,
      'correo': this.usuario.correo,
      'fecha': fecha
    };
    this.auth.guardarPedido(dataPedido);
    this.alert.mostrarMensaje("Mesa asignada");
    this.navCtrl.setRoot(HomeClienteComponent);
  }

  verEstadoPedido(){
    this.title = "Estado Actual del Pedido";
    this.auth.getPedidos().subscribe(lista => {
      
      for(let item of lista){
        if(this.pedidoActual.id == item.id) {
          this.pedidoActual = item;
          break;
        }
      }
      });
  }

  mostrarEncuestaDeSatisfaccion(){
    console.log("mostrar encuesta");
    /*
    * link a encuesta de satisfaccion de cliente
    */
  }

  hacerPedido(){
    //lamar componente de hacer pedido de productos
    console.log("En Hacer Pedido");
    this.navCtrl.setRoot(PedirPlatosPage);
  }

  mostrarJuegos(){
    console.log("mostrar juegos");
  }

  pedidoRecibido(){
    console.log("pedido recibido");
  }

  pagar(){
    console.log("pagando");
  }

}
