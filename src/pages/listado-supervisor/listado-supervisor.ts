import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { SpinnerProvider } from "../../providers/spinner/spinner";
import { PrincipalPage } from '../principal/principal';
import { EncuestaSupervisorPage } from '../encuesta-supervisor/encuesta-supervisor';



@IonicPage()
@Component({
  selector: 'page-listado-supervisor',
  templateUrl: 'listado-supervisor.html',
})
export class ListadoSupervisorPage {
  listaUsuarios;
  listaEmpleados;
  listaClientes;
  public image = "";
  public ocultarImagen = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private auth: AuthProvider,
    private spinner: SpinnerProvider) {
      this.listaClientes=new Array();
      this.listaEmpleados=new Array();
      this.listaUsuarios=new Array();
      let spiner=this.spinner.getAllPageSpinner();
      spiner.present();
      this.auth.getLista('usuarios').subscribe(lista =>{
        this.listaUsuarios=lista;
        for(let i=0;i<this.listaUsuarios.length;i++)
        {
          if(this.listaUsuarios[i].tipo == 'cliente') {
            this.listaClientes.push(this.listaUsuarios[i]);
          }
          else if(this.listaUsuarios[i].tipo == 'mozo' || this.listaUsuarios[i].tipo == 'cocinero' || this.listaUsuarios[i].tipo == 'bartender' || this.listaUsuarios[i].tipo == 'metre' || this.listaUsuarios[i].tipo == 'repartidor') {
            this.listaEmpleados.push(this.listaUsuarios[i]);
          }
        }
        console.log(this.listaClientes);
        console.log(this.listaEmpleados);
        spiner.dismiss();
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoSupervisorPage');
  }

  MostrarEncuesta(usuario) {
    this.modalCtrl.create(EncuestaSupervisorPage, { usuario: usuario }).present();
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  MostrarImagen(imagen: string) {
    this.image = imagen;
    this.ocultarImagen = true;
  }

  OcultarImagen() {
    this.ocultarImagen = false;
  }


}
