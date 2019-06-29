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
import { QrEntradaComponent } from "./qr-entrada/qr-entrada";
import { ListadoClientesComponent } from './listado-clientes/listado-clientes';
import { JuegoPostreComponent } from './juego-postre/juego-postre';


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
    QrEntradaComponent,
    ListadoClientesComponent,
    JuegoPostreComponent,
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
    QrEntradaComponent,
    ListadoClientesComponent,
    JuegoPostreComponent,
    ]
})
export class ComponentsModule {}
