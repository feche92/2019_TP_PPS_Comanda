import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
import { AlertProvider } from "../../providers/alert/alert";
import { SpinnerProvider } from "../../providers/spinner/spinner";
import { Chart } from 'chart.js'



@IonicPage()
@Component({
  selector: 'page-estadisticas-supervisor',
  templateUrl: 'estadisticas-supervisor.html',
})
export class EstadisticasSupervisorPage {
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
  usuario;
  encUsuarios;
  encUsuarioActual;
  public doughnutChartType: string = 'doughnut';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    private spinner: SpinnerProvider) {
      let spiner=this.spinner.getAllPageSpinner();
      spiner.present();
      this.usuario = navParams.get("usuario");
      this.encUsuarios=new Array();
      this.auth.getEncUsuarios().subscribe(lista => {
        this.encUsuarios=lista;
        for(let i=0;i<this.encUsuarios.length;i++)
        {
          if(this.encUsuarios[i].correo == this.usuario.correo) {
            this.encUsuarioActual=this.encUsuarios[i];
            break;
          }
        }
        this.pregunta1Data = [
          this.encUsuarioActual.pregunta1.pesimo,
          this.encUsuarioActual.pregunta1.malo,
          this.encUsuarioActual.pregunta1.mediocre,
          this.encUsuarioActual.pregunta1.bueno,
          this.encUsuarioActual.pregunta1.excelente,
        ];
        this.pregunta2Data = [
          this.encUsuarioActual.pregunta2.si,
          this.encUsuarioActual.pregunta2.no
        ];
        this.comentarios = this.encUsuarioActual.comentarios;
        if(this.usuario != 'cliente') {
          this.pregunta3Data = [
            this.encUsuarioActual.pregunta3.item1,
            this.encUsuarioActual.pregunta3.item2,
            this.encUsuarioActual.pregunta3.item3,
            this.encUsuarioActual.pregunta3.item4,
            this.encUsuarioActual.pregunta3.item5,
            this.encUsuarioActual.pregunta3.item6
          ];
          this.pregunta4Data = [
            this.encUsuarioActual.pregunta4.MuyBueno,
            this.encUsuarioActual.pregunta4.Bueno,
            this.encUsuarioActual.pregunta4.Normal,
            this.encUsuarioActual.pregunta4.Malo
          ];
        }
        else {
          this.pregunta5Data = [
            this.encUsuarioActual.pregunta5.item1,
            this.encUsuarioActual.pregunta5.item2,
            this.encUsuarioActual.pregunta5.item3,
            this.encUsuarioActual.pregunta5.item4
          ];
          this.pregunta6Data = [
            this.encUsuarioActual.pregunta6.item1,
            this.encUsuarioActual.pregunta6.item2,
            this.encUsuarioActual.pregunta6.item3,
            this.encUsuarioActual.pregunta6.item4
          ];
        }
        spiner.dismiss();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstadisticasSupervisorPage');
  }

  VolverAtras() {
    this.navCtrl.pop();
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

}
