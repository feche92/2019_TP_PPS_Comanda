import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertProvider } from '../../providers/alert/alert';
import { SpinnerProvider } from '../../providers/spinner/spinner';

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
  public pregunta3Labels: string[] = ['Mala conducta', 'Mala presentación', 'Poca formalidad'];
  public pregunta3Data: number[] = [0, 0, 0];
  public pregunta4Labels: string[] = ['Sí', 'No'];
  public pregunta4Data: number[] = [0, 0];
  public conducta = 3;
  public textoRange = "Mediocre";
  public inconveniente = "0";
  public aspectos = { item1: false, item2: false, item3: false };
  public prescencia = "1";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth:AuthProvider,
    private error: AlertProvider,
    private spiner: SpinnerProvider) {
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
            "item3": 0
          },
          "pregunta4": {
            "si": 0,
            "no": 0
          },
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

    let pregunta3 = [];
    pregunta3[0] = (this.aspectos.item1) ? this.encUsuarioActual.pregunta3.item1 + 1 : this.encUsuarioActual.pregunta3.item1;
    pregunta3[1] = (this.aspectos.item2) ? this.encUsuarioActual.pregunta3.item2 + 1 : this.encUsuarioActual.pregunta3.item2;
    pregunta3[2] = (this.aspectos.item3) ? this.encUsuarioActual.pregunta3.item3 + 1 : this.encUsuarioActual.pregunta3.item3;

    let pregunta4 = [this.encUsuarioActual.pregunta4.no, this.encUsuarioActual.pregunta4.si];
    pregunta4[this.prescencia]++;

    this.encUsuarioActual.pregunta1.pesimo=pregunta1[0];
    this.encUsuarioActual.pregunta1.malo=pregunta1[1];
    this.encUsuarioActual.pregunta1.mediocre=pregunta1[2];
    this.encUsuarioActual.pregunta1.bueno=pregunta1[3];
    this.encUsuarioActual.pregunta1.excelente=pregunta1[4];
    this.encUsuarioActual.pregunta2.no = pregunta2[0];
    this.encUsuarioActual.pregunta2.si = pregunta2[1];
    this.encUsuarioActual.pregunta3.item1=pregunta3[0];
    this.encUsuarioActual.pregunta3.item2=pregunta3[1];
    this.encUsuarioActual.pregunta3.item3=pregunta3[2];   
    this.encUsuarioActual.pregunta4.si= pregunta4[1];
    this.encUsuarioActual.pregunta4.no= pregunta4[0];

    console.log(this.encUsuarioActual);

    this.auth.modificarEncuesta(this.encUsuarioActual).then(res => {
      this.error.mostrarMensaje("Se ha cargado correctamente la encuesta.");
      spiner.dismiss();
    }).catch(error => {
      this.error.mostrarError(error,"arror al guardar la encuesta");
      spiner.dismiss();
    });
  }

}
