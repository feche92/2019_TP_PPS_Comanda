import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoEncuestasPage } from './listado-encuestas';

@NgModule({
  declarations: [
    ListadoEncuestasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoEncuestasPage),
  ],
})
export class ListadoEncuestasPageModule {}
