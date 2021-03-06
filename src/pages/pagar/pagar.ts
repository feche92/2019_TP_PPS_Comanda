import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { SpinnerProvider } from "../../providers/spinner/spinner";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PrincipalPage } from '../principal/principal';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';


@IonicPage()
@Component({
  selector: 'page-pagar',
  templateUrl: 'pagar.html',
})
export class PagarPage {
  pedido;
  descuento;
  descuentoJuego;
  propina;
  total;
  usuario;
  monto;
  mostrar;
  mostrarSpiner;
  codigo;
  mesa;
  porcentaje;
  montoEnvio;
  delivery;
  bebidaGratis;
  descuentoBebida;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    private error: AlertProvider,
    private barcodeScanner: BarcodeScanner,
    private spinner: SpinnerProvider) {
      this.mostrarSpiner = true;
      this.total = 0;
      this.montoEnvio = 0;
      this.propina = "sin propina";
      this.descuentoJuego = false;
      this.bebidaGratis= false;
      if(localStorage.getItem("delivery") == 'true') { 
        this.delivery=true;
      }
      else {
        this.delivery=false;
      }
      this.usuario=JSON.parse(localStorage.getItem("usuario"));
      this.auth.getPedidos().subscribe(lista => {
        for(let i=0;i<lista.length;i++)
        {
          if(localStorage.getItem("delivery") == 'true') {
            if(lista[i].correo == this.usuario.correo && lista[i].estado == 'por pagar' && lista[i].delivery) {
              this.pedido = lista[i];
              this.montoEnvio = this.pedido.montoEnvio;
              break;
            }
          }
          else {
            if(lista[i].correo == this.usuario.correo && lista[i].estado == 'por pagar' && !lista[i].delivery) {
              this.pedido = lista[i];
              break;
            }
          }          
        }
        this.monto = this.pedido.montoTotal;
        this.total = this.monto + this.montoEnvio;
        if(localStorage.getItem("juegoDescuento") == 'true') {
          this.descuento = this.monto * 0.1;
          this.descuentoJuego = true;
          this.total -= this.descuento;
        }
        if(localStorage.getItem("descuento-bebida") == 'true') {
          let tieneBebida;
          for(let i=0;i<this.pedido.productos.length;i++)
          {
            if(this.pedido.productos[i].tipo == 'bebida')
            {
              tieneBebida=true;
              break;
            }
          }
          if(tieneBebida) {
            let bebidaMasBarata = 500;
            for(let i=0;i<this.pedido.productos.length;i++)
            {
              if(this.pedido.productos[i].tipo == 'bebida' && parseInt(this.pedido.productos[i].precio) < bebidaMasBarata) {
                bebidaMasBarata = this.pedido.productos[i].precio;
              }
            }
            this.bebidaGratis=true;
            this.descuentoBebida=bebidaMasBarata;
            this.total -= this.descuentoBebida;
          }
        }
        this.mostrarSpiner=false;
        this.mostrar=true;
        console.log(this.pedido);
        if(localStorage.getItem("delivery") == 'false') { 
          this.auth.getMesas().subscribe(lista => {
            for(let i=0;i<lista.length;i++)
            {
              if(lista[i].numero == this.pedido.numero) {
                this.mesa = lista[i];
                break;
              }
            }
          });
        }
        console.log(this.mesa);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagarPage');
    this.mostrar = false;
    this.mostrarSpiner = false;
  }

  qr() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.codigo = barcodeData.text;
      let dato=this.codigo.split(",");
      if(dato[0] == 'propina') {
        switch(dato[1])
        {
          case 'excelente':
            this.propina = this.monto * 0.2;
            this.porcentaje = '20%';
            break;
          case 'Muy bien':
            this.propina = this.monto * 0.15;
            this.porcentaje = '15%';
            break;
          case 'Bien':
            this.propina = this.monto * 0.1;
            this.porcentaje = '10%';
            break;
          case 'Regular':
            this.propina = this.monto * 0.05;
            this.porcentaje = '5%';
            break;
          case 'malo':
            this.propina = 0;
            this.porcentaje = '0%';
            break;
          default:
            this.propina = 0;
            break;
        }
        this.total=this.monto + this.montoEnvio;
        this.total += this.propina;
        if(this.descuentoJuego) {
          this.total -= this.descuento;
        }
        if(this.bebidaGratis) {
          this.total -= this.descuentoBebida;
        }
        this.total = parseFloat(this.total).toFixed(2);
        this.error.mostrarMensaje("Gracias!! Has incluido al pedido "+this.porcentaje+" de propina");
      }
      else {
        this.error.mostrarErrorLiteral('QR incorrecto');
      }
      
    }, (error) => {
      this.error.mostrarErrorLiteral(error);
    });
  }

  pagar() {
    let spiner=this.spinner.getAllPageSpinner();
    spiner.present();
    this.pedido.estado = "pagado";
    this.auth.actualizarPedido(this.pedido).then(res => {
      if(localStorage.getItem("delivery") == 'false') { 
        this.mesa.estado = "libre";
        this.auth.updateMesa(this.mesa).then(res => {
          spiner.dismiss();
          this.error.mostrarMensaje("Pedido pagado. Gracias por comer en nuestro restaurante");
          this.navCtrl.setRoot(PrincipalPage);
        });
      }
      else {
        spiner.dismiss();
        this.error.mostrarMensaje("Pedido pagado. Gracias por comer de nuestro restaurante");
        this.navCtrl.setRoot(PrincipalPage);
      }  
    });
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

}
