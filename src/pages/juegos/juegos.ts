import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JuegoDescuentoPage } from '../juego-descuento/juego-descuento';
import { PrincipalPage } from '../principal/principal';
import { JuegoPostreComponent } from '../../components/juego-postre/juego-postre';


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
      { accion: "Juego del ahorcado", img: "memoria.jpg", ruta: JuegoPostreComponent },
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
