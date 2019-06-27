import { Component } from '@angular/core';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { HomeClienteComponent } from "../home-cliente/home-cliente";
import { NavController, NavParams } from 'ionic-angular';
import { PedirPlatosPage } from "../../pages/pedir-platos/pedir-platos";
import { PrincipalPage } from "../../pages/principal/principal";
import { EncuestaClientePage } from "../../pages/encuesta-cliente/encuesta-cliente";
import { JuegosPage } from '../../pages/juegos/juegos';
import { PagarPage } from '../../pages/pagar/pagar';
import * as moment from 'moment';

export interface mesa {
  id:string,
  numero:string,
  cantidadComensales:string,
  tipo:string,
  estado:string,
  foto:string,
  codigo: string,
}

@Component({
  selector: 'qr-mesa',
  templateUrl: 'qr-mesa.html'
})
export class QrMesaComponent {

  texto: string;
  codigo; //= ['mesa', '3', 'normal']; //codigo qr de mesa
  title: string = "";
  mesas: mesa[] = [];
  estado: number = 0; 
  ocupada: boolean = false;
  id_usuario: string;
  pedidoActual;
  usuario;
  mostrarSpiner:boolean = false;
  myColor;
  pedidos;
  puedeSentar;
  cliente;
  otroColor
  /*estado pedido:
     por pedir, esperando pedido, preparando pedido, pedido terminado, comiendo, por pagar
    
    estado mesa:
    libre, ocupada
   */

  constructor(private auth: AuthProvider, public alert: AlertProvider,
    public navCtrl: NavController, public navParams: NavParams) {
      this.myColor = 'primary';
      this.otroColor = 'red';
      this.usuario = JSON.parse(localStorage.getItem("usuario"));
      //this.codigo = navParams.get("codigo");
      this.codigo = localStorage.getItem("codigo");
      this.codigo = this.codigo.split(',');
      this.puedeSentar=false;
      if(this.usuario.tipo == 'cliente' || this.usuario.tipo == 'cliente anonimo') {
        this.puedeSentarse();
        
      }
  }

  puedeSentarse() {
    this.auth.getListaEspera().subscribe(lista => {
      for(let i=0;i<lista.length;i++)
      {
        if(this.usuario.tipo == 'cliente') {
          if(lista[i].correo == this.usuario.correo && lista[i].estado == 'aceptado') {
            this.cliente=lista[i];
            this.puedeSentar=true;
            break;
          }
        }
        else if(this.usuario.tipo == 'cliente anonimo') {
          if(lista[i].nombre == this.usuario.nombre && lista[i].estado == 'aceptado') {
            this.cliente=lista[i];
            this.puedeSentar=true;
            break;
          }
        }
      }
      this.verificarCodigo();
    });
  }

  escanear() {
    this.navCtrl.setRoot(HomeClienteComponent);
  }

  //verifico si existe el codigo
  /*
  *   VERIFICO EXISTENCIA DE RESERVA 
  *   VERIFICO QUE EL CLIENTE ESTE EN LA LISTA DE ESPERA Y ESTE ACEPTADO
  */
  verificarCodigo(){
    this.mostrarSpiner=true;
    this.title = "Mesa Actual";
    if(!this.puedeSentar) {
      this.alert.mostrarErrorLiteral("No ha sido confirmado por el mozo para ocupar una mesa. Lea el QR de entrada y espera la confirmacion del mozo");
      this.navCtrl.setRoot(PrincipalPage);
      return;
    }
    if(this.cliente.mesa != this.codigo[1]) {
      this.alert.mostrarErrorLiteral("No fue asignado a esta mesa..por favor, escanee la mesa la cual fue asignado/a");
      this.navCtrl.setRoot(PrincipalPage);
      return;
    }
    this.auth.getMesas().subscribe(lista =>{
      console.log(this.codigo);
      console.table(lista);
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
            this.mostrarSpiner=false;
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
                if(this.usuario.tipo == "cliente"){
                  if(i.correo == this.usuario.correo && i.numero == item.numero && i.estado != 'pagado'){

                    //console.log(i);
                    this.pedidoActual = i;
                    this.ocupada = false;
                    this.estadoPedido();
                    break;
                  }
                }
                else {
                  if(i.nombreCliente == this.usuario.nombre && i.numero == item.numero && i.estado != 'pagado'){
                    this.pedidoActual = i;
                    this.ocupada = false;
                    this.estadoPedido();
                    break;
                  }
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
        this.mostrarSpiner = false;
      }
       

    });
  }

