import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { MapaRutaPage } from '../mapa-ruta/mapa-ruta';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import * as moment from 'moment';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  usuario;
  mensajes;
  mensaje;
  mostrarSpiner;
  pedido;
  cliente;
  repartidor;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    private error: AlertProvider) {
      this.usuario=JSON.parse(localStorage.getItem("usuario"));
      this.mostrarSpiner=true;
      this.mensajes=new Array();
      if(this.usuario.tipo == 'cliente') {
        this.cliente=true;
        this.repartidor=false;
        this.auth.getChat().subscribe(lista => {
          this.mensajes=[];
          for(let i=0;i<lista.length;i++)
          {
            if(lista[i].correo==this.usuario.correo || (lista[i].tipo == 'repartidor' && lista[i].para == this.usuario.correo)) {
              this.mensajes.push(lista[i]);
            }
          }
          this.mensajes.sort(function (a,b) {
            if (a.fecha > b.fecha) {
              return 1;
            }
            if (a.fecha < b.fecha) {
              return -1;
            }
            
            return 0;
          })
          this.mostrarSpiner=false;
        })
      }
      else {
        this.cliente=false;
        this.repartidor=true;
        this.pedido = navParams.get("pedido");
        this.auth.getChat().subscribe(lista => {
          this.mensajes=[];
          for(let i=0;i<lista.length;i++)
          {
            if(lista[i].correo==this.pedido.correo || (lista[i].tipo == 'repartidor' && lista[i].para == this.pedido.correo)) {
              this.mensajes.push(lista[i]);
            }
          }
          this.mensajes.sort(function (a,b) {
            if (a.fecha > b.fecha) {
              return 1;
            }
            if (a.fecha < b.fecha) {
              return -1;
            }
            
            return 0;
          })
          this.mostrarSpiner=false;
        });
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  back() {
    this.navCtrl.setRoot(MapaRutaPage);
  }

  onChange(event){    
    /*if(this.mensaje.length > 21){
        var text = this.mensaje.slice(0, 21);
        this.mensaje = text;
    }*/
  }

  enviarMensaje() {
    this.mostrarSpiner=true;
    let momentoActual = moment(new Date());
    let data;
    if(this.usuario.tipo == 'cliente') {
      data = {
        "nombre":this.usuario.nombre,
        'correo':this.usuario.correo,
        "fecha":momentoActual.format("DD/MM/YYYY HH:mm:ss"),
        "mensaje":this.mensaje,
        "tipo":this.usuario.tipo,
        "para":'repartidor',
      };
    }else {
      data = {
        "nombre":this.usuario.nombre,
        'correo':this.usuario.correo,
        "fecha":momentoActual.format("DD/MM/YYYY HH:mm:ss"),
        "mensaje":this.mensaje,
        "tipo":this.usuario.tipo,
        "para":this.pedido.correo,
      };
    }
    this.auth.nuevoChat(data).then(res => {
      this.mostrarSpiner=false;
    }).catch(error => {
      this.mostrarSpiner=false;
      this.error.mostrarErrorLiteral("Hubo un error al enviar el mensaje");
    });
    
  }

}
