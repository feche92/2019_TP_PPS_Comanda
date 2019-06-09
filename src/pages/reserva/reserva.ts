import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { AlertProvider } from "../../providers/alert/alert";
import { AuthProvider } from "../../providers/auth/auth";
import { SpinnerProvider } from "../../providers/spinner/spinner";

import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-reserva',
  templateUrl: 'reserva.html',
})
export class ReservaPage {
  public nombreDeLosMeses: string;
  public minimo: string;
  public maximo: string;

  public fecha;
  public hora;
  public cantidadPersonas;
  public reservasConfirmadas;
  public usuario: any;
  reservas;
  mesas;
  mostrarSpiner:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    private error: AlertProvider,
    private spiner: SpinnerProvider) {
    this.reservas=new Array();
    this.reservasConfirmadas= new Array();
    this.mesas=new Array();
    this.auth.getReservas().subscribe(lista => {
      this.reservas=lista;
      for(let i=0;i<this.reservas.length;i++)
      {
        if(this.reservas[i].estado=="confirmado") {
          this.reservasConfirmadas.push(this.reservas[i]);
        }
      }
      console.log(this.reservasConfirmadas);
      this.auth.getMesas().subscribe(mesas => {
        this.mesas=mesas;
        console.log(this.mesas);
      });
    });  
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    this.nombreDeLosMeses = "Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic";
    let date = new Date();

    let mes = (date.getMonth() < 10 ? '0' : '') + (date.getMonth() + 1);
    let dia = (date.getDate() < 10 ? '0' : '') + date.getDate();

    this.minimo = `${date.getFullYear()}-${mes}-${dia}`;
    this.maximo = `${date.getFullYear() + 1}`;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservaPage');
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  Reservar() {
    this.mostrarSpiner=true;
    if (!this.fecha || !this.hora || !this.cantidadPersonas) {
      this.error.mostrarErrorLiteral("Todos los campos deben ser completados.");
      this.mostrarSpiner=false;
      return;
    }

    let fechaAux = this.fecha.split("-");
    let horaAux = this.hora.split(":");

    let momentoReserva = moment(new Date(fechaAux[0], fechaAux[1] - 1, fechaAux[2], horaAux[0], horaAux[1]));
    let momentoActual = moment(new Date());

    if (momentoReserva.diff(momentoActual, "m") < 15 && momentoReserva.diff(momentoActual, "m") >= 0) {
      this.error.mostrarErrorLiteral("No se puede realizar una reserva con menos de 15 minutos de adelanto.");
      this.mostrarSpiner=false;
      return;
    }

    if (momentoReserva.diff(momentoActual, "m") < 0) {
      this.error.mostrarErrorLiteral("No se puede realizar una reserva con menos tiempo al actual.");
      this.mostrarSpiner=false;
      return;
    }

    let valido=true;

    for(let i=0;i<this.reservas.length;i++)
    {
      if(this.reservas[i].correo == this.usuario.correo) {
        let diferencia = Math.abs(momentoReserva.diff(moment(this.reservas[i].horario, "DD/MM/YYYY HH:mm"), "m"));
        if (diferencia < 60) {
          this.error.mostrarErrorLiteral("No puede haber un lapso menor a una hora entre alguna de tus reservas.");
          valido = false;
          this.mostrarSpiner=false;
          break;
        }
      }
    }

    if(valido) {
      let personasQueVan = parseInt(this.cantidadPersonas.charAt(3));
      let puedeReservar = false;
      let estaDesocupada: boolean;
      for(let i=0;i<this.mesas.length;i++)
      {
        estaDesocupada = true;
        for(let j=0;j<this.reservasConfirmadas.length;j++)
        {
          if(this.mesas[i].numero == this.reservasConfirmadas[j].mesa) {
            let momentoReservaMesa = moment(this.reservasConfirmadas[j].horario, "DD/MM/YYYY HH:mm");

              if (Math.abs(momentoReserva.diff(momentoReservaMesa, "m")) < 40) {

                estaDesocupada = false;
                break;
              }
          }
        }
        if(parseInt(this.mesas[i].cantidadComensales) >= personasQueVan && estaDesocupada) {
          puedeReservar = true;
          break;
        }
      }
      if(puedeReservar) {
        let data = {
          "correo":this.usuario.correo,"nombre":this.usuario.nombre,"apellido":this.usuario.apellido,"foto":this.usuario.foto,
          "cantPersonas":personasQueVan,"estado":"pendiente","horario":momentoReserva.format("DD/MM/YYYY HH:mm"),"mesa":""
        }
        this.auth.nuevaReserva(data).then(res => {
          this.error.mostrarMensaje("Se registró tu reserva y te notificaremos cuando el encargado la confirme.");
          this.mostrarSpiner=false;
        }).catch(error => {
          this.error.mostrarError(error,"hubo error al registrar la reserva.Intentelo mas tarde");
          this.mostrarSpiner=false;
        });
      }
      else {
        this.error.mostrarErrorLiteral("No hay mesas disponibles para esa fecha y horario.");
        this.mostrarSpiner=false;
      }
    }

  }

}
