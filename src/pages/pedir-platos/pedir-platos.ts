import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { AlertProvider } from "../../providers/alert/alert";
import { AuthProvider } from "../../providers/auth/auth";
import { SpinnerProvider } from "../../providers/spinner/spinner";
import * as moment from 'moment';


@IonicPage()
@Component({
  selector: 'page-pedir-platos',
  templateUrl: 'pedir-platos.html',
})
export class PedirPlatosPage {
  productos;
  bebidas;
  platos;
  ocultarPLatos:boolean;
  ocultarBebidas:boolean;
  titulo;
  pedidoActual;
  monto:boolean;
  montoActual;
  usuario;
  pedidos;
  puedePedir:Boolean;
  pedidoPendiente;
  mensajePedido="";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    private error: AlertProvider,
    private spinner: SpinnerProvider) {
      this.montoActual=0;
      this.puedePedir=true;
      this.monto=false;
      this.ocultarBebidas=false;
      this.ocultarPLatos=false;
      this.usuario=JSON.parse(localStorage.getItem("usuario"));
      this.productos=new Array();
      this.platos=new Array();
      this.bebidas=new Array();
      this.pedidoActual=new Array();
      let spiner=this.spinner.getAllPageSpinner();
      spiner.present();
      this.auth.getProductos().subscribe(lista => {
        this.productos=lista;
        for(let i=0;i<this.productos.length;i++)
        {
          if(this.productos[i].tipo == 'bebida') {
            this.bebidas.push({"nombre":this.productos[i].nombre,"descripcion":this.productos[i].descripcion,"foto":this.productos[i].foto,"cantidad":0,"tipo":"bebida","tiempoPromedioElaboracion":this.productos[i].tiempoPromedioElaboracion,"estado":"pendiente","precio":this.productos[i].precio});
          }
          else {
            this.platos.push({"nombre":this.productos[i].nombre,"descripcion":this.productos[i].descripcion,"foto":this.productos[i].foto,"cantidad":0,"tipo":"plato","tiempoPromedioElaboracion":this.productos[i].tiempoPromedioElaboracion,"estado":"pendiente","precio":this.productos[i].precio});
          }
        }
        spiner.dismiss();
        console.log(this.bebidas);
        console.log(this.platos);
        this.puedeHacerPedido();
      });
  }

  ionViewDidLoad() {
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  puedeHacerPedido() {
    this.auth.getPedidos().subscribe(lista => {
      this.pedidos=lista;
      let estaCorreo=false;
      for(let i=0;i<this.pedidos.length;i++)
      {
        if(this.pedidos[i].correo == this.usuario.correo /* YY pedidos.estado != ultimo estado del pedido que es por pagar creo  */) {
          estaCorreo=true;
          //this.pedidoPendiente=this.pedidos[i];
          //this.puedePedir=true;
          break;
        }
      }
      if(estaCorreo) {
        this.mensajePedido="Ya hizo un pedido.No puede pedir otro";
        for(let i=0;i<this.pedidos.length;i++)
        {
          if(this.pedidos[i].estado == 'por pedir' && this.pedidos[i].correo == this.usuario.correo) {
            this.pedidoPendiente=this.pedidos[i];
            this.puedePedir=true;
            break;
          }
        }
      }
      else {
        this.mensajePedido="No puede hacer un pedido sin antes estar en una mesa";
      }
      console.log(this.pedidos);
      console.log(this.pedidoPendiente);
    })
  }

  Platos() {
    this.ocultarPLatos=true;
    this.titulo="Nuestros platos";
  }

  Bebidas() {
    this.ocultarBebidas=true;
    this.titulo="Nuestras bebidas";
  }

  AumentarCantidad(item) {
    if(item.cantidad < 20) {
      item.cantidad++;
    }
    console.log(item);
  }

  DisminuirCantidad(item) {
    if(item.cantidad > 0) {
      item.cantidad--;
    }
    console.log(item);
  }

  AceptarPedido(texto) {
    if(texto == 'plato') {
      for(let i=0;i<this.platos.length;i++)
      {
        let pidioPlato=true;
        for(let j=0;j<this.pedidoActual.length;j++)
        {
          if(this.platos[i].nombre == this.pedidoActual[j].nombre) {
            this.pedidoActual[j]=this.platos[i];
            pidioPlato=false;
            break;
          }
        }
        if(this.platos[i].cantidad > 0 && pidioPlato) {
          this.pedidoActual.push(this.platos[i]);
        }
      }

    }
    else {
      for(let i=0;i<this.bebidas.length;i++)
      {
        let pidio=true;
        for(let j=0;j<this.pedidoActual.length;j++)
        {
          if(this.bebidas[i].nombre == this.pedidoActual[j].nombre) {
            this.pedidoActual[j]=this.bebidas[i];
            pidio=false;
            break;
          }
        }
        if(this.bebidas[i].cantidad > 0 && pidio) {
          this.pedidoActual.push(this.bebidas[i]);
        }
      }
    }
    console.log(this.pedidoActual);
    this.ocultarBebidas=false;
    this.ocultarPLatos=false;
    this.limpiarPedido();
  }

  calcularMonto() {
    let tieneProductos=false;
    for(let i=0;i<this.pedidoActual.length;i++)
    {
      if(this.pedidoActual[i].cantidad > 0) {
        tieneProductos=true;
        break;
      }
    }
    if(tieneProductos) {
      this.montoActual= 0;
      for(let i=0;i<this.pedidoActual.length;i++)
      {
        if(this.pedidoActual[i].cantidad > 0) {
          this.montoActual += this.pedidoActual[i].precio * this.pedidoActual[i].cantidad;
        }
      }
      this.monto=true;
      console.log(this.montoActual);
    }
  }

  limpiarPedido() {
    for(let i=0;i<this.pedidoActual.length;i++)
     {
       if(this.pedidoActual[i].cantidad == 0) {
         this.pedidoActual.splice(i,1);
         this.limpiarPedido();
       }
     }
     console.log(this.pedidoActual);
     this.calcularMonto();
  }

  CancelarPedido() {
    this.ocultarBebidas=false;
    this.ocultarPLatos=false;
  }

  PedirFinal() {
    if(this.pedidoActual.length > 0) {
      let spiner=this.spinner.getAllPageSpinner();
    spiner.present();
    let momentoActual = moment(new Date());
    let data= {
      "correo":this.usuario.correo,
      "nombreCliente":this.usuario.nombre,
      "apellidoCliente":this.usuario.apellido,
      "estado":"esperando pedido",
      "productos":this.pedidoActual,
      "numero":this.pedidoPendiente.numero,
      "fecha":momentoActual.format("DD/MM/YYYY HH:mm"),
      "montoTotal":this.montoActual,
      "tipo":this.pedidoPendiente.tipo,
      "id":this.pedidoPendiente.id,
      "tiempoElaboracion": ""
    }
    this.auth.actualizarPedido(data).then(res => {
      spiner.dismiss();
      this.error.mostrarMensaje("Su pedido ha sido enviado en breve se lo llevaremos...");
      setTimeout(() => {
        this.navCtrl.setRoot(PrincipalPage);
      },500);
    }).catch(error => {
      this.error.mostrarErrorLiteral(error,"Hubo un error al enviar su pedido.");
      spiner.dismiss();
    });
    }
    else {
      this.error.mostrarErrorLiteral("Elija algun producto antes de aceptar un pedido");
    }

  }

}
