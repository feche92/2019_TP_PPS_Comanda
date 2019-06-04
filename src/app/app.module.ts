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
import { RegisterPage } from "../pages/register/register";
import { AltaempleadoPage } from "../pages/altaempleado/altaempleado";
import { AltaDeMesaPage } from "../pages/alta-de-mesa/alta-de-mesa";

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';

import { configs } from './globalConfig';
import { AuthProvider } from '../providers/auth/auth';
import { AlertProvider } from '../providers/alert/alert';
import { SpinnerProvider } from '../providers/spinner/spinner';

import { JsonProvider } from '../providers/json/json';
import { AltaSupervisorComponent } from "../components/alta-supervisor/alta-supervisor";
import { SplashComponent } from "../components/splash/splash";
import { AltaClienteComponent } from "../components/alta-cliente/alta-cliente";
//import { QrProvider } from '../providers/qr/qr';
import { QrMesaComponent } from "../components/qr-mesa/qr-mesa";
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { EncuestaEmpleadoComponent } from "../components/encuesta-empleado/encuesta-empleado";
import { ListaClienteEstadoComponent } from "../components/lista-cliente-estado/lista-cliente-estado";
import { HomeClienteComponent } from "../components/home-cliente/home-cliente";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    RegisterPage,
    AltaempleadoPage,
    AltaDeMesaPage,
    AltaSupervisorComponent,
    SplashComponent,
    AltaClienteComponent,
    QrMesaComponent,
    EncuestaEmpleadoComponent,
    ListaClienteEstadoComponent,
    HomeClienteComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(configs.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    RegisterPage,
    AltaempleadoPage,
    AltaDeMesaPage,
    AltaSupervisorComponent,
    AltaClienteComponent,
    QrMesaComponent,
    EncuestaEmpleadoComponent,
    ListaClienteEstadoComponent,
    HomeClienteComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: FirestoreSettingsToken, useValue: {}},
    Camera,
    BarcodeScanner,
    AuthProvider,
    AlertProvider,
    SpinnerProvider,
    JsonProvider,
    //QrProvider,
  ]
})
export class AppModule {}
