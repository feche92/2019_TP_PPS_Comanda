import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { SpinnerProvider } from "../../providers/spinner/spinner";
import { PrincipalPage } from '../principal/principal';



@IonicPage()
@Component({
  selector: 'page-confirmar-pedido',
  templateUrl: 'confirmar-pedido.html',
})
export class ConfirmarPedidoPage {
  pedidos;
  pedidosPorConfirmar;
  pedidosParaEntregar;
  mostrarSpiner;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    private error: AlertProvider,
    private spinner: SpinnerProvider) {
      this.pedidos=new Array();
      this.pedidosParaEntregar=new Array();
      this.pedidosPorConfirmar=new Array();
      this.mostrarSpiner = true;
      this.auth.getPedidos().subscribe(lista => {
        this.pedidos=lista;
        this.pedidosParaEntregar=[];
        this.pedidosPorConfirmar=[];
        for(let i=0;i<this.pedidos.length;i++)
        {
          if(this.pedidos[i].estado == 'pedido por confirmar') {
            this.pedidosPorConfirmar.push(this.pedidos[i]);
          }
          if(this.pedidos[i].estado == 'pedido terminado') {
            this.pedidosParaEntregar.push(this.pedidos[i]);
          }
        }
        this.mostrarSpiner = false;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmarPedidoPage');
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  aceptarPedido(pedido) {
    console.log(pedido);
    let spiner=this.spinner.getAllPageSpinner();
    spiner.present();
    pedido.estado = "esperando pedido";
    this.auth.actualizarPedido(pedido).then(res => {
      spiner.dismiss();
      this.error.mostrarMensaje("Pedido confirmado");
    });
  }

  cancelarPedido(pedido) {
    console.log(pedido);
    let spiner=this.spinner.getAllPageSpinner();
    spiner.present();
    pedido.estado = "cancelado";
    this.auth.actualizarPedido(pedido).then(res => {
      spiner.dismiss();
      this.error.mostrarMensaje("Pedido cancelado");
    });
  }

  entregarPedido(pedido) {
    let spiner=this.spinner.getAllPageSpinner();
    spiner.present();
    pedido.estado = "camino a entrega";
    this.auth.actualizarPedido(pedido).then(res => {
      spiner.dismiss();
      this.error.mostrarMensaje("Entregando pedido..Esperando confirmacion del cliente");
    });
    /*let pdidos=new Array();
    this.auth.getPedidos().subscribe(lista => {
      pdidos=lista;
      for(let i=0;i<pdidos.length;i++)
      {
        if(pdidos[i].id == pedido.id && pdidos[i].estado == 'comiendo') {
          this.error.mostrarMensaje("Pedido entregado");
          break;
        }
      }
    });*/
  }

}
