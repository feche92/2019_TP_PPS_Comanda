import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { QrMesaComponent } from "../qr-mesa/qr-mesa";
import { NavController } from 'ionic-angular';

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

  codigo: string;

  constructor(private scanner: BarcodeScanner, public navCtrl: NavController) {
  }

  escanear(){
    let options = { prompt: "Escaneá un código", formats: "PDF_417" };

    this.scanner.scan(options).then(barcodeData => {
      //alert(barcodeData.text);
      this.codigo = barcodeData.text;

    }).catch(err => { 
      console.log('Error', err);
    });
  }

  codigoMesa(){
  	this.navCtrl.setRoot(QrMesaComponent);
  }



}
