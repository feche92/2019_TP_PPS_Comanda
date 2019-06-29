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
//import { AltaClienteComponent } from '../../components/alta-cliente/alta-cliente';
import { ReservaPage } from '../reserva/reserva';
import {ListadoEncuestasPage} from '../listado-encuestas/listado-encuestas';
//import { FcmProvider } from '../../providers/fcm/fcm';
//import { ToastController } from 'ionic-angular';
//import { tap } from 'rxjs/operators';
import { ListadoReservaPage } from '../listado-reserva/listado-reserva';
import { PedirPlatosPage } from '../pedir-platos/pedir-platos';
import { EncuestaClientePage } from '../encuesta-cliente/encuesta-cliente';
import { ListadoMesasPage } from '../listado-mesas/listado-mesas';
import { AltaDeProductoPage } from '../alta-de-producto/alta-de-producto';
//import { EstadisticasSupervisorPage } from '../estadisticas-supervisor/estadisticas-supervisor';
//import { JuegosPage } from '../juegos/juegos';
import { ConfirmarPedidoPage } from '../confirmar-pedido/confirmar-pedido';
//import { PagarPage } from '../pagar/pagar';
import { HomeClienteComponent } from '../../components/home-cliente/home-cliente';
import { QrEntradaComponent } from '../../components/qr-entrada/qr-entrada';
import { ListadoClientesComponent } from '../../components/listado-clientes/listado-clientes';
import { PagarPage } from '../pagar/pagar';


import { JuegoPostreComponent } from '../../components/juego-postre/juego-postre';

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
    private auth: AuthProvider){
    //private fcm: FcmProvider, 
    //private toastCtrl: ToastController) {
      /*this.fcm.getToken()

    // Listen to incoming messages
    this.fcm.listenToNotifications().pipe(
      tap(msg => {
        // show a toast
        const toast = this.toastCtrl.create({
          message: msg.body,
          duration: 3000,
          position: 'top',
          cssClass: 'nombreRaro'

        });

        toast.present();
      })
    )
      .subscribe()*/
      this.usuario=JSON.parse(localStorage.getItem("usuario"));
      console.log(this.usuario.tipo);
      switch(this.usuario.tipo) {
        case "cocinero":
        case "bartender":
          this.acciones = [
            { accion: "Pedidos Pendientes", img: "bandeja.png", ruta: PedidosPendientesComponent },
            { accion: "Nuevo producto", img: "producto.png", ruta: AltaDeProductoPage },
            { accion: "Encuesta empleado", img: "encuesta.jpg", ruta: EncuestaEmpleadoComponent },
          ];        
          break;
        case "supervisor":
          this.acciones = [
            { accion: "Agregar un empleado", img: "nuevo-empleado.jpg", ruta: AltaempleadoPage },
            { accion: "Nuevo Supervisor", img: "nuevo-empleado.jpg", ruta: AltaSupervisorComponent },
            { accion: "Confeccionar y ver encuestas", img: "encuesta.jpg", ruta: ListadoSupervisorPage },
            { accion: "Nueva mesa", img: "ocupar-mesa.jpg", ruta: AltaDeMesaPage },
            { accion: "Ver Estado de Registro de Clientes", img: "nuevo-empleado.jpg", ruta: ListaClienteEstadoComponent },  // quitar despues, es solo para prueba
            { accion: "Confirmar reservas", img: "reserva.jpg", ruta: ListadoReservaPage },
          ];
          break;
        case "cliente anonimo":
          this.acciones = [
            { accion: "Leer código QR", img: "qr.jpg", ruta: HomeClienteComponent },
            //{ accion: "QR prueba", img: "juegos.jpg", ruta: QrEntradaComponent},
            //{ accion: "QR prueba mesa", img: "juegos.jpg", ruta: QrMesaComponent},
          ];
          break;
        case "cliente":
          this.acciones = [
            { accion: "Reservar", img: "reserva.jpg", ruta: ReservaPage },
            { accion: "Leer código QR", img: "qr.jpg", ruta: HomeClienteComponent },
            { accion: "Pedir platos y bebidas", img: "pedido.jpg", ruta: PedirPlatosPage},
            //{ accion: "QR prueba", img: "juegos.jpg", ruta: QrEntradaComponent},
            //{ accion: "QR prueba mesa", img: "juegos.jpg", ruta: QrMesaComponent},
            //{ accion: "Pagar", img: "propina.jpg", ruta: PagarPage },
            /*{ accion: "Pedir platos y bebidas", img: "pedido.jpg", ruta: PedirPlatosPage},
            { accion: "Jugar", img: "juegos.jpg", ruta: JuegosPage},
            { accion: "Pagar", img: "propina.jpg", ruta: PagarPage },
            { accion: "Leer QR Entrada", img: "qr.jpg", ruta: HomeClienteComponent },*/
           // { accion: "Ver Encuestas Clientes", img: "encuesta.jpg", ruta: ListadoEncuestasPage},            
           // { accion: "Encuesta", img: "encuesta.jpg", ruta: EncuestaClientePage},
            
          ];
          break;
        case "mozo": 
          this.acciones = [
            { accion: "Tomar pedido", img: "pedido.jpg", ruta: ListadoMesasPage},
            { accion: "Aceptar/Entregar pedido", img: "pedido.jpg", ruta: ConfirmarPedidoPage},
            { accion: "Aceptar clientes en lista de espera", img: "qr.jpg", ruta: ListadoClientesComponent},
            { accion: "Encuesta empleado", img: "encuesta.jpg", ruta: EncuestaEmpleadoComponent },
          ]
          break;
          
        }
/*
        if(this.usuario.tipo == 'cliente')
        {
          this.auth.getPedidos().subscribe(lista => {
            for(let i=0;i<lista.length;i++)
            {
              if(lista[i].correo == this.usuario.correo && lista[i].estado == 'camino a entrega') {
                let alertConfirm = this.error.mostrarMensajeConfimación("¿Quieres aceptar el pedido?", "Pedido por entregar");
                alertConfirm.present();
                alertConfirm.onDidDismiss((confirm) => {
                if (confirm) {
                  lista[i].estado = 'comiendo';
                  this.auth.actualizarPedido(lista[i]).then(res => {
                    this.error.mostrarMensaje("pedido entregado. Disfrutelo");
                  });
                }
                else {
                  lista[i].estado = 'pedido terminado';
                  this.auth.actualizarPedido(lista[i]).then(res => {
                    this.error.mostrarMensaje("Perdon, se le volverà a entregar el pedido si todavia no esta listo");
                  });
                }
                });
                break;
              }
            }
          })
        }
        */
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

