import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { SpinnerProvider } from "../../providers/spinner/spinner";
import * as moment from 'moment';



@IonicPage()
@Component({
  selector: 'page-listado-reserva',
  templateUrl: 'listado-reserva.html',
})
export class ListadoReservaPage {
  reservas;
  public reservasPendientes;
  public reservasConfirmadas;
  public mesas;
  public reservaSeleccionada;
  public reservaSeleccionadaParaCancelar;
  public image = "";
  public ocultarImagen = true;
  public ocultarSpinner: boolean = false;
  public ocultarInterfazMesas: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private spinner: SpinnerProvider,
    private auth: AuthProvider,
    private error: AlertProvider) {
      this.reservas=new Array();
      this.reservas=[];
      this.reservasConfirmadas=new Array();
      this.reservasConfirmadas=[];
      this.reservasPendientes=new Array();
      this.reservasPendientes=[];
      this.mesas=new Array();
      let spiner=this.spinner.getAllPageSpinner();
      spiner.present();
      this.auth.getReservas().subscribe(lista => {
        this.reservas=lista;
        for(let i=0;i<this.reservas.length;i++)
        {
          if(this.reservas[i].estado == 'pendiente') {
            this.reservasPendientes.push(this.reservas[i]);
          }
          if(this.reservas[i].estado == 'confirmada') {
            this.reservasConfirmadas.push(this.reservas[i]);
          }
        }
        console.log(this.reservasConfirmadas);
        console.log(this.reservasPendientes);
        this.ocultarSpinner=true;
        this.ocultarInterfazMesas=true;
        spiner.dismiss();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoReservaPage');
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  DesplegarMesas(reservaSeleccionada) {
    this.mesas = [];
    this.reservaSeleccionada = reservaSeleccionada;
    let mesast = new Array();
    this.auth.getMesas().subscribe(lista => {
      mesast=lista;
      let estaDesocupada: boolean;
      let momentoReservaSeleccionada = moment(reservaSeleccionada.horario, "DD/MM/YYYY HH:mm");
      for(let i=0;i<mesast.length;i++)
      {
        estaDesocupada=true;
        for(let j=0;j<this.reservasConfirmadas.length;j++)
        {
          if(mesast[i].numero == this.reservasConfirmadas[j].mesa) {
            let momentoReservaMesa = moment(this.reservasConfirmadas[j].horario, "DD/MM/YYYY HH:mm");

            if (Math.abs(momentoReservaSeleccionada.diff(momentoReservaMesa, "m")) < 40) {

              estaDesocupada = false;
              break;
            }
          }
        }
        if(mesast[i].cantidadComensales >= reservaSeleccionada.cantPersonas && estaDesocupada) {
          this.mesas.push({ numero: mesast[i].numero, seleccionado: "" });
        }
      }
      this.mesas = this.mesas.sort((a, b) => {
        return a.numero - b.numero;
      });

      this.ocultarInterfazMesas = false;
    });
    
  }

  Seleccionar(numero) {

    for (const item of this.mesas) {

      if (item.numero == numero)
        item.seleccionado = "selected";
      else
        item.seleccionado = "";
    }
  }

  OcultarInterfaz() {
    this.ocultarInterfazMesas = true;
  }

  Confirmar() { 
    let numeroDeMesa;
    let seleccionoMesa = false;

    for (const item of this.mesas) {

      if (item.seleccionado == "selected") {
        numeroDeMesa = item.numero;
        seleccionoMesa = true;
        break;
      }
    }
    if (seleccionoMesa) {
      this.reservaSeleccionada.estado="confirmada";
      this.reservaSeleccionada.mesa=numeroDeMesa;
      this.auth.confirmarReserva(this.reservaSeleccionada).then(res => {
        this.OcultarInterfaz();
        this.error.mostrarMensaje("Se ha confirmado la reserva.");
      }).catch(error => {
        this.OcultarInterfaz();
        this.error.mostrarError(error,"Hubo un error al confirmar la mesa.")
      })
    }
    else {
      this.error.mostrarErrorLiteral("Selecciona una mesa antes de continuar.");
    }
  }

  ConfirmarCancelarReserva(reserva) { 
    this.reservaSeleccionadaParaCancelar = reserva;
    let alertConfirm = this.error.mostrarMensajeConfimación("¿Seguro que desea cancelar esta reserva?", "Cancelar reserva");
    alertConfirm.present();
    alertConfirm.onDidDismiss((confirm) => {
      if (confirm) {
        this.CancelarRerserva();
      }
    });
  }

  CancelarRerserva() { 
    this.reservaSeleccionadaParaCancelar.estado="cancelado";
    this.auth.confirmarReserva(this.reservaSeleccionadaParaCancelar).then(res => {
      this.OcultarInterfaz();
      this.error.mostrarMensaje("Se ha cancelado la reserva.");
    }).catch(error => {
      this.OcultarInterfaz();
      this.error.mostrarError(error,"Hubo un error al cancelar la mesa.")
    })
  }

  MostrarImagen(imagen: string) {
    this.image = imagen;
    this.ocultarImagen = false;
  }

  OcultarImagen() {
    this.ocultarImagen = true;
  }

}
