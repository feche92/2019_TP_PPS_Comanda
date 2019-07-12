import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JuegoDescuentoPage } from '../juego-descuento/juego-descuento';
import { PrincipalPage } from '../principal/principal';
import { AhorcadoPage } from '../ahorcado/ahorcado';


@IonicPage()
@Component({
  selector: 'page-juegos',
  templateUrl: 'juegos.html',
})
export class JuegosPage {
  public usuario: any;
  public juegos: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = JSON.parse(localStorage.getItem("usuario"));

    this.juegos = [
      { accion: "Juego de memoria", img: "memoria.jpg", ruta: JuegoDescuentoPage },
      { accion: "Juego del ahorcado", img: "ahorcado.png", ruta: AhorcadoPage },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegosPage');
  }

  Redireccionar(ruta) {
    this.navCtrl.setRoot(ruta);
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

}
