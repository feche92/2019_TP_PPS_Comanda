import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Modal } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { JuegosPage } from '../juegos/juegos';
import { PagarPage } from '../pagar/pagar';
import { ChatPage } from '../chat/chat';

@IonicPage()
@Component({
  selector: 'page-mapa-ruta',
  templateUrl: 'mapa-ruta.html',
})
export class MapaRutaPage {
  cliente;
  usuario;
  repartidor;
  mostrarSpiner;
  pedidosDelivery;
  chats;
  estadosCliente;
  pedidoActual;
  myColor;
  otroColor;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    private error: AlertProvider,
    private modalCtrl: ModalController) {
      this.mostrarSpiner=true;
      this.usuario=JSON.parse(localStorage.getItem("usuario"));
      if(this.usuario.tipo == 'cliente') {
        this.cliente = true;
        this.repartidor = false;
        this.auth.getPedidos().subscribe(lista => {
          let tienePedido=false;
          for(let i=0;i<lista.length;i++)
          {
            if(lista[i].correo == this.usuario.correo && lista[i].estado != 'pagado' && lista[i].estado != 'cancelado' && lista[i].delivery) {
              tienePedido=true;
              this.pedidoActual=lista[i];
              console.log(this.pedidoActual);
              switch(this.pedidoActual.estado)
              {
                case 'esperando pedido':
                case 'preparando pedido':
                case 'parcialmente terminado':
                case 'pedido terminado':
                  this.estadosCliente = 2;
                  break;
                case 'en camino':
                  this.estadosCliente = 3;
                  break;
                case 'por entregar':
                  this.estadosCliente = 4;
                  break;
                case 'por pagar':
                  this.estadosCliente = 5;
                  break;
              }
            }
          }
          if(!tienePedido) {
            this.error.mostrarErrorLiteral('No tiene ningun pedido hecho por delivery');
          }
        })
      }
      else {
        this.cliente=false;
        this.repartidor=true;
        this.pedidosDelivery=new Array();
        this.auth.getPedidos().subscribe(lista => {
          this.pedidosDelivery=[];
          for(let i=0;i<lista.length;i++)
          {
            if((lista[i].estado == 'pedido terminado' || lista[i].estado == 'en camino') && lista[i].delivery) {
              this.pedidosDelivery.push(lista[i]);
            }
          }
        })
      }
      this.mostrarSpiner=false;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapaRutaPage');
    this.myColor='primary';
    this.otroColor='red';
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  mostrarJuegos() {
    this.navCtrl.setRoot(JuegosPage);
  }

  hablar() {
    this.navCtrl.setRoot(ChatPage);
  }

  aceptarPedido() {
    this.pedidoActual.estado = 'por pagar';
    this.auth.actualizarPedido(this.pedidoActual).then(res => {
      this.error.mostrarMensaje('pedido aceptado');
    });
  }

  cancelarPedido() {
    this.pedidoActual.estado = 'en camino';
    this.auth.actualizarPedido(this.pedidoActual).then(res => {
      this.error.mostrarMensaje('Lo siento..Se le volverá a entregar cuando llegue el repartidor');
    });
  }

  pagar() {
    localStorage.setItem('delivery','true');
    this.navCtrl.setRoot(PagarPage);
  }

  entregar(pedido) {
    if(pedido.estado == 'pedido terminado') {
      let yaEncamino=false;
      for(let i=0;i<this.pedidosDelivery.length;i++)
      {
        if(this.pedidosDelivery[i].estado == 'en camino') {
          yaEncamino=true;
          break;
        }
      }
      if(yaEncamino) {
        this.error.mostrarErrorLiteral('Ya estas entregando un pedido. Hasta que no lo entregues no podes aceptar otro');
        return;
      }
      pedido.estado = 'en camino';
      this.auth.actualizarPedido(pedido).then(res => {
        this.error.mostrarMensaje('Entregando pedido...');
      });
    }
    else {
      pedido.estado = 'por entregar';
      this.auth.actualizarPedido(pedido).then(res => {
        this.error.mostrarMensaje('por entregar...');
      });
    }
  }

  hablarCliente(pedido) {
    this.modalCtrl.create(ChatPage, { pedido: pedido }).present();
  }

}
