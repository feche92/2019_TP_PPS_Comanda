import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { AuthProvider } from "../../providers/auth/auth";
import { PedirPlatosPage } from '../pedir-platos/pedir-platos';



@IonicPage()
@Component({
  selector: 'page-listado-mesas',
  templateUrl: 'listado-mesas.html',
})
export class ListadoMesasPage {
  mesas;
  pedidos;
  listaPorPedir;
  pedidoCliente;
  hayPedidos;
  mostrarSpiner: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    private modalCtrl: ModalController,) {
      this.listaPorPedir=new Array();
      this.mesas=new Array();
      this.pedidos=new Array();
      this.mostrarSpiner=true;
      this.auth.getMesas().subscribe(lista => {
        this.mesas=lista;
        this.auth.getPedidos().subscribe(lista => {
          this.pedidos=lista;
          for(let i=0;i<this.pedidos.length;i++)
          {
            if(this.pedidos[i].estado == 'por pedir') {
              for(let j=0;j<this.mesas.length;j++)
              {
                if(this.mesas[j].numero == this.pedidos[i].numero) {
                  this.listaPorPedir.push({"numeroMesa":this.mesas[j].numero,"fotoMesa":this.mesas[j].foto,"correoCliente":this.pedidos[i].correo,"idPedido":this.pedidos[i].id});
                } 
              }
              
            }
          }
          console.log(this.listaPorPedir);
          if(this.listaPorPedir.length > 0) {
            this.hayPedidos=true;
            this.mostrarSpiner=false;
          }
          else {
            this.hayPedidos=false;
            this.mostrarSpiner=false;
          }
        });
      });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoMesasPage');
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  elegirMesa(item) {
    console.log(item);
    localStorage.setItem("pedido", JSON.stringify(item));
    this.navCtrl.setRoot(PedirPlatosPage, { pedido : item });
  }

}
