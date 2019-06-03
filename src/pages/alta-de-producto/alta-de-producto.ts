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
  selector: 'page-alta-de-producto',
  templateUrl: 'alta-de-producto.html',
})
export class AltaDeProductoPage {
  //atributos
  public tipo: string;
  public decripcion: string;
  public nombre: string;
  public tiempoEstimadoElaboracion: string;
  public foto: string;
  public lectorQR: string;
  usuarios;
  productos;

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
      this.productos=new Array();
      this.auth.getListaProdcutos("productos").subscribe(lista => {
        this.productos=lista;
      });
  }

  back() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AltaDeProductoPage');
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

    let options = { prompt: "Escanea la bebida o el plato", formats: "PDF_417" };

    this.barcodeScanner.scan(options).then(barcodeData => {

      let productoDatos = barcodeData;
      this.tipo = productoDatos[1];
      this.nombre = productoDatos[2];
      this.decripcion = productoDatos[3];
      this.tiempoEstimadoElaboracion=productoDatos[4];
      this.foto=productoDatos[5];;
    }).catch(err => { });

  }
}
