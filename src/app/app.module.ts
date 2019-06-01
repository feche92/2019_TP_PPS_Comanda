import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from "../pages/principal/principal";
import { SpinnerPage } from "../pages/spinner/spinner";
import { RegisterPage } from "../pages/register/register";
import { AltaempleadoPage } from "../pages/altaempleado/altaempleado";
import { AltaDeMesaPage } from "../pages/alta-de-mesa/alta-de-mesa";
import { ListadoSupervisorPage } from "../pages/listado-supervisor/listado-supervisor";
import { EncuestaSupervisorPage } from "../pages/encuesta-supervisor/encuesta-supervisor";
import { ReservaPage } from "../pages/reserva/reserva";

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Firebase } from '@ionic-native/firebase';

import { configs } from './globalConfig';
import { AuthProvider } from '../providers/auth/auth';
import { AlertProvider } from '../providers/alert/alert';
import { SpinnerProvider } from '../providers/spinner/spinner';

import { JsonProvider } from '../providers/json/json';
import { AltaSupervisorComponent } from "../components/alta-supervisor/alta-supervisor";
import { SplashComponent } from "../components/splash/splash";
import { AltaClienteComponent } from "../components/alta-cliente/alta-cliente";
import { FcmProvider } from '../providers/fcm/fcm';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    RegisterPage,
    AltaempleadoPage,
    AltaDeMesaPage,
    SpinnerPage,
    AltaSupervisorComponent,
    SplashComponent,
    ListadoSupervisorPage,
    AltaClienteComponent,
    EncuestaSupervisorPage,
    ReservaPage
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
    RegisterPage,
    AltaempleadoPage,
    AltaDeMesaPage,
    SpinnerPage,
    AltaSupervisorComponent,
    ListadoSupervisorPage,
    AltaSupervisorComponent,
    AltaClienteComponent,
    EncuestaSupervisorPage,
    ReservaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: FirestoreSettingsToken, useValue: {}},
    Firebase,
    Camera,
    BarcodeScanner,
    AuthProvider,
    AlertProvider,
    SpinnerProvider,
    JsonProvider,
    FcmProvider,
  ]
})
export class AppModule {}
