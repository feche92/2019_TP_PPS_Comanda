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
import { ListadoSupervisorPage } from '../listado-supervisor/listado-supervisor';
import { AltaClienteComponent } from '../../components/alta-cliente/alta-cliente';
import { ReservaPage } from '../reserva/reserva';
import { FcmProvider } from '../../providers/fcm/fcm';
import { ToastController } from 'ionic-angular';
import { tap } from 'rxjs/operators';
import { ListadoReservaPage } from '../listado-reserva/listado-reserva';
import { PedirPlatosPage } from '../pedir-platos/pedir-platos';
import { ListadoMesasPage } from '../listado-mesas/listado-mesas';
import { AltaDeProductoPage } from '../alta-de-producto/alta-de-producto';
import { EstadisticasSupervisorPage } from '../estadisticas-supervisor/estadisticas-supervisor';
import { JuegosPage } from '../juegos/juegos';
import { HomeClienteComponent } from "../../components/home-cliente/home-cliente";

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
    private auth: AuthProvider,
    fcm: FcmProvider, 
    private toastCtrl: ToastController) {
      fcm.getToken()

    // Listen to incoming messages
    fcm.listenToNotifications().pipe(
      tap(msg => {
        // show a toast
        const toast = toastCtrl.create({
          message: msg.body,
          duration: 4000,
          position: 'top',
          cssClass: 'nombreRaro'

        });

        toast.present();
      })
    )
      .subscribe()
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
            { accion: "Nuevo Supervisor", img: "nuevo-empleado.jpg", ruta: AltaSupervisorComponent },
            { accion: "Confeccionar y ver encuestas", img: "encuesta.jpg", ruta: ListadoSupervisorPage },
            { accion: "Nueva mesa", img: "ocupar-mesa.jpg", ruta: AltaDeMesaPage },
            { accion: "Ver Estado de Registro de Clientes", img: "nuevo-empleado.jpg", ruta: ListaClienteEstadoComponent }, 
            { accion: "Encuesta empleado", img: "nuevo-empleado.jpg", ruta: EncuestaEmpleadoComponent }, // quitar despues, es solo para prueba
            { accion: "Confirmar reservas", img: "reserva.jpg", ruta: ListadoReservaPage },
            { accion: "Nuevo producto", img: "producto.png", ruta: AltaDeProductoPage },
          ];
          break;
        case "cliente registrado":
        case "cliente anonimo":
          this.acciones = [
            //{ accion: "Home", img: "nuevo-empleado.jpg", ruta: HomeClienteComponent }
          ];
          break;
        case "cliente":
          this.acciones = [
            { accion: "Reservar", img: "reserva.jpg", ruta: ReservaPage },
            { accion: "Pedir platos y bebidas", img: "pedido.jpg", ruta: PedirPlatosPage},
            { accion: "Jugar", img: "juegos.jpg", ruta: JuegosPage},
            { accion: "Escanear código", img: "nuevo-empleado.jpg", ruta: HomeClienteComponent }, 
          ];
          break;
        case "mozo": 
          this.acciones = [
            { accion: "Tomar pedido", img: "pedido.jpg", ruta: ListadoMesasPage}
          ]
          break;
          
        }
  }

  ionViewDidLoad() {
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

