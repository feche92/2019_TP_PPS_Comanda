import { Component } from '@angular/core';
import { AuthProvider } from "../../providers/auth/auth";
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AlertProvider } from "../../providers/alert/alert";
import { HomeClienteComponent } from "../home-cliente/home-cliente";
import { SpinnerProvider } from "../../providers/spinner/spinner";
import { EncuestaClientePage } from "../../pages/encuesta-cliente/encuesta-cliente";
import { PrincipalPage } from '../../pages/principal/principal';



@Component({
  selector: 'qr-entrada',
  templateUrl: 'qr-entrada.html'
})
export class QrEntradaComponent {

  idCliente:string; 
  usuario;
  codigo: string[] = ['idCliente', 'turno']; //codigo qr de entradaLocal
  listaEspera;
  myColor;
  listaClientes;
  comensales;
  enListaDeEspera;
  mostrarSpiner;
  yaIngreso=false;
  constructor( private modalCtrl: ModalController, private spinner: SpinnerProvider, private alert: AlertProvider,
    public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider,) {    
    //Leo los datos del usuario logueado
    this.usuario = JSON.parse(localStorage.getItem("usuario"));
    console.log(this.usuario); 
    this.myColor="primary";
    //Traigo la lista de espera desde la base
    this.listaEspera=new Array();
    this.mostrarSpiner=true;
      this.auth.getListaProdcutos("listaEspera").subscribe(lista => {
        this.listaEspera=lista;
        let flag=false;
        this.yaIngreso=false;
        for(let i=0;i<this.listaEspera.length;i++) {
          if(this.usuario.tipo == 'cliente') {
            if(this.usuario.correo == this.listaEspera[i].correo && this.listaEspera[i].estado == 'en espera') {
              this.enListaDeEspera = true;
              flag=true;
              break;
            }
            if(this.usuario.correo == this.listaEspera[i].correo && this.listaEspera[i].estado == 'aceptado') {
              this.yaIngreso = true;
              flag=true;
              break;
            }
          }
          else if(this.usuario.tipo == 'cliente anonimo') {
            if(this.usuario.nombre == this.listaEspera[i].nombre && this.listaEspera[i].estado == 'en espera') {
              this.enListaDeEspera = true;
              flag=true;
              break;
            }
            if(this.usuario.nombre == this.listaEspera[i].nombre && this.listaEspera[i].estado == 'aceptado') {
              this.yaIngreso = true;
              flag=true;
              break;
            }
          }
        }
        if(!flag) {
          this.enListaDeEspera = false;
        }
        if(this.yaIngreso) {
          this.alert.mostrarErrorLiteral("Ya ingreso..Por favor, escanee la mesa a la cual le fue asignada");
          this.mostrarSpiner = false;
          this.navCtrl.setRoot(PrincipalPage);
        }
        this.listaClientes=new Array();
        for(let i=0;i<this.listaEspera.length;i++) 
        { 
          if(this.listaEspera[i].estado == 'en espera') {
            this.listaClientes.push(this.listaEspera[i]);
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
        this.mostrarSpiner = false;
        console.log(this.listaClientes);
      });

  
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  ingresar() {
    if(this.comensales == '') {
      this.alert.mostrarErrorLiteral("Ingrese la cantidad de comensales antes de continuar");
      return;
    }
    if(this.comensales < 1 || this.comensales > 8) {
      this.alert.mostrarErrorLiteral("La cantidad de comensales tiene que ser entre 1 y 8");
      return;
    }
    if(this.usuario.tipo == 'cliente') {
      let data = {
        'nombre':this.usuario.nombre,'correo':this.usuario.correo,'apellido':this.usuario.correo,
        'foto':this.usuario.foto,'tipo':this.usuario.tipo,'estado':'en espera','turno':this.listaEspera.length,'comensales':this.comensales
      }
      this.auth.guardarListaEspera(data).then(res => {
        this.alert.mostrarMensaje("Gracias por ingresar..En breve lo atenderá un mozo, y le dara una mesa.")
      });
    }
    else {
      let data = {
        'nombre':this.usuario.nombre,'foto':'../../assets/Imagenes/perfil.png',
        'tipo':this.usuario.tipo,'estado':'en espera','turno':this.listaEspera.length,'comensales':this.comensales
      }
      this.auth.guardarListaEspera(data).then(res => {
        this.alert.mostrarMensaje("Gracias por ingresar..En breve lo atenderá un mozo, y le dara una mesa.")
      });
    }
    
    
  }

}
