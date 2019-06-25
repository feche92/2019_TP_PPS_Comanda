import { Component } from '@angular/core';
import { AuthProvider } from "../../providers/auth/auth";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../../pages/principal/principal';
import { AlertProvider } from "../../providers/alert/alert";
import * as moment from 'moment';

/**
 * Generated class for the ListadoClientesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listado-clientes',
  templateUrl: 'listado-clientes.html'
})
export class ListadoClientesComponent {

  text: string;
  listaClientes;
  mostrarSpiner;
  reservasConfirmadas;
  mesas;
  ocultarInterfazMesas;
  clienteSeleccionado;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider,
    private error: AlertProvider) {
    this.listaClientes=new Array();
    this.reservasConfirmadas=new Array();
    this.mesas=new Array();
    this.mostrarSpiner=true;
    this.auth.getListaEspera().subscribe(lista => {
      this.listaClientes=[];
      for(let i=0;i<lista.length;i++)
      {
        if(lista[i].estado == 'en espera') {
          this.listaClientes.push(lista[i]);
        }
      }
      this.listaClientes.sort(function (a, b) {
        if (a.turno > b.turno) {
          return 1;
        }
        if (a.turno < b.turno) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      console.log(this.listaClientes);
      this.auth.getReservas().subscribe(lista => {
        for(let j=0;j<lista.length;j++)
        {
          if(lista[j].estado == 'confirmada') {
            this.reservasConfirmadas.push(lista[j]);
          }
        }
      });
      this.ocultarInterfazMesas=true;
      this.mostrarSpiner=false;
    });
    
    
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  Cancelar(item) {
    console.log(item);
    let alertConfirm = this.error.mostrarMensajeConfimación("¿Estas seguro que no le quiere permitir acceso a "+ item.nombre +"?", "Cancelar cliente");
    alertConfirm.present();
    alertConfirm.onDidDismiss((confirm) => {
      if (confirm) {
        item.estado='cancelado';
        this.auth.updateListaEspera(item).then(res => {
          this.error.mostrarMensaje("cliente cancelado");
        });
      }
    });
    
  }

  DesplegarMesas(item) {
    console.log(item);
    this.mesas=[];
    this.clienteSeleccionado=item;
    let tieneReserva=false;
    let momentoActual = moment(new Date());
    this.auth.getMesas().subscribe(lista => {
      lista;
      let estaDesocupada: boolean;
      //let momentoReservaSeleccionada = moment(reservaSeleccionada.horario, "DD/MM/YYYY HH:mm");
      for(let i=0;i<lista.length;i++)
      {
        estaDesocupada=true;
        for(let j=0;j<this.reservasConfirmadas.length;j++)
        {
          if(lista[i].numero == this.reservasConfirmadas[j].mesa) {
            let momentoReservaMesa = moment(this.reservasConfirmadas[j].horario, "DD/MM/YYYY HH:mm");
            console.log(Math.abs(momentoReservaMesa.diff(momentoActual, "m")));
            if (Math.abs(momentoReservaMesa.diff(momentoActual, "m")) < 40 && Math.abs(momentoReservaMesa.diff(momentoActual, "m")) > 0) {
              if(this.clienteSeleccionado.tipo == 'cliente' && this.clienteSeleccionado.correo == this.reservasConfirmadas[j].correo) {
                tieneReserva=true;
                break;
              }

              estaDesocupada = false;
              break;
            }
          }
        }
        if(tieneReserva) {
          this.mesas=[];
          this.mesas.push({ numero: lista[i].numero, seleccionado: "" });
          break;
        }
        if(lista[i].cantidadComensales >= item.comensales && estaDesocupada && lista[i].estado == 'libre') {
          this.mesas.push({ numero: lista[i].numero, seleccionado: "" });
        }
      }
      if(this.mesas.length == 0) {
        this.error.mostrarErrorLiteral("No hay mesas disponibles");
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
      this.clienteSeleccionado.estado = 'aceptado';
      this.clienteSeleccionado.mesa = numeroDeMesa;
      this.auth.updateListaEspera(this.clienteSeleccionado).then(res => {
        this.OcultarInterfaz();
        this.error.mostrarMensaje("Cliente aceptado");
      }).catch(error => {
        this.OcultarInterfaz();
        this.error.mostrarError(error,"Hubo un error al aceptar el cliente");
      })
    }
  }

}
