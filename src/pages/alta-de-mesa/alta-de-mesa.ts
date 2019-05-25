import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { AlertProvider } from "../../providers/alert/alert";
import { AuthProvider } from "../../providers/auth/auth";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';



@IonicPage()
@Component({
  selector: 'page-alta-de-mesa',
  templateUrl: 'alta-de-mesa.html',
})
export class AltaDeMesaPage {
  public numeroMesa;
  public cantidadComensales;
  public tipo="normal";
  public foto: string = "../../assets/Imagenes/ocupar-mesa.jpg";
  mesas;
  codigo;
  mostrarSpiner:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    private error: AlertProvider,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner) {
      this.mesas=new Array();
      this.auth.getMesas().subscribe(lista => {
        this.mesas=lista;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AltaDeMesaPage');
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  Alta() {
    //let spiner=this.spiner.getAllPageSpinner();
    //spiner.present();
    this.mostrarSpiner=true;
    if (!this.numeroMesa || !this.cantidadComensales || !this.tipo || this.foto=="")
    {
      this.error.mostrarErrorLiteral("Todos los campos deben ser completados.");
      this.mostrarSpiner=false;
      return;
    }
    if(this.cantidadComensales < 1 || this.cantidadComensales > 8)
    {
      this.error.mostrarErrorLiteral("Los comensales solo pueden ser de 1 a 8.");
      this.mostrarSpiner=false;
      return;
    }
    let esValido = true;
    for(let i=0;i<this.mesas.length;i++)
    {
      if(this.mesas[i].numero == this.numeroMesa) {
        this.error.mostrarErrorLiteral("El numero ingresado ya corresponde a otra mesa registrada.");
        esValido=false;
        break;
      }
    }
    if(esValido) {
      let data= {
        "numero":this.numeroMesa,"cantidadComensales":this.cantidadComensales,"foto":this.foto,
        "tipo":this.tipo,"estado":"libre"
      }
      this.auth.guardarMesa(data).then(res =>{
        this.error.mostrarMensaje("mesa registrada");
        this.LimpiarCampos();
        this.mostrarSpiner=false;
      }).catch(error => {
        this.error.mostrarError(error,"error al registrar la mesa");
        this.mostrarSpiner=false;
      });
    }
    else {
      this.mostrarSpiner=false;
    }
  }

  private LimpiarCampos() { 
    this.numeroMesa="";
    this.cantidadComensales="";
    this.tipo="normal";
    this.foto="../../assets/Imagenes/ocupar-mesa.jpg";
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
    this.barcodeScanner.scan().then((barcodeData) => {
      this.codigo = barcodeData.text;
      let dato=this.codigo.split(",");
      this.numeroMesa=dato[0];
      this.cantidadComensales=dato[1];
      this.tipo=dato[2];
    }, (error) => {
      this.error.mostrarErrorLiteral(error);
    });
  }

}
