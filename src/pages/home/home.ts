import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from "../principal/principal";
import { AlertProvider } from "../../providers/alert/alert";
import { AuthProvider } from "../../providers/auth/auth";
import { SpinnerProvider } from "../../providers/spinner/spinner";
import { AltaClienteComponent } from "../../components/alta-cliente/alta-cliente";
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public email:string;
  public pass:string;
  mostrarSpiner: boolean = false;
  //splash = true;
  usuarios;
  anonimo: boolean = false;
  nombre: string;
  botonUsuarios="";
  agrandar="";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private data:AuthProvider,
    private serviceAlert:AlertProvider,
    private spiner:SpinnerProvider) {
      this.usuarios = new Array();
      localStorage.clear();
  }

  /*ionViewDidLoad() {
    if(this.navParams.get('fromApp')){
      this.splash = false;
    }else{
      setTimeout(() => {
        this.splash = false;
      }, 5000);
    }    
  }*/

  entrarComoAnonimo(){
    if(this.nombre != undefined){
      let usuario = {
        'nombre': this.nombre,
        'tipo': "cliente anonimo"
      };
      localStorage.setItem("usuario", JSON.stringify(usuario));
      this.navCtrl.setRoot(PrincipalPage, {usuario : usuario});
    }else{
      this.serviceAlert.mostrarError("Debe ingresar un nombre de usuario");
    }
  }

  DesplegarUsuarios() {
    this.botonUsuarios = "ocultar";
    this.agrandar = "agrandar";
  }

  SetearUsuario(email: string, password: string) {
    this.email = email;
    this.pass = password;
    this.NoDesplegarUsuarios();
  }

  NoDesplegarUsuarios() {

    setTimeout(() => {
      this.botonUsuarios = "";
    }, 500);

    this.agrandar = "";
  }

  aceptar() {
    if(this.validForm()) {
      this.mostrarSpiner=true;
      this.data.login(this.email,this.pass).then(res => {
        this.data.getLista('usuarios').subscribe(lista => {
          this.usuarios=lista;
          console.log(this.usuarios);
          let flag = false;
          for(let i=0;i<this.usuarios.length;i++)
          {
            if(this.usuarios[i].correo == this.email) {
              if(this.usuarios[i].tipo != 'cliente' || (this.usuarios[i].tipo == 'cliente' && this.usuarios[i].estado == "Aprobado")){
                flag = true;
                let usuario = this.usuarios[i];
                localStorage.setItem("usuario", JSON.stringify(usuario));
                this.mostrarSpiner=false;
                this.navCtrl.setRoot(PrincipalPage, {usuario : res});
              }
              
            }
          }
          if(!flag) {
            this.serviceAlert.mostrarError("El usuario no existe");
            this.mostrarSpiner=false;
          }
          
        })
        
      }).catch(error => {
        this.mostrarSpiner=false;
        this.serviceAlert.mostrarError(error,"Error al iniciar sesión");
      });
    }
  }

  private validForm(){
    if(this.pass && this.email){
      return true;
    }
    this.serviceAlert.mostrarErrorLiteral("Todos los campos son obligatorios", "Error al registrarse");
    return false;
  }

  register() {
    this.navCtrl.setRoot(AltaClienteComponent);
  }

}
