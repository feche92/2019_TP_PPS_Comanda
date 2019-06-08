import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
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
}

export interface producto {
  tipo:string,
  descripcion:string,
  nombre:string,
  lectroQR:string,
  foto:string,
  tiempoEstimadoElaboracion:string;
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

//-----USUARIOS-----
  updateUsuario(data) {
    return this.db.collection('usuarios').doc(data.id).update(data);
  }

  guardarUsuario(data) {
    return this.db.collection('usuarios').add(data);
  }

 

  crearUsuario(correo,pass) {
    return this.auth.auth.createUserWithEmailAndPassword(correo,pass);
  }
  //-----CLIENTES-----
  guardarCliente(data) {
    return this.db.collection('clientes').add(data);
  }

  //-----MESA-----
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
  //-----PRODUCTOS------
  getListaProdcutos(tipo:string) {
    return this.db.collection(tipo).snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as producto;
        return data;
      })
    }));
  }

  guardarProducto(data) {
    return this.db.collection('productos').add(data);
  }

}
