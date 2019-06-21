import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QrMesaComponent } from "../qr-mesa/qr-mesa";
import { QrEntradaComponent } from "../qr-entrada/qr-entrada";

import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

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

  codigo: any[] = [];

  constructor(private scanner: BarcodeScanner, public navCtrl: NavController, 
    private modalCtrl: ModalController) {
  }

  escanear(){
    let options = { prompt: "Escaneá un código", formats: "PDF_417" };

    this.scanner.scan(options).then(barcodeData => {
      //alert(barcodeData.text);
      let codigo = barcodeData.text;
      this.codigo = codigo.split(',');
      switch(this.codigo[0]){
        case 'mesa':
          this.modalCtrl.create(QrMesaComponent, { codigo: this.codigo }).present();
        break;
        case 'producto':
        break;
        case 'encuesta':
        break;
        case 'entradaLocal':
          this.modalCtrl.create(QrEntradaComponent, { codigo: this.codigo }).present();
        break;
        default:
          console.log("Codigo erroneo");
        break;
      }


    }).catch(err => { 
      console.log('Error', err);
    });
  }

  codigoMesa(){
  	//this.navCtrl.setRoot(QrMesaComponent);
    this.codigo[0] = 1;
    this.modalCtrl.create(QrMesaComponent, { codigo: this.codigo }).present();
  }



}
