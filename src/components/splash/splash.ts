import { Component } from '@angular/core';

/**
 * Generated class for the SplashComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'splash',
  templateUrl: 'splash.html'
})
export class SplashComponent {

  constructor() {
    console.log('Hello SplashComponent Component');
    this.reproducir('servicio-inicio');
  }

  reproducir(nom_audio) {
    const audio = new Audio('../../assets/sounds/' + nom_audio + '.mp3');
    audio.play();
  }

  //http://soundbible.com

}
