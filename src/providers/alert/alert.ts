import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';


@Injectable()
export class AlertProvider {
  static knownErrors: any = [
    {
        code: 'auth/email-already-in-use',
        message: "El correo ya existe"
    },
    {
        code: 'auth/user-not-found',
        message: "El correo no se encuentra registrado"
    },
    {
        code: 'auth/wrong-password',
        message: "Contraseña Incorrecta"
    },
    {
        code: "auth/network-request-failed",
        message: "No hay conexión a internet"
    },
    {
        code: "auth/invalid-email",
        message: "Correo inválido"
    },
    {
        code: "auth/weak-password",
        message: "La contraseña debe tener mínimo 6 caracteres"
    }

  ];
  constructor(public alertCtrl: AlertController, public alert:ToastController) {
  }

  public mostrarError(error, title?, message?) {
    console.log("ocurrio un error", error);
    var errorMessage = this.getErrorMessage(error);
    let alert = this.alert.create({
        position: "middle",
        duration: 2000,
        cssClass: 'error-alert',
        message: message ? message + errorMessage : errorMessage,
        
    });
    alert.present();
}

public mostrarErrorLiteral(error, title?) {
    let alert = this.alert.create({
        position: "topo",
        duration: 2000,
        message: error,
        cssClass: 'error-alert'
    });
    alert.present();
}

private getErrorMessage(error) {
  var mensaje = "Error desconocido";
  for (var i = 0; i < AlertProvider.knownErrors.length; i++) {
      if (error.code == AlertProvider.knownErrors[i].code) {
          mensaje = AlertProvider.knownErrors[i].message;
          break;
      }
  }
  return mensaje;
}

public mostrarMensajeConfimación(mensaje, title?) {
    let alert = this.alertCtrl.create({
        title: title,
        message: mensaje,
        cssClass: 'confirm-alert',
        buttons: [
            {
                text: 'No',
                role: 'cancel',
                handler: () => {
                    alert.dismiss(false);
                    return false;
                }
            },
            {
                text: 'Si',
                handler: () => {
                    alert.dismiss(true);
                    return false;
                }
            }
        ]
    }
    );
    return alert;
}

public mostrarMensaje(mesagge){
    let alert = this.alert.create({
        message: mesagge,
        duration: 4000,
        position: "top",
        cssClass: 'success-alert',
    });
    alert.present();
}

}
