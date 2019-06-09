import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { AltaempleadoPage } from "../altaempleado/altaempleado";
import { AltaDeMesaPage } from "../alta-de-mesa/alta-de-mesa";
import { AlertProvider } from "../../providers/alert/alert";
import { AuthProvider } from "../../providers/auth/auth";
import { AltaSupervisorComponent } from "../../components/alta-supervisor/alta-supervisor";
import { QrMesaComponent } from "../../components/qr-mesa/qr-mesa";
import { EncuestaEmpleadoComponent } from "../../components/encuesta-empleado/encuesta-empleado";
import { ListaClienteEstadoComponent } from "../../components/lista-cliente-estado/lista-cliente-estado";
import { PedidosPendientesComponent } from "../../components/pedidos-pendientes/pedidos-pendientes";

/**
 * Generated class for the PrincipalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  acciones: Array<any> = [];
  usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private error: AlertProvider,
    private auth: AuthProvider) {
      this.usuario=JSON.parse(localStorage.getItem("usuario"));
      console.log(this.usuario.tipo);
      switch(this.usuario.tipo) {
        case "cocinero":
        case "bartender":
          this.acciones = [
            { accion: "Pedidos Pendientes", img: "nuevo-empleado.jpg", ruta: PedidosPendientesComponent },
          ];        
          break;
        case "supervisor":
          this.acciones = [
            { accion: "Agregar un empleado", img: "nuevo-empleado.jpg", ruta: AltaempleadoPage },
            { accion: "Nueva mesa", img: "ocupar-mesa.jpg", ruta: AltaDeMesaPage },
            { accion: "Nuevo Supervisor", img: "ocupar-mesa.jpg", ruta: AltaSupervisorComponent },
            { accion: "Ver Estado de Registro de Clientes", img: "nuevo-empleado.jpg", ruta: ListaClienteEstadoComponent }, 
            { accion: "Probar qr mesa", img: "nuevo-empleado.jpg", ruta: QrMesaComponent }, // quitar despues, es solo para prueba
            { accion: "Encuesta empleado", img: "nuevo-empleado.jpg", ruta: EncuestaEmpleadoComponent }, // quitar despues, es solo para prueba
          ];
          break;
        case "cliente registrado":
        case "cliente anonimo":
          this.acciones = [
            //{ accion: "Home", img: "nuevo-empleado.jpg", ruta: HomeClienteComponent }
          ];
          break;
        }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  logout(){
    let alertConfirm = this.error.mostrarMensajeConfimación("¿Quieres cerrar sesión?", "Cerrar sesión");
    alertConfirm.present();
    alertConfirm.onDidDismiss((confirm) => {
      if (confirm) {
        this.cerrarSersion();
      }
    });
  }

  private cerrarSersion(){
    this.auth.logOut();
    this.navCtrl.setRoot(HomePage, { 'fromApp': true });
  }

  openPage(ruta) {
    this.navCtrl.setRoot(ruta);
  }

}

