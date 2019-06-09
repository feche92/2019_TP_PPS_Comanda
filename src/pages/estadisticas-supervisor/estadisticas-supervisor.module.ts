import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstadisticasSupervisorPage } from './estadisticas-supervisor';

@NgModule({
  declarations: [
    EstadisticasSupervisorPage,
  ],
  imports: [
    IonicPageModule.forChild(EstadisticasSupervisorPage),
  ],
})
export class EstadisticasSupervisorPageModule {}
