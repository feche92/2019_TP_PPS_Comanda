import { NgModule } from '@angular/core';
import { AltaSupervisorComponent } from './alta-supervisor/alta-supervisor';
import { SplashComponent } from './splash/splash';
import { AltaClienteComponent } from './alta-cliente/alta-cliente';
import { QrMesaComponent } from './qr-mesa/qr-mesa';
import { EncuestaEmpleadoComponent } from './encuesta-empleado/encuesta-empleado';
@NgModule({
	declarations: [AltaSupervisorComponent,
    SplashComponent,
    AltaClienteComponent,
    QrMesaComponent,
    EncuestaEmpleadoComponent],
	imports: [],
	exports: [AltaSupervisorComponent,
    SplashComponent,
    AltaClienteComponent,
    QrMesaComponent,
    EncuestaEmpleadoComponent]
})
export class ComponentsModule {}
