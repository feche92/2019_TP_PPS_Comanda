import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoMesasPage } from './listado-mesas';

@NgModule({
  declarations: [
    ListadoMesasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoMesasPage),
  ],
})
export class ListadoMesasPageModule {}
