import { Component } from '@angular/core';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { HomeClienteComponent } from "../home-cliente/home-cliente";
import { NavController, NavParams } from 'ionic-angular';

export interface listaEspera {
  id:string,
  idCliente:string,
  turno:string
}

@Component({
  selector: 'qr-entrada',
  templateUrl: 'qr-entrada.html'
})
export class QrEntradaComponent {

  idCliente:string; 
  usuario;
  codigo: string[] = ['idCliente', 'turno']; //codigo qr de entradaLocal
  listaEspera;


  constructor(public alert: AlertProvider,public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider,) {    
    //Leo los datos del usuario logueado
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    console.log(this.usuario); 

    //Traigo la lista de espera desde la base
    this.listaEspera=new Array();
      this.auth.getListaProdcutos("listaEspera").subscribe(lista => {
        this.listaEspera=lista;
      });

    console.log(this.listaEspera);
  
  }

  ponerEnLista(){

    let data = {
      turno: this.listaEspera.length +1,
      idCliente: this.usuario.idCliente,
      
    };
    this.auth.updateListaEspera(data);
    this.alert.mostrarMensaje("Lista Espera Actualizada");
    this.navCtrl.setRoot(HomeClienteComponent);
  }

  verEncuestas(){};
  cancelar(){};

}
