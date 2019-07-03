import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthProvider } from "../../providers/auth/auth";
import { PrincipalPage } from '../../pages/principal/principal';

/**
 * Generated class for the GraficoEncuestaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-grafico-encuesta-cliente',
  templateUrl: 'grafico-encuesta-cliente.html',
})
export class GraficoEncuestaClientePage {
  doughnutChart: any;
  listaEncuestasClientes;
  spinner;

  cantMujer=0;
  cantHombre=0;
  cantRecomendar=0;
  cantNoRecomendar=0;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  constructor( private auth: AuthProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.listaEncuestasClientes=new Array();

   

    //traigo los usuario para ver cuales son clientes
    this.auth.getEncuestasClientes().subscribe(lista => {
      this.listaEncuestasClientes=lista;  
      console.log(this.listaEncuestasClientes);

   });

   for(let i=0;i<this.listaEncuestasClientes.length;i++)
   {  
      if (this.listaEncuestasClientes[i].respuesta1=="mujer"){
        this.cantMujer++;
        console.log(this.cantMujer);
      }
      else {
        this.cantHombre=this.cantHombre+1;
      }
      if (this.listaEncuestasClientes[i].respuesta4=="si"){
        this.cantRecomendar=this.cantRecomendar+1;
      }
      else {
        this.cantNoRecomendar=this.cantNoRecomendar+1;
      }

   }
   console.log("mujer");
   console.log(this.cantMujer);
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

        type: 'doughnut',
        data: {
            labels: ["Mujer", "Hombre", "Recomienda", "No Recomienda"],
            datasets: [{
                label: '# of Votes',
                data: [2,7,6,3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'                   
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384"                   
                ]
            }]
        }

    });     
    

}  
VolverAtras() {
  this.navCtrl.setRoot(PrincipalPage);
}

  

  
}
