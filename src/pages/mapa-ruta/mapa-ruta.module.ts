import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapaRutaPage } from './mapa-ruta';

@NgModule({
  declarations: [
    MapaRutaPage,
  ],
  imports: [
    IonicPageModule.forChild(MapaRutaPage),
  ],
})
export class MapaRutaPageModule {}
