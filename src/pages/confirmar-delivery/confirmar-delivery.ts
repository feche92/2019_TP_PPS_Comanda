import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { PrincipalPage } from '../principal/principal';

@IonicPage()
@Component({
  selector: 'page-confirmar-delivery',
  templateUrl: 'confirmar-delivery.html',
})
export class ConfirmarDeliveryPage {
  pedidosDelivery;
  mostrarSpiner;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    private error: AlertProvider) {
      this.pedidosDelivery=new Array();
      this.mostrarSpiner=true;
      this.auth.getPedidos().subscribe(lista => {
        this.pedidosDelivery=[];
        for(let i=0;i<lista.length;i++)
        {
          if(lista[i].estado == 'pedido por confirmar' && lista[i].delivery) {
            this.pedidosDelivery.push(lista[i]);
          }
        }
        this.mostrarSpiner=false;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmarDeliveryPage');
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  aceptarPedido(pedido) {
    this.mostrarSpiner=true;
    pedido.estado = "esperando pedido";
    this.auth.actualizarPedido(pedido).then(res => {
      this.mostrarSpiner=false;
      this.error.mostrarMensaje("Pedido confirmado");
    });
  }

  cancelarPedido(pedido) {
    let alertConfirm = this.error.mostrarMensajeConfimación("¿Seguro que quiere cancelar este pedido?", "Cancelar pedido");
    alertConfirm.present();
    alertConfirm.onDidDismiss((confirm) => {
      if (confirm) {
        console.log(pedido);
        this.mostrarSpiner=true;
        pedido.estado = "cancelado";
        this.auth.actualizarPedido(pedido).then(res => {
          this.mostrarSpiner=false;
          this.error.mostrarMensaje("Pedido cancelado");
        });
      }
    });
  }

}
