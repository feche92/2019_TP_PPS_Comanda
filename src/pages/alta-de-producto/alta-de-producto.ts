import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { AlertProvider } from "../../providers/alert/alert";
import { AuthProvider } from "../../providers/auth/auth";
import { SpinnerProvider } from "../../providers/spinner/spinner";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import * as firebase from "firebase";



@IonicPage()
@Component({
  selector: 'page-alta-de-producto',
  templateUrl: 'alta-de-producto.html',
})
export class AltaDeProductoPage {
  firebase = firebase;
  //atributos
  public tipo: string = "plato";
  public descripcion: string;
  public nombre: string;
  public tiempoPromedioElaboracion: number;
  public foto: string = "../../assets/Imagenes/producto.png";
  public lectorQR: string;
  public precio: number;

  public estado :string = "Definir estado inicial";
  public numeroProducto:number;

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

  Alta() {
    console.log('AltaDeProductoPage - Inicio alta de producto');
   let spiner=this.spiner.getAllPageSpinner();
    spiner.present();
    console.log (this);
    if (!this.nombre ||!this.tiempoPromedioElaboracion || !this.descripcion
       || !this.tipo || this.foto=="" || !this.precio || !this.lectorQR )
    {
      this.error.mostrarErrorLiteral("Todos los campos deben ser completados.");
     spiner.dismiss();
      return;
    }
    if(this.tiempoPromedioElaboracion < 1)
    {
      this.error.mostrarErrorLiteral("El tiempo promedio de elaboracion debe ser mayor a 1");
     spiner.dismiss();
      return;
    }
    if(this.precio < 0)
    {
      this.error.mostrarErrorLiteral("El precio no puede ser negativo");
      spiner.dismiss();
      return;
    }   
    let esValido = true;
    
    if(esValido) {
      let data= {
        "nombre":this.nombre,
        "descripcion":this.descripcion,
        "foto":this.foto,
        "tipo":this.tipo,
        "precio":this.precio, 
        "lectorQR":this.lectorQR,
        "tiempoPromedioElaboracion":this.tiempoPromedioElaboracion,
        "estado": this.estado,
        "numeroProducto":this.productos.length +1
      
      }
      this.auth.guardarProducto(data).then(res =>{
        this.error.mostrarMensaje("producto guardado");
        this.LimpiarCampos();
       spiner.dismiss();
      }).catch(error => {
        this.error.mostrarError(error,"error al guardar el producto");
       spiner.dismiss();
      });
    }
    else {
      spiner.dismiss();
    }
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad AltaDeProductoPage');
  }

  private LimpiarCampos() {     
      this.nombre="";
      this.tiempoPromedioElaboracion = 0;
      this.descripcion ="";
      this.tipo = "plato";
      this.foto="../../assets/Imagenes/producto.png";
      this.precio=0;
      this.lectorQR="";
    
    
  }  
  
  async SacarFoto() {
    let imageName = this.numeroProducto + this.nombre;
    try {

      let options: CameraOptions = {
        quality: 50,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };

      let result = await this.camera.getPicture(options);

      let image = `data:image/jpeg;base64,${result}`;

      //guardo en Firebase Storage
      let pictures = this.firebase.storage().ref(`productos/${imageName}`);
      

      //tomo url de foto en Firebase Storage
      pictures.putString(image, "data_url").then(() => {
        pictures.getDownloadURL().then((url) => {
      	   this.foto = url;
        });        
      });
    } catch (error) {
      alert(error);
    }
  }




  InicializarLectorQR() {
    console.log('AltaDeProductoPage - Inicializo lector de QR');
    let options = { prompt: "Escanea la bebida o el plato", formats: "PDF_417" };

    this.barcodeScanner.scan(options).then(barcodeData => {

      let productoDatos = barcodeData;
      this.tipo = productoDatos[1];
      this.nombre = productoDatos[2];
      this.descripcion = productoDatos[3];
      this.tiempoPromedioElaboracion=productoDatos[4];
      this.foto=productoDatos[5];;
    }).catch(err => { });

  }
}