  estadoPedido() {
    switch(this.pedidoActual.estado){
      case 'por pedir':
        //mostrar boton hacer pedido
        this.estado = 2;
      break;
      case 'pedido por confirmar':
        //Mostrar algun mensaje que el pedido todavia no se ha confirmado
        this.estado = 3;
      break;
      case 'esperando pedido':
      case 'preparando pedido':
      case 'parcialmente terminado':
      case 'pedido terminado':
        /*mostrar estado del pedido y monto total, ademas de boton
        * encuesta, juegos
        */
        this.estado = 4;
      break;
      case 'camino a entrega':
        this.estado = 6;
        break;
      case 'comiendo':
        //mostrar monto total, encuesta, juegos, boton pagar
        this.estado = 5;
      break;
      case 'por pagar':
        this.navCtrl.setRoot(PagarPage);
      //liberar mesa
        //item.estado = "libre";
        //this.auth.updateMesa(item);
      break;
    }
    this.mostrarSpiner = false;
  }

  verificarReserva(){
    this.auth.getReservas().subscribe(lista =>{
      let momentoActual = moment(new Date());
      for(let reserva of lista){
        if(reserva.estado == "confirmada" && reserva.correo == this.usuario.correo){
          let momentoReservaMesa = moment(reserva.horario, "DD/MM/YYYY HH:mm");
          if (Math.abs(momentoActual.diff(momentoReservaMesa, "m")) < 40) {
            //guardar mesa y asignarla
          }
        }
      }
    });
  }


  tomarMesa(e){
    //console.log(e);
    this.mostrarSpiner = true;
    this.estado = 0;
    e.estado = 'ocupada';
    this.auth.updateMesa(e).then(res => {
      let date = new Date();
      let fecha = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
      console.log(this.usuario);
      let dataPedido;
      if(this.usuario.tipo == "cliente anonimo"){
        dataPedido = {
          'estado': 'por pedir',
          'numero': e.numero,
          'tipo': e.tipo,
          'nombreCliente': this.usuario.nombre,
          'fecha': fecha
        };
      }
      else{
        dataPedido = {
          'estado': 'por pedir',
          'numero': e.numero,
          'tipo': e.tipo,
          'nombreCliente': this.usuario.nombre,
          'apellidoCliente': this.usuario.apellido,
          'correo': this.usuario.correo,
          'fecha': fecha
        };
      }
      this.auth.guardarPedido(dataPedido).then(res => {
        this.alert.mostrarMensaje("Mesa asignada");
        this.mostrarSpiner=false;
        this.navCtrl.setRoot(PrincipalPage);
      }).catch(error => {
        this.alert.mostrarError(error,"Lo siento, hubo un error al asignar la mesa");
        this.mostrarSpiner=false;
        this.navCtrl.setRoot(PrincipalPage);
      })
    }).catch(error => {
      this.alert.mostrarError(error,"Lo siento, hubo un error al asignar la mesa");
      this.mostrarSpiner=false;
      this.navCtrl.setRoot(PrincipalPage);
    });
    
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

  aceptarPedido() {
    this.pedidoActual.estado = 'comiendo';
    this.auth.actualizarPedido(this.pedidoActual).then(res => {
      this.alert.mostrarMensaje("pedido entregado. Disfrutelo");
    });
  }

  cancelarPedido() {
    this.pedidoActual.estado = 'pedido terminado';
    this.auth.actualizarPedido(this.pedidoActual).then(res => {
      this.alert.mostrarMensaje("Perdon, se le volverà a entregar el pedido si todavia no esta listo");
    });
  }

  mostrarEncuesta(){
    console.log("mostrar encuesta");
    this.navCtrl.setRoot(EncuestaClientePage);
  }

  hacerPedido(){
    console.log("En Hacer Pedido");
    this.navCtrl.setRoot(PedirPlatosPage);
  }

  mostrarJuegos(){
    console.log("mostrar juegos");
    this.navCtrl.setRoot(JuegosPage);
  }

  pedidoRecibido(){
    console.log("pedido recibido");
    console.log(this.pedidoActual);
    this.pedidoActual.estado = "comiendo";
    this.auth.actualizarPedido(this.pedidoActual);
    this.navCtrl.setRoot(HomeClienteComponent);
  }

  pagar(){
    this.pedidoActual.estado = 'por pagar';
    this.auth.actualizarPedido(this.pedidoActual).then(res => {
      this.cliente.estado = 'terminado';
      this.auth.updateListaEspera(this.cliente).then(res => {
        this.navCtrl.setRoot(PagarPage);
      });  
    })
    console.log("pagando");
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

}
