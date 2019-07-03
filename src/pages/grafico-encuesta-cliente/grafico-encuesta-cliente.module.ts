import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GraficoEncuestaClientePage } from './grafico-encuesta-cliente';

@NgModule({
  declarations: [
    GraficoEncuestaClientePage,
  ],
  imports: [
    IonicPageModule.forChild(GraficoEncuestaClientePage),
  ],
})
export class GraficoEncuestaClientePageModule {}
