import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoReservaPage } from './listado-reserva';

@NgModule({
  declarations: [
    ListadoReservaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoReservaPage),
  ],
})
export class ListadoReservaPageModule {}
