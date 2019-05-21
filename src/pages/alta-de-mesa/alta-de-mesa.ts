import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

/**
 * Generated class for the AltaDeMesaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alta-de-mesa',
  templateUrl: 'alta-de-mesa.html',
})
export class AltaDeMesaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AltaDeMesaPage');
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

}
