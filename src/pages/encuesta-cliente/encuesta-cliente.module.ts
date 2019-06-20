import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncuestaClientePage } from './encuesta-cliente';

@NgModule({
  declarations: [
    EncuestaClientePage,
  ],
  imports: [
    IonicPageModule.forChild(EncuestaClientePage),
  ],
})
export class EncuestaClientePageModule {}
