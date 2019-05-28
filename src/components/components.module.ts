import { NgModule } from '@angular/core';
import { AltaSupervisorComponent } from './alta-supervisor/alta-supervisor';
import { SplashComponent } from './splash/splash';
import { AltaClienteComponent } from './alta-cliente/alta-cliente';
@NgModule({
	declarations: [AltaSupervisorComponent,
    SplashComponent,
    AltaClienteComponent],
	imports: [],
	exports: [AltaSupervisorComponent,
    SplashComponent,
    AltaClienteComponent]
})
export class ComponentsModule {}
