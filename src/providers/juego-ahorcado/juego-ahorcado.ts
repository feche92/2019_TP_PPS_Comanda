import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JuegoAhorcadoProvider {

  array_palabras = [
    {"palabra": "animal"},
    {"palabra": "miniatura"},
    {"palabra": "arbol"},
    {"palabra": "residuo"},
    {"palabra": "especialidad"},
    {"palabra": "plato"},
    {"palabra": "fuerza"},
    {"palabra": "lapiz"},
    {"palabra": "botella"},
    {"palabra": "lampara"}
	]
	palabra: string = "";
	palabra_incompleta: string; //hidden_letter
	contador: number = 0; //numero de intentos que quedan
	fallos: number = 0;
	gano: boolean;
  
  	constructor(public http: HttpClient) {
  	}


	seleccionarPalabra(){
		let cantidad = this.array_palabras.length - 1;
	    let indice = Math.floor((Math.random()*this.array_palabras.length)); 
	    this.palabra = this.array_palabras[indice].palabra.toUpperCase();
	    this.contador = 6;

	    this.generarGuiones();
	    //console.log(this.palabra);
	}

	generarGuiones() {
		let num = this.palabra.length;
		this.palabra_incompleta = "";
	    for (var i = 0; i < num; i++) {
	      this.palabra_incompleta += "_";
	    }
	    //console.log(this.palabra_incompleta);
	}

	comprobarLetra(letter) {	
	    if(this.palabra.indexOf(letter) != -1) {
	        for(var i=0; i<this.palabra.length; i++) {
	            if(this.palabra[i] == letter) 
	            	//this.palabra_incompleta[i] = letter;
	            	this.palabra_incompleta = this.replaceAt(this.palabra_incompleta, i, letter);
	            	//retorno = true;
	        }		
	    }
	    else {
	        this.contador--;
	        this.fallos++;
	        //retorno = false;
	    }

	    this.checkWord();
	    return this.contador;
	}

	replaceAt(string, index, replace) {
	  return string.substring(0, index) + replace + string.substring(index + 1);
	}




	checkWord() {
	    if (this.contador == 0) {
	        //perdiste
	        this.gano = false;
	    }
	    else if (this.palabra_incompleta.indexOf("_") == -1 ) {
	    	//ganaste
	    	this.gano = true;
	    }

	}


	iniciarJuego(){
		this.seleccionarPalabra();
		//this.generarGuiones();
		this.gano = false;
		this.fallos = 0;
		this.contador = 6;
	}


}
