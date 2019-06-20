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
import { ListadoReservaPage } from "../pages/listado-reserva/listado-reserva";
import { EstadisticasSupervisorPage } from "../pages/estadisticas-supervisor/estadisticas-supervisor";
import { PedirPlatosPage } from "../pages/pedir-platos/pedir-platos";
import { ListadoMesasPage } from "../pages/listado-mesas/listado-mesas";
import { AltaDeProductoPage } from "../pages/alta-de-producto/alta-de-producto";
import { JuegosPage } from "../pages/juegos/juegos";
import { JuegoDescuentoPage } from "../pages/juego-descuento/juego-descuento";
import { ConfirmarPedidoPage } from "../pages/confirmar-pedido/confirmar-pedido";
import { PagarPage } from "../pages/pagar/pagar";

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';
//import { Firebase } from '@ionic-native/firebase';

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
import { FcmProvider } from '../providers/fcm/fcm';
import { AltaProductoComponent } from "../components/alta-producto/alta-producto";
import { PedidosPendientesComponent } from '../components/pedidos-pendientes/pedidos-pendientes';
import { EmailComposer } from '@ionic-native/email-composer';

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
    AltaClienteComponent,
    QrMesaComponent,
    EncuestaEmpleadoComponent,
    ListaClienteEstadoComponent,
    HomeClienteComponent,
    ListadoSupervisorPage,
    AltaClienteComponent,
    EncuestaSupervisorPage,
    ReservaPage,
    ListadoReservaPage,
    EstadisticasSupervisorPage,
    PedirPlatosPage,
    ListadoMesasPage,
    AltaDeProductoPage,    
    AltaSupervisorComponent,
    SplashComponent,
    AltaClienteComponent,
    AltaProductoComponent,
    PedidosPendientesComponent,
    JuegosPage,
    JuegoDescuentoPage,
    ConfirmarPedidoPage,
    PagarPage
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
    SpinnerPage,
    AltaSupervisorComponent,
    AltaClienteComponent,
    QrMesaComponent,
    EncuestaEmpleadoComponent,
    ListaClienteEstadoComponent,
    HomeClienteComponent,
    ListadoSupervisorPage,
    AltaSupervisorComponent,
    AltaClienteComponent,
    EncuestaSupervisorPage,
    ReservaPage,
    ListadoReservaPage,
    EstadisticasSupervisorPage,
    PedirPlatosPage,
    ListadoMesasPage,
    AltaDeProductoPage,
    AltaProductoComponent,
    PedidosPendientesComponent,
    JuegosPage,
    JuegoDescuentoPage,
    ConfirmarPedidoPage,
    PagarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: FirestoreSettingsToken, useValue: {}},
    //Firebase,
    Camera,
    BarcodeScanner,
    AuthProvider,
    AlertProvider,
    SpinnerProvider,
    JsonProvider,
    //QrProvider,
    FcmProvider,
    EmailComposer,
  ]
})
export class AppModule {}
