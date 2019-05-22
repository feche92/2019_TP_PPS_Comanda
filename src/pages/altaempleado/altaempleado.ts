import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { AlertProvider } from "../../providers/alert/alert";
import { AuthProvider } from "../../providers/auth/auth";
import { SpinnerProvider } from "../../providers/spinner/spinner";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';



@IonicPage()
@Component({
  selector: 'page-altaempleado',
  templateUrl: 'altaempleado.html',
})
export class AltaempleadoPage {
  public correo: string;
  public clave: string;
  public nombre: string;
  public apellido: string;
  public dni: string;
  public cuil: string;
  public tipo: string = "mozo";
  public foto: string = "../../assets/Imagenes/perfil.png";
  usuarios;
  datos;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    private error: AlertProvider,
    private spiner: SpinnerProvider,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner) {
      this.usuarios=new Array();
      this.auth.getLista("usuarios").subscribe(lista => {
        this.usuarios=lista;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AltaempleadoPage');
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  ValidarNumero(numero: string) {

    let arrayNumero = numero.split("");

    for (let caracter of arrayNumero) {

      if (isNaN(parseInt(caracter))) {

        return false;
      }
    }

    return true;
  }

  validarDNI(numero:string) {
    if(numero.length==8) {
      return this.ValidarNumero(numero)
    }
    else {
      return false;
    }
  }

  validarCuil(numero:string) {
    if(numero.length==11 && this.ValidarNumero(numero)) {
      let dni=numero.substring(2,10);
      console.log(dni);
      if(dni==this.dni) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false
    }
  }

  Registrar() {
    let spiner=this.spiner.getAllPageSpinner();
    spiner.present();
    if (!this.correo || !this.clave || !this.nombre || !this.apellido || !this.dni || !this.cuil) {
      this.error.mostrarErrorLiteral("Todos los campos deben ser completados.");
      spiner.dismiss();
      return;
    }

    if (!this.validarDNI(this.dni)) {
      this.error.mostrarErrorLiteral("El DNI ingresado no es válido.");
      spiner.dismiss();
      return;
    }

    if (!this.validarCuil(this.cuil)) {
      this.error.mostrarErrorLiteral("El CUIL ingresado no es válido.");
      spiner.dismiss();
      return;
    }

    let esValido = true;
    for(let i=0;i<this.usuarios.length;i++)
    {
      if(parseInt(this.usuarios[i].DNI) == parseInt(this.dni)) {
        this.error.mostrarErrorLiteral("El DNI ingresado ya corresponde a otro usuario registrado.");
        esValido=false;
        break;
      }
    }

    if(esValido) {
      this.auth.crearUsuario(this.correo,this.clave).then(res => {
        let data= {
          "correo":this.correo, "CUIL":this.cuil, "DNI":this.dni, "nombre":this.nombre, "apellido":this.apellido,
          "estado":"", "foto":this.foto, "logueado":false, "tipo":this.tipo
        }
        this.auth.guardarUsuario(data).then(res => {
          this.error.mostrarMensaje("Empleado registrado");
          this.LimpiarCampos();
          spiner.dismiss();
        })
      }).catch(error => {
        this.error.mostrarError(error,"error al registrar el usuario");
        spiner.dismiss();
      });
    }
    else {
      spiner.dismiss();
    }
  }

  SacarFoto() {
    let options: CameraOptions = {
      quality: 50,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 600,
      targetHeight: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.foto = `data:image/jpeg;base64,${imageData}`;
    })
  }

  InicializarLectorQR() {

    let options = { prompt: "Escaneá el DNI", formats: "PDF_417" };

    this.barcodeScanner.scan(options).then(barcodeData => {

      let dniDatos = barcodeData.text.split("@");
      this.apellido = dniDatos[1];
      this.nombre = dniDatos[2];
      this.dni = dniDatos[4];
      this.cuil=dniDatos[8][0]+dniDatos[8][1]+this.dni+dniDatos[8][2];
      this.datos=dniDatos;
    }).catch(err => { });

  }

  private LimpiarCampos() {
    this.correo = undefined;
    this.clave = undefined;
    this.nombre = undefined;
    this.apellido = undefined;
    this.dni = undefined;
    this.cuil = undefined;
    this.tipo = "mozo";
    this.foto = "../../assets/Imagenes/perfil.png";
  }

}
