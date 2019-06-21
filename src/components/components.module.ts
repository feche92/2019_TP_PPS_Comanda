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
import { EntradaLocalComponent } from './entrada-local/entrada-local';
import { QrEntradaLocalComponent } from './qr-entrada-local/qr-entrada-local';
import { QrEntradaComponent } from './qr-entrada/qr-entrada';
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
    EntradaLocalComponent,
    QrEntradaLocalComponent,
    QrEntradaComponent,
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
    EntradaLocalComponent,
    QrEntradaLocalComponent,
    QrEntradaComponent,
    ]
})
export class ComponentsModule {}
