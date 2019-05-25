import { NgModule } from '@angular/core';
import { AltaSupervisorComponent } from './alta-supervisor/alta-supervisor';
import { SplashComponent } from './splash/splash';
@NgModule({
	declarations: [AltaSupervisorComponent,
    SplashComponent],
	imports: [],
	exports: [AltaSupervisorComponent,
    SplashComponent]
})
export class ComponentsModule {}
