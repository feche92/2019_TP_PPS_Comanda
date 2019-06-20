import { NgModule } from '@angular/core';
import { AltaSupervisorComponent } from './alta-supervisor/alta-supervisor';
import { SplashComponent } from './splash/splash';
import { AltaClienteComponent } from './alta-cliente/alta-cliente';
import { QrMesaComponent } from './qr-mesa/qr-mesa';
import { EncuestaEmpleadoComponent } from './encuesta-empleado/encuesta-empleado';
import { ListaClienteEstadoComponent } from './lista-cliente-estado/lista-cliente-estado';
import { HomeClienteComponent } from './home-cliente/home-cliente';
import { PedidosPendientesComponent } from './pedidos-pendientes/pedidos-pendientes';

import { AltaProductoComponent } from './alta-producto/alta-producto';
@NgModule({
	declarations: [AltaSupervisorComponent,
    SplashComponent,
    AltaClienteComponent,
    QrMesaComponent,
    EncuestaEmpleadoComponent,
    ListaClienteEstadoComponent,
    HomeClienteComponent,
    PedidosPendientesComponent,
    AltaProductoComponent,
    ],
	imports: [],
	exports: [AltaSupervisorComponent,
    SplashComponent,
    AltaClienteComponent,
    QrMesaComponent,
    EncuestaEmpleadoComponent,
    ListaClienteEstadoComponent,
    HomeClienteComponent,
    PedidosPendientesComponent,
    AltaProductoComponent,
    ]
})
export class ComponentsModule {}
