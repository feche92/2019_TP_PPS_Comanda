import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AltaDeProductoPage } from './alta-de-producto';

@NgModule({
  declarations: [
    AltaDeProductoPage,
  ],
  imports: [
    IonicPageModule.forChild(AltaDeProductoPage),
  ],
})
export class AltaDeProductoPageModule {}
