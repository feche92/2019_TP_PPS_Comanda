import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from "../../providers/auth/auth";
//import { AlertProvider } from "../../providers/alert/alert";
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
  myChart: Chart;
  tipo;
  public doughnutChartType: string = 'doughnut';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private auth: AuthProvider,
    //private error: AlertProvider,
    private spinner: SpinnerProvider,
    private alertCtrl : AlertController) {
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
        if(this.usuario.tipo != 'cliente') {
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
        this.GenerarCharts();
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

  GenerarCharts() {
    var ctx1 = (<any>document.getElementById('canvas-chart1')).getContext('2d');
    this.myChart = new Chart(ctx1, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: this.pregunta1Labels,
        datasets: [{
          label:'',
          data: this.pregunta1Data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderWidth: 1
        }]
      },
      options:{
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
            
          }],
        },
        legend: {
          display: false,
        },
        tooltips : {
          enabled: false      
        },
        elements: {
          rectangle: {
            borderSkipped: 'left',
          }
        },
        //onClick: newLegendClickHandler
      }
  });
  var ctx2 = (<any>document.getElementById('canvas-chart2')).getContext('2d');
  var newLegendClickHandler = function (e, legendItem) {
    console.log(legendItem[0]._options.backgroundColor);
    if(legendItem[0]._options.backgroundColor == 'rgba(255, 159, 64, 0.2)') {
      let message = "<ul>";
      for(let i=0;i<this.comentarios.length;i++)
      {
        message += ("<li>" + this.comentarios[i] + "</li>");
      }
      message += "</ul>";
      let alert = this.alertCtrl.create({
      title: 'Inconvenientes que tuvo Ivagaza Federico',
      buttons: ['Cerrar'],
      message: message,//`<img src="urlFoto"></img>`,
      cssClass: "foto-alert"
      });
      alert.present();
    }

  }.bind(this);
  this.myChart = new Chart(ctx2, { 
    type: 'pie',
    data: {
      labels: this.pregunta2Labels,
      datasets: [{
        label: '',
        data: this.pregunta2Data,
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        hoverBackgroundColor: [
          '#FFCE56',
          '#FF6384',
        ]
      }]
    },
    options: {
      onClick: newLegendClickHandler
    }
  });
  if(this.usuario.tipo != 'cliente') {
    var ctx3 = (<any>document.getElementById('canvas-chart3')).getContext('2d');
    this.myChart = new Chart(ctx3, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: this.pregunta3Labels,
        datasets: [{
          label:'',
          data: this.pregunta3Data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderWidth: 1
        }]
      },
      options:{
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
            
          }],
        },
        legend: {
          display: false,
        },
        tooltips : {
          enabled: false      
        },
        elements: {
          rectangle: {
            borderSkipped: 'left',
          }
        },
        //onClick: newLegendClickHandler
      }
    });
    var ctx4 = (<any>document.getElementById('canvas-chart4')).getContext('2d');
    this.myChart = new Chart(ctx4, { 
      type: 'doughnut',
      data: {
        labels: this.pregunta4Labels,
        datasets: [{
          label: '',
          data: this.pregunta4Data,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ]
        }]
      }
    });
  }
  else {
    var ctx5 = (<any>document.getElementById('canvas-chart5')).getContext('2d');
    this.myChart = new Chart(ctx5, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: this.pregunta5Labels,
        datasets: [{
          label:'',
          data: this.pregunta5Data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderWidth: 1
        }]
      },
      options:{
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
            
          }],
        },
        legend: {
          display: false,
        },
        tooltips : {
          enabled: false      
        },
        elements: {
          rectangle: {
            borderSkipped: 'left',
          }
        },
      }
    });
    var ctx6 = (<any>document.getElementById('canvas-chart6')).getContext('2d');
    this.myChart = new Chart(ctx6, { 
      type: 'doughnut',
      data: {
        labels: this.pregunta6Labels,
        datasets: [{
          label: '',
          data: this.pregunta6Data,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ]
        }]
      }
    });
  }
  

  }

}
