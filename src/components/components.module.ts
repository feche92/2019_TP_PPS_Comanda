import { NgModule } from '@angular/core';
import { AltaSupervisorComponent } from './alta-supervisor/alta-supervisor';
import { SplashComponent } from './splash/splash';
import { AltaClienteComponent } from './alta-cliente/alta-cliente';
import { AltaProductoComponent } from './alta-producto/alta-producto';
@NgModule({
	declarations: [AltaSupervisorComponent,
    SplashComponent,
    AltaClienteComponent,
    AltaProductoComponent],
	imports: [],
	exports: [AltaSupervisorComponent,
    SplashComponent,
    AltaClienteComponent,
    AltaProductoComponent]
})
export class ComponentsModule {}
