import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { AuthProvider } from "../../providers/auth/auth";



@IonicPage()
@Component({
  selector: 'page-listado-mesas',
  templateUrl: 'listado-mesas.html',
})
export class ListadoMesasPage {
  mesas;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider) {
      this.auth.getMesas().subscribe(lista => {
        this.mesas=lista;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoMesasPage');
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

}
