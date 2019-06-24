import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QrMesaComponent } from "../qr-mesa/qr-mesa";
import { QrEntradaComponent } from "../qr-entrada/qr-entrada";
import { AlertProvider } from "../../providers/alert/alert";

import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PrincipalPage } from '../../pages/principal/principal';

/**
 * Generated class for the HomeClienteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-cliente',
  templateUrl: 'home-cliente.html'
})
export class HomeClienteComponent {

  codigo="";

  constructor(private scanner: BarcodeScanner, public navCtrl: NavController, 
    private modalCtrl: ModalController,
    private error: AlertProvider) {
      this.escanear();
  }

  escanear(){
    this.codigo = '';
    this.scanner.scan().then(barcodeData => {
      //alert(barcodeData.text);
     this.codigo = barcodeData.text;
      let dato = this.codigo.split(',');
      switch(dato[0]){
        case 'mesa':
          this.modalCtrl.create(QrMesaComponent, { codigo: dato }).present();
        break;
        case 'producto':
            this.error.mostrarErrorLiteral("Codigo no valido");
            this.navCtrl.setRoot(PrincipalPage);
        break;
        case 'encuesta':
            this.error.mostrarErrorLiteral("Codigo no valido");
            this.navCtrl.setRoot(PrincipalPage);
        break;
        case 'propina':
            this.error.mostrarErrorLiteral("Codigo no valido");
            this.navCtrl.setRoot(PrincipalPage);
            break;
        case 'entrada':
          this.modalCtrl.create(QrEntradaComponent).present();
        break;
        default:
          this.error.mostrarErrorLiteral("Codigo no valido");
          this.navCtrl.setRoot(PrincipalPage);
        break;
      }


    }).catch(err => { 
      console.log('Error', err);
      this.navCtrl.setRoot(PrincipalPage);
    });
    if(this.codigo == '') {
      this.navCtrl.setRoot(PrincipalPage);
    }
  }

  codigoMesa(){
  	//this.navCtrl.setRoot(QrMesaComponent);
    //this.codigo[0] = 1;
    //this.modalCtrl.create(QrMesaComponent, { codigo: this.codigo }).present();
  }



}
