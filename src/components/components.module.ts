import { NgModule } from '@angular/core';
import { AltaSupervisorComponent } from './alta-supervisor/alta-supervisor';
import { SplashComponent } from './splash/splash';
import { AltaClienteComponent } from './alta-cliente/alta-cliente';
import { QrMesaComponent } from './qr-mesa/qr-mesa';
import { EncuestaEmpleadoComponent } from './encuesta-empleado/encuesta-empleado';
import { ListaClienteEstadoComponent } from './lista-cliente-estado/lista-cliente-estado';
import { HomeClienteComponent } from './home-cliente/home-cliente';

@NgModule({
	declarations: [AltaSupervisorComponent,
    SplashComponent,
    AltaClienteComponent,
    QrMesaComponent,
    EncuestaEmpleadoComponent,
    ListaClienteEstadoComponent,
    HomeClienteComponent
    ],
	imports: [],
	exports: [AltaSupervisorComponent,
    SplashComponent,
    AltaClienteComponent,
    QrMesaComponent,
    EncuestaEmpleadoComponent,
    ListaClienteEstadoComponent,
    HomeClienteComponent
    ]
})
export class ComponentsModule {}
