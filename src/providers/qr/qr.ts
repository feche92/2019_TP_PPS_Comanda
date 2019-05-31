import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from "../auth/auth";
/*
  Generated class for the QrProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrProvider {

  constructor(public http: HttpClient, private auth: AuthProvider) {
  }

  verificarCodigo(codigo){
  	let flag = false;
  	this.auth.getQr().subscribe(lista => {
      
    	for(let item of lista){
        console.log(item);
    		if(item.codigo == codigo){
    			this.rutear(item.identificador);
    			flag = true;
    			break;
    		}
    	}
    });
    if(!flag){
      console.log("El codigo no existe");
    }
  }

  rutear(id){
    switch(id){
      case 'mesa':
        //this.navCtrl.push(QrMesaComponent);
      break;
      case 'ingreso':
      break;
      case 'propina':
      break;
      default:
      break;
    }
  }

  

}
