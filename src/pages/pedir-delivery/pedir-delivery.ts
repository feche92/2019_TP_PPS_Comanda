import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { DIRECCION_LOCAL, round } from "../../app/globalConfig";
import { PedirPlatosPage } from '../pedir-platos/pedir-platos';
import { PrincipalPage } from '../principal/principal';

declare var google: any;

@IonicPage()
@Component({
  selector: 'page-pedir-delivery',
  templateUrl: 'pedir-delivery.html',
})
export class PedirDeliveryPage {
  mostrarSpiner;
  direccion;
  pedido;
  localizacionBase: any;

  @ViewChild('map') mapRef: ElementRef;
  direccionValida: boolean;

  map: any;
  searchBox: any;
  directionsService: any;
  directionsDisplay: any;

  tiempo: number;
  costo: number;
  tiempoTotal:number;
  costoTotal:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private error: AlertProvider,
    private auth: AuthProvider) {
      this.pedido = this.navParams.get("pedido");
      this.localizacionBase = DIRECCION_LOCAL;
      this.direccionValida = false;
      this.tiempo = 0;
      this.costo = 0;
      this.tiempoTotal = parseInt(this.pedido.tiempoElaboracion);
      this.costoTotal = this.pedido.montoTotal;
      console.log(this.pedido);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedirDeliveryPage');
    this.cargarMapa();
    this.cargarSearchBox();
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

  cargarSearchBox() {
    this.searchBox = new google.maps.places.SearchBox(
      document.getElementById('pac-input').getElementsByTagName('input')[0]
    );

    var superScope = this;

    if (this.direccion !== "") {
      superScope.direccionValida = true;
      superScope.cargarDirecciones();
    } else {
      superScope.direccionValida = false;
    }

    this.searchBox.addListener('places_changed', function () {
      var places = superScope.searchBox.getPlaces();

      if (places[0].types[0] === "street_address") {
        superScope.direccionValida = true;
        superScope.direccion = places[0].formatted_address;

        superScope.cargarDirecciones();

      } else {
        superScope.direccionValida = false;
      }

      if (places.length == 0) {
        return;
      }

    });

  }

  cargarDirecciones() {
    if (this.directionsService === undefined) {
      this.directionsService = new google.maps.DirectionsService();
    }
    if (this.directionsDisplay === undefined) {
      this.directionsDisplay = new google.maps.DirectionsRenderer();
      this.directionsDisplay.setMap(this.map);
    }
    var superScope = this;
    var request = {
      origin: this.localizacionBase,
      destination: this.direccion,
      travelMode: 'DRIVING'
    };
    this.directionsService.route(request, function (result, status) {
      if (status == 'OK') {
        superScope.tiempo = round((result.routes[0].legs[0].duration.value / 60), 0);
        superScope.costo = round(result.routes[0].legs[0].distance.value / 100, 0);
        //superScope.tiempo_total = round(superScope.pedido.tiempo_envio + superScope.pedido.tiempo_espera, 0);
        //superScope.costo_total = round(superScope.pedido.costo + superScope.pedido.costo_envio, 0);
        superScope.tiempoTotal = superScope.tiempo + parseInt(superScope.pedido.tiempoElaboracion);
        superScope.costoTotal = superScope.costo + superScope.pedido.montoTotal;
        superScope.directionsDisplay.setDirections(result);
        console.log(result.routes[0].legs[0].duration.value);
        console.log(result.routes[0].legs[0].distance.value);
      }
    });
  }

  validarDireccion() {
    var geocoder = new google.maps.Geocoder();
    var superScope = this;
    geocoder.geocode({ 'address': this.direccion }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK &&
        results[0].types.filter(a => {
          return a === "street_address"
        }).length === 1) {
        superScope.direccionValida = true;
      } else {
        superScope.direccionValida = false;
      }
    });
  }

  AceptarDelivery() {
    if(this.direccion == '') {
      this.error.mostrarErrorLiteral('ingrese una direccion antes de continuar');
      return;
    }
    if(!this.direccionValida) {
      this.error.mostrarErrorLiteral('ingrese una direccion valida');
      return;
    }
    this.mostrarSpiner=true;
    this.pedido.direccion=this.direccion;
    this.pedido.montoEnvio=this.costo;
    this.pedido.tiempoEnvio=this.tiempo;
    //this.pedido.tiempoElaboracion
    this.auth.nuevoPedido(this.pedido).then(res => {
      this.mostrarSpiner=false;
      this.error.mostrarMensaje("Pedido aceptado. Le notificaremos cuando lo acepte nuestro supervisor");
      this.back();
    }).catch(error => {
      this.mostrarSpiner=false;
      this.error.mostrarError(error,'hubo un error. Intentelo mas tarde');
    });
  }

  CancelarDelivery() {
    this.navCtrl.setRoot(PedirPlatosPage);
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

}
