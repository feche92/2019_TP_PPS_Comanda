import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JuegosPage } from './juegos';

@NgModule({
  declarations: [
    JuegosPage,
  ],
  imports: [
    IonicPageModule.forChild(JuegosPage),
  ],
})
export class JuegosPageModule {}
