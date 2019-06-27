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
  public tipo: string;
  public descripcion: string;
  public nombre: string;
  public tiempoPromedioElaboracion: number;
  public foto: string = "../../assets/Imagenes/producto.png";
  public codigo: string;
  public precio: number;

  public estado :string = "Definir estado inicial";
  public numeroProducto:number;

  usuario;
  productos;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    private error: AlertProvider,
    private spiner: SpinnerProvider,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner) {
      this.usuario=JSON.parse(localStorage.getItem("usuario"));
      if(this.usuario.tipo == 'cocinero') {
        this.tipo = 'plato';
      }
      else if(this.usuario.tipo == 'bartender') {
        this.tipo = 'bebida';
      }
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
       || !this.tipo || this.foto=="" || !this.precio  )
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
    for(let i=0;i<this.productos.length;i++)
    {
      if(this.productos[i].nombre == this.nombre) {
        esValido=false;
        break;
      }
    }
    if(!esValido) {
      this.error.mostrarErrorLiteral("Ya existe ese producto en el sistema");
      spiner.dismiss();
      return;
    }
    if(esValido) {
      let data= {
        "nombre":this.nombre,
        "descripcion":this.descripcion,
        "foto":this.foto,
        "tipo":this.tipo,
        "precio":this.precio, 
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
    this.barcodeScanner.scan().then((barcodeData) => {
      this.codigo = barcodeData.text;
      let dato=this.codigo.split(",");
      this.nombre=dato[0];
      this.descripcion=dato[1];
      this.precio= +dato[2];
      this.tiempoPromedioElaboracion= +dato[3];
      this.tipo=dato[4]; 
    }, (error) => {
      this.error.mostrarErrorLiteral(error);
    });
  }
}
