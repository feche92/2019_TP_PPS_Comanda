import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from "../principal/principal";
import { AlertProvider } from "../../providers/alert/alert";
import { AuthProvider } from "../../providers/auth/auth";
import { SpinnerProvider } from "../../providers/spinner/spinner";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public email:string;
  public pass:string;
  //splash = true;
  usuarios;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private data:AuthProvider,
    private serviceAlert:AlertProvider,
    private spiner:SpinnerProvider) {
      this.usuarios=new Array();
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

  rellenar(){
    this.email = "samy32m@gmail.com";
    this.pass = "222222";
  }

  aceptar() {
    if(this.validForm()) {
      let spiner=this.spiner.getAllPageSpinner();
      spiner.present();
      this.data.login(this.email,this.pass).then(res => {
        this.data.getLista('usuarios').subscribe(lista => {
          this.usuarios=lista;
          console.log(this.usuarios);
          for(let i=0;i<this.usuarios.length;i++)
          {
            if(this.usuarios[i].correo==this.email) {
              /*let usuario=this.usuarios[i];
              if(usuario.logueado) {
                spiner.dismiss();
                this.serviceAlert.mostrarErrorLiteral("Este usuario ya tiene una sesión activa actualmente.", "Error al registrarse");
                break;
              }
              else {
                usuario.logueado=true;
                localStorage.setItem("usuario", JSON.stringify(usuario));
                this.data.updateUsuario(usuario)
                .then(response => {
                  spiner.dismiss();
                  this.navCtrl.setRoot(PrincipalPage, {usuario : res});
                }, error => {
                  spiner.dismiss();
                  this.serviceAlert.mostrarError(error,"Error al iniciar sesión");
                });
              }
              break;*/
              let usuario=this.usuarios[i];
              localStorage.setItem("usuario", JSON.stringify(usuario));
              spiner.dismiss();
              this.navCtrl.setRoot(PrincipalPage, {usuario : res});
            }
          }
          
        })
        
      }).catch(error => {
        spiner.dismiss();
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

  }

}
