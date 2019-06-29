import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the JsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JsonProvider {

  constructor(public http: HttpClient) {
    console.log('Hello JsonProvider Provider');
  }

  toJson(obj){
  	if(obj != null){
  	  	var json = JSON.parse(obj);
  	}
  	return json;
  }


  /*
  file: ruta de archivo
  */
  fromJson(file) {
	 let respuesta;
	 this.loadJSON(file, function(response) {
	    //let actual_JSON = JSON.parse(response);
	    respuesta = response;
	 });
	 return respuesta;
  }


  loadJSON(file, callback) {   

    var obj = new XMLHttpRequest();
    obj.overrideMimeType("application/json");
    obj.open('GET', file, true); 
    obj.onreadystatechange = function () {
          if (obj.readyState == 4 && obj.status == 200) {
            callback(obj.responseText);
          }
    };
    obj.send(null);  
 }

}
