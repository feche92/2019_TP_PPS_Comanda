import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { EncuestaSupervisorPageModule } from '../../pages/encuesta-supervisor/encuesta-supervisor.module';
//import 'rxjs/add/operator/map';

export interface usuario {
  correo:string,
  foto:string,
  tipo:string,
  logueado:boolean,
  estado:string,
  DNI:string,
  CUIL:string,
  nombre:string,
  apellido:string,
  id:string
}

export interface mesa {
  id:string,
  numero:string,
  cantidadComensales:string,
  tipo:string,
  estado:string,
  foto:string,
  codigo:string
}

export interface encUsuario {
  id:string,
  correo:string,
  pregunta1: {
    bueno:number,
    excelente:number,
    malo:number,
    mediocre:number,
    pesimo:number
  },
  pregunta2: {
    no:number,
    si:number
  },
  pregunta3: {
    item1:number,
    item2:number,
    item3:number,
    item4:number,
    item5:number,
    item6:number
  },
  pregunta4: {
    MuyBueno:number,
    Bueno:number,
    Normal:number,
    Malo:number
  },
  comentarios:Array<any>,
  pregunta5: {
    item1:number,
    item2:number,
    item3:number,
    item4:number
  },
  pregunta6: {
    item1:number,
    item2:number,
    item3:number,
    item4:number
  }
}

export interface reserva {
  correo:string,
  nombre:string,
  apellido:string,
  horario:string,
  foto:string,
  cantPersonas:string,
  mesa:string,
  estado:string,
  id:string
}

export interface producto {
  descripcion:string,
  foto:string,
  lectorQR:string,
  nombre:string,
  tiempoPromedioElaboracion:string,
  tipo:string,
  id:string,
  precio:number
}

export interface pedido {
  correo:string,
  nombreCliente:string,
  apellidoCliente:string,
  estado:string,
  fecha:string,
  numero:string,
  tipo:string,
  productos:Array<any>,
  montoTotal:string,
  id:string,
}

@Injectable()
export class AuthProvider {

  constructor(private auth: AngularFireAuth, private db:AngularFirestore) {

  }

  login (email:string,pass:string) {
    return this.auth.auth.signInWithEmailAndPassword(email,pass);
  }

  logOut(){
    this.auth.auth.signOut();
  }

  getLista(tipo:string) {
    return this.db.collection(tipo).snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as usuario;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  updateUsuario(data) {
    return this.db.collection('usuarios').doc(data.id).update(data);
  }

  guardarUsuario(data) {
    return this.db.collection('usuarios').add(data);
  }

  guardarCliente(data) {
    return this.db.collection('clientes').add(data);
  }

  crearUsuario(correo,pass) {
    return this.auth.auth.createUserWithEmailAndPassword(correo,pass);
  }

  guardarMesa(data) {
    return this.db.collection('mesas').add(data);
  }

  getMesas() {
    return this.db.collection('mesas').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as mesa;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  nuevaEncuesta(data) {
    return this.db.collection('encuestasUsuarios').add(data);
  }

  modificarEncuesta(data) {
    return this.db.collection('encuestasUsuarios').doc(data.id).update(data);
  }

  getEncUsuarios() {
    return this.db.collection('encuestasUsuarios').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as encUsuario;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  nuevaReserva(data) {
    return this.db.collection('reservas').add(data);
  }

  confirmarReserva(data) {
    return this.db.collection('reservas').doc(data.id).update(data);
  }

  getReservas() {
    return this.db.collection('reservas').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as reserva;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  getProductos() {
    return this.db.collection('productos').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as producto;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  nuevoPedido(data) {
    return this.db.collection('pedidos').add(data);
  }

  getPedidos() {
    return this.db.collection('pedidos').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as pedido;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
  }

  modificarPedido(data) {
    return this.db.collection('pedidos').doc(data.id).update(data);
  }

}
