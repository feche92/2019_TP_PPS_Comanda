import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';
import { SpinnerProvider } from '../../providers/spinner/spinner';
import { EstadisticasSupervisorPage } from '../estadisticas-supervisor/estadisticas-supervisor';

/**
 * Generated class for the EncuestaSupervisorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuesta-supervisor',
  templateUrl: 'encuesta-supervisor.html',
})
export class EncuestaSupervisorPage {
  usuario;
  encUsuarios;
  encUsuarioActual;
  public pregunta1Labels: string[] = ['Pésimo', 'Malo', 'Mediocre', 'Bueno', 'Excelente'];
  public pregunta1Data: number[] = [0, 0, 0, 0, 0];
  public pregunta2Labels: string[] = ['Sí', 'No'];
  public pregunta2Data: number[] = [0, 0];
  public pregunta3Labels: string[] = ['Mala conducta', 'Mala presentación', 'Poca formalidad', 'Buena conducta', 'Buena presentacion', 'Buena formalidad'];
  public pregunta3Data: number[] = [0, 0, 0, 0, 0, 0];
  public pregunta4Labels: string[] = ['Muy bueno', 'Bueno', 'Normal', 'Malo'];
  public pregunta4Data: number[] = [0, 0, 0, 0];
  public pregunta5Labels: string[] = ['Siempre deja propina', 'Suele dejar buena propina', 'Suele dejar poca propina', 'Nunca deja propina'];
  public pregunta5Data: number[] = [0, 0, 0, 0];
  public pregunta6Labels: string[] = ['Todos los dias', 'Bastante frecuente', 'Poco', 'Casi nunca'];
  public pregunta6Data: number[] = [0, 0, 0, 0];
  public comentarios = [];
  public conducta = 3;
  public textoRange = "Mediocre";
  public inconveniente = "0";
  public aspectos = { item1: false, item2: false, item3: false, item4: false, item5: false, item6: false };
  public prescencia = "1";
  public propina = "2";
  public opinion = "";
  public prescenciaCliente = "1";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth:AuthProvider,
    private error: AlertProvider,
    private spiner: SpinnerProvider,
    private modalCtrl: ModalController,) {
    let spinner=this.spiner.getAllPageSpinner();
    spinner.present();
    this.usuario = navParams.get("usuario");
    console.log(this.usuario);
    this.encUsuarios=new Array();
    this.auth.getEncUsuarios().subscribe(lista => {
      this.encUsuarios=lista;
      let bandera=true;
      for(let i=0;i<this.encUsuarios.length;i++)
      {
        if(this.encUsuarios[i].correo == this.usuario.correo) {
          bandera=false;
          this.encUsuarioActual=this.encUsuarios[i];
          break;
        }
      }
      if(bandera) {
        let data = {
          "correo":this.usuario.correo,
          "pregunta1": {
            "pesimo": 0,
            "malo": 0,
            "mediocre": 0,
            "bueno": 0,
            "excelente": 0
          },
          "pregunta2": {
            "si": 0,
            "no": 0
          },
          "pregunta3": {
            "item1": 0,
            "item2": 0,
            "item3": 0,
            "item4": 0,
            "item5": 0,
            "item6": 0
          },
          "pregunta4": {
            "MuyBueno": 0,
            "Bueno": 0,
            "Normal": 0,
            "Malo": 0
          },
          "comentarios": [""],
          "pregunta5": {
            "item1":0,
            "item2":0,
            "item3":0,
            "item4":0
          },
          "pregunta6": {
            "item1":0,
            "item2":0,
            "item3":0,
            "item4":0
          }           
        }
        this.auth.nuevaEncuesta(data).then(res => {
          spinner.dismiss();
        }).catch(error => {
          this.error.mostrarError(error,"error al mostrar la encuesta");
          this.navCtrl.pop();
        })
      }
      else {
        spinner.dismiss();
      }
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncuestaSupervisorPage');
  }

  VolverAtras() {
    this.navCtrl.pop();
  }

  ModificarTextoRange() {

    let arrayAux = ['Pésimo', 'Malo', 'Mediocre', 'Bueno', 'Excelente'];
    this.textoRange = arrayAux[this.conducta - 1];
  }

  HacerEncuesta() {
    let spiner=this.spiner.getAllPageSpinner();
    spiner.present();
    let pregunta1 = [this.encUsuarioActual.pregunta1.pesimo, this.encUsuarioActual.pregunta1.malo, this.encUsuarioActual.pregunta1.mediocre, this.encUsuarioActual.pregunta1.bueno, this.encUsuarioActual.pregunta1.excelente];
    pregunta1[this.conducta - 1]++;
    let pregunta2 = [this.encUsuarioActual.pregunta2.no, this.encUsuarioActual.pregunta2.si];
    pregunta2[this.inconveniente]++;
    this.encUsuarioActual.pregunta1.pesimo=pregunta1[0];
    this.encUsuarioActual.pregunta1.malo=pregunta1[1];
    this.encUsuarioActual.pregunta1.mediocre=pregunta1[2];
    this.encUsuarioActual.pregunta1.bueno=pregunta1[3];
    this.encUsuarioActual.pregunta1.excelente=pregunta1[4];
    this.encUsuarioActual.pregunta2.no = pregunta2[0];
    this.encUsuarioActual.pregunta2.si = pregunta2[1];

    if(this.usuario.tipo != 'cliente') {
      let pregunta3 = [];
    pregunta3[0] = (this.aspectos.item1) ? this.encUsuarioActual.pregunta3.item1 + 1 : this.encUsuarioActual.pregunta3.item1;
    pregunta3[1] = (this.aspectos.item2) ? this.encUsuarioActual.pregunta3.item2 + 1 : this.encUsuarioActual.pregunta3.item2;
    pregunta3[2] = (this.aspectos.item3) ? this.encUsuarioActual.pregunta3.item3 + 1 : this.encUsuarioActual.pregunta3.item3;
    pregunta3[3] = (this.aspectos.item4) ? this.encUsuarioActual.pregunta3.item4 + 1 : this.encUsuarioActual.pregunta3.item4;
    pregunta3[4] = (this.aspectos.item5) ? this.encUsuarioActual.pregunta3.item5 + 1 : this.encUsuarioActual.pregunta3.item5;
    pregunta3[5] = (this.aspectos.item6) ? this.encUsuarioActual.pregunta3.item6 + 1 : this.encUsuarioActual.pregunta3.item6;

    let pregunta4 = [this.encUsuarioActual.pregunta4.MuyBueno, this.encUsuarioActual.pregunta4.Bueno, this.encUsuarioActual.pregunta4.Normal, this.encUsuarioActual.pregunta4.Malo];
    pregunta4[this.prescencia]++;
    this.encUsuarioActual.pregunta3.item1=pregunta3[0];
    this.encUsuarioActual.pregunta3.item2=pregunta3[1];
    this.encUsuarioActual.pregunta3.item3=pregunta3[2]; 
    this.encUsuarioActual.pregunta3.item4=pregunta3[3]; 
    this.encUsuarioActual.pregunta3.item5=pregunta3[4]; 
    this.encUsuarioActual.pregunta3.item6=pregunta3[5];   
    this.encUsuarioActual.pregunta4.MuyBueno= pregunta4[0];
    this.encUsuarioActual.pregunta4.Bueno= pregunta4[1];
    this.encUsuarioActual.pregunta4.Normal= pregunta4[2];
    this.encUsuarioActual.pregunta4.Malo= pregunta4[3];
    }
    else {
      let pregunta5 = [this.encUsuarioActual.pregunta5.item1,this.encUsuarioActual.pregunta5.item2,this.encUsuarioActual.pregunta5.item3,this.encUsuarioActual.pregunta5.item4];
      pregunta5[this.propina]++;
      let pregunta6 = [this.encUsuarioActual.pregunta6.item1,this.encUsuarioActual.pregunta6.item2,this.encUsuarioActual.pregunta6.item3,this.encUsuarioActual.pregunta6.item4];
      pregunta6[this.prescenciaCliente]++;
      this.encUsuarioActual.pregunta5.item1=pregunta5[0];
      this.encUsuarioActual.pregunta5.item2=pregunta5[1];
      this.encUsuarioActual.pregunta5.item3=pregunta5[2]; 
      this.encUsuarioActual.pregunta5.item4=pregunta5[3]; 
      this.encUsuarioActual.pregunta6.item1=pregunta6[0];
      this.encUsuarioActual.pregunta6.item2=pregunta6[1];
      this.encUsuarioActual.pregunta6.item3=pregunta6[2]; 
      this.encUsuarioActual.pregunta6.item4=pregunta6[3]; 
    }
   

    if(this.opinion != "") {
      this.encUsuarioActual.comentarios.push(this.opinion);
    }
    console.log(this.encUsuarioActual);
    

    this.auth.modificarEncuesta(this.encUsuarioActual).then(res => {
      this.error.mostrarMensaje("Se ha cargado correctamente la encuesta.");
      spiner.dismiss();
      this.modalCtrl.create(EstadisticasSupervisorPage, { usuario: this.usuario }).present();
    }).catch(error => {
      this.error.mostrarError(error,"arror al guardar la encuesta");
      spiner.dismiss();
    });

  }

}
