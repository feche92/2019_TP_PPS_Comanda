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
  codigo: string[] = ['mesa', '2', 'normal']; //codigo qr de mesa
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
  
  /*estado pedido:
     por pedir, esperando pedido, preparando pedido, pedido terminado, comiendo, por pagar
    
    estado mesa:
    libre, ocupada
   */

  constructor(private auth: AuthProvider, public alert: AlertProvider,
    public navCtrl: NavController, public navParams: NavParams) {
      this.myColor = 'primary';
      //this.codigo = navParams.get("codigo");
      this.verificarCodigo();
    
  }

  escanear() {
    this.navCtrl.setRoot(HomeClienteComponent);
  }

  //verifico si existe el codigo
  verificarCodigo(){
    this.mostrarSpiner=true;
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    this.title = "Mesa Actual";
    
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
                if(i.correo == this.usuario.correo || (i.nombreCliente == this.usuario.nombre && this.usuario.tipo == "cliente anonimo")){
                  if(i.numero == item.numero && i.estado != 'pagado' && i.estado != 'cancelado'){

                    //console.log(i);
                    this.pedidoActual = i;
                    this.ocupada = false;

                    switch(i.estado){
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
                      case 'comiendo':
                        //mostrar monto total, encuesta, juegos, boton pagar
                        this.estado = 5;
                      break;
                      case 'por pagar':
                        this.navCtrl.setRoot(PagarPage);
                      //liberar mesa
                        item.estado = "libre";
                        this.auth.updateMesa(item);
                      break;
                    }
                    this.mostrarSpiner = false;
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
      this.navCtrl.setRoot(PagarPage);
    })
    console.log("pagando");
    this.pedidoActual.estado = "por pagar";
    //enviar notificacion al mozo
    this.auth.actualizarPedido(this.pedidoActual);
    this.navCtrl.setRoot(HomeClienteComponent);
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

}
