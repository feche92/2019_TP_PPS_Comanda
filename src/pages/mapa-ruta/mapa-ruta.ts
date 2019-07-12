import { Component,  ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { Geolocation } from '@ionic-native/geolocation';
import { JuegosPage } from '../juegos/juegos';
import { PagarPage } from '../pagar/pagar';
import { ChatPage } from '../chat/chat';
import { DIRECCION_LOCAL } from '../../app/globalConfig';

declare var google: any;

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
  @ViewChild('map') mapRef: ElementRef;
  localizacionBase: any;
  map: any;
  directionsService: any;
  directionsDisplay: any;
  tienePedido;
  mensaje='';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    private error: AlertProvider,
    private modalCtrl: ModalController,
    private alertCtrl : AlertController,
    private geo: Geolocation) {
      this.localizacionBase = DIRECCION_LOCAL;
      this.mostrarSpiner=true;
      this.usuario=JSON.parse(localStorage.getItem("usuario"));
      if(this.usuario.tipo == 'cliente') {
        this.cliente = true;
        this.repartidor = false;
        this.auth.getPedidos().subscribe(lista => {
          this.tienePedido=false;
          for(let i=0;i<lista.length;i++)
          {
            if(lista[i].correo == this.usuario.correo && lista[i].estado != 'pagado' && lista[i].estado != 'cancelado' && lista[i].delivery) {
              this.tienePedido=true;
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
                  this.pagar();
                  break;
              }
            }
          }
          if(!this.tienePedido) {
            this.mensaje='No tiene ningun pedido hecho por delivery';
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
    this.cargarMapa();
  }

  cargarMapa() {
    this.map = new google.maps.Map(this.mapRef.nativeElement, {
      center: this.localizacionBase,
      zoom: 14,
      disableDefaultUI: true,
      mapTypeId: 'roadmap'
    });

    this.addMarker(this.localizacionBase, this.map);
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position, map
    });
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
        //this.error.mostrarErrorLiteral('Ya estas entregando un pedido. Hasta que no lo entregues no podes aceptar otro');
        //return;
        this.obtenerCoordendas(pedido);
        pedido.estado = 'en camino';
        this.auth.actualizarPedido(pedido).then(res => {
          this.error.mostrarMensaje('Entregando pedido...');
        
        });
      }
      else {
        pedido.estado = 'en camino';
        this.cargarDirecciones(pedido);
        this.auth.actualizarPedido(pedido).then(res => {
          this.error.mostrarMensaje('Entregando pedido...');
        
        });
      }
      
    }
    else {
      let yaEncamino=false;
      let otroPedido:any;
      for(let i=0;i<this.pedidosDelivery.length;i++)
      {
        if(this.pedidosDelivery[i].estado == 'en camino' && this.pedidosDelivery[i].correo != pedido.correo) {
          yaEncamino=true;
          otroPedido=this.pedidosDelivery[i];
          break;
        }
      }
      if(yaEncamino) { 
        pedido.estado = 'por entregar';
        //this.cargarMapa();
        //this.cargarDirecciones(otroPedido);
        this.obtenerDireccionActual(otroPedido);
        this.auth.actualizarPedido(pedido).then(res => {
          this.error.mostrarMensaje('por entregar...');
        });
      }
      else {
        pedido.estado = 'por entregar';
        this.cargarMapa();
        this.auth.actualizarPedido(pedido).then(res => {
          this.error.mostrarMensaje('por entregar...');
        });
      }
      
    }
  }

  obtenerDireccionActual(pedido) {
    var superScope = this;
    this.geo.getCurrentPosition().then(pos => {
      console.log(pos.coords.latitude);
      console.log(pos.coords.longitude);
      superScope.cargarDirecciones(pedido,{lat: pos.coords.latitude, lng: pos.coords.longitude})
   }).catch(err => console.log(err));
    /*navigator.geolocation.getCurrentPosition(function(pos) {
      superScope.cargarDirecciones(pedido,{lat: pos.coords.latitude, lng: pos.coords.longitude})
    })*/
  }

  mostrarDireccion(pedido) {
    let message = "<img style='height: 100%; width: 100%;' src='" + pedido.foto + "'></img>";
    let alert = this.alertCtrl.create({
      title: pedido.direccion,
      buttons: ['Cerrar'],
      message: message,
      cssClass: "foto-alert"
      });
    alert.present();
    this.obtenerCoordendas(pedido);
  }

  obtenerCoordendas(pedido) {
    var geocoder = new google.maps.Geocoder();
    var superScope = this;
    geocoder.geocode({ 'address': pedido.direccion }, function (results, status) { 
      if (status == 'OK') {
        console.log(results[0].geometry.location.lat());
        console.log(results[0].geometry.location.lng());
        var maker=new google.maps.Marker({
          position: {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()},
          draggable: false
          });
        maker.setMap(superScope.map);
        //superScope.addMarker(results[0].geometry.location,superScope.map);
      }
    });
  }

  cargarDirecciones(pedido,direccion?) {
    if (this.directionsService === undefined) {
      this.directionsService = new google.maps.DirectionsService();
    }
    if (this.directionsDisplay === undefined) {
      this.directionsDisplay = new google.maps.DirectionsRenderer();
      this.directionsDisplay.setMap(this.map);
    }
    var superScope = this;
    var request;
    if(direccion === undefined) {
      request = {
        origin: this.localizacionBase,
        destination: pedido.direccion,
        travelMode: 'DRIVING'
      };
    }else {
      request = {
        origin: direccion,
        destination: pedido.direccion,
        travelMode: 'DRIVING'
      };
    }
    this.directionsService.route(request, function (result, status) {
      if (status == 'OK') {
        superScope.directionsDisplay.setDirections(result);
      }
    });
  }

  hablarCliente(pedido) {
    this.modalCtrl.create(ChatPage, { pedido: pedido }).present();
  }

}
