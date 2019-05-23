import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from "../pages/principal/principal";
import { RegisterPage } from "../pages/register/register";

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';

import { configs } from './globalConfig';
import { AuthProvider } from '../providers/auth/auth';
import { AlertProvider } from '../providers/alert/alert';
import { SpinnerProvider } from '../providers/spinner/spinner';

import { JsonProvider } from '../providers/json/json';

//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(configs.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: FirestoreSettingsToken, useValue: {}},
    AuthProvider,
    AlertProvider,
    SpinnerProvider,
    JsonProvider,
    //Camera
  ]
})
export class AppModule {}
