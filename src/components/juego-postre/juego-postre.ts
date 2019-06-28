import { Component } from '@angular/core';
import { JuegoAhorcadoProvider } from '../../providers/juego-ahorcado/juego-ahorcado';

@Component({
  selector: 'juego-postre',
  templateUrl: 'juego-postre.html'
})
export class JuegoPostreComponent {

  //nuevoJuego: JuegoAhorcado;
  gano: boolean = false;
  perdio: boolean = false;
  letras = [];
  palabra_incompleta = "";
  contadorTurnos: number = 0;
  contadorFallos: number = 0;
  puntaje: number = 0;

  constructor(public nuevoJuego: JuegoAhorcadoProvider) {
  	//this.nuevoJuego = new JuegoAhorcado();
  	this.generaABC();
  	this.iniciar();
  	//console.log(this.palabra_incompleta);

  	//let user = JSON.parse(localStorage.getItem('usuarioActual'));
  }

  ngOnInit() {
  }
	
  generaABC() {
  	  let a = "a";
  	  let z = "z";
	  var i = a.charCodeAt(0), j = z.charCodeAt(0);
	  let letra = "";
	  let n = 0;
	  for( ; i<=j; i++) {
	    letra = String.fromCharCode(i).toUpperCase();
	    this.letras[n] = letra;
	    if(i==110) {
	      n++;
	      this.letras[n] = "Ñ";
	    }
	    n++;
	  }
	  //console.log(this.letras);
	}

	iniciar(){
		this.nuevoJuego.iniciarJuego();
		this.palabra_incompleta = this.nuevoJuego.palabra_incompleta;
		this.gano = false;
		this.perdio = false;
		this.letras = [];
		this.contadorTurnos = this.nuevoJuego.contador;
		this.contadorFallos = 0;
		this.generaABC();
		this.quitarClases();
	}

	verificar(letra, event){
		//aplico clase 
		//event.target.classList.add("marcado")
		if(this.gano != true && this.perdio != true && !event.target.classList.contains("marcado") && !event.target.classList.contains("marcado-bien")){
			let retorno = this.nuevoJuego.comprobarLetra(letra);
			this.palabra_incompleta = this.nuevoJuego.palabra_incompleta;
			if(retorno == 0){
				this.perdio = true;
				this.setPuntos();
				this.marcarCasilla(event);
				this.contadorTurnos = this.nuevoJuego.contador;
				this.contadorFallos = this.nuevoJuego.fallos;
			}
			else{
				this.marcarCasilla(event);
				this.contadorTurnos = this.nuevoJuego.contador;
				this.contadorFallos = this.nuevoJuego.fallos;
				if(this.nuevoJuego.gano){
					this.gano = true;
					this.setPuntos();
				}

			}
		}
	}

	marcarCasilla(event){
		if(this.contadorFallos < this.nuevoJuego.fallos) 
			event.target.classList.add("marcado")
		else
			event.target.classList.add("marcado-bien")
	}

	quitarClases(){
		let botones = document.getElementsByClassName("marcado");
		//console.log(botones);
		for (let i = botones.length-1; i >= 0; i--){
			botones[i].classList.remove("marcado");
		}
		botones = document.getElementsByClassName("marcado-bien");
		for (let i = botones.length-1; i >= 0; i--){
			botones[i].classList.remove("marcado-bien");
		}
	}

  //si comprobarLetra es false = mostrar mensaje {imagen si es posible}


  setPuntos(){
    let user = JSON.parse(localStorage.getItem('usuarioActual'));
    //console.log(user);
    if(user.ahorcado){
      if(this.gano)
        user.ahorcado++; 
      else if(this.perdio)
        user.ahorcado--;
    }else{
      if(this.gano)
        user.ahorcado = 1;
      else if(this.perdio)
        user.ahorcado = 0;
    }
    this.puntaje = user.ahorcado;
    localStorage.setItem('usuarioActual', JSON.stringify(user));
    //console.log(localStorage.getItem('usuarioActual'));
    let resultados = [];
    resultados =  JSON.parse(localStorage.getItem('resultados'));
    //console.log(resultados);
    //let resultados = JSON.parse(localStorage.getItem('resultados'));
    if(resultados){      
      let existe = false;
      for(var i = 0; i<resultados.length; i++){
        if(resultados[i].nombre == user.nombre)
        {
          resultados[i].ahorcado = user.ahorcado;
          existe = true;
          break;
        }
      }

      if(!existe){
        resultados.push(user);
      }
    }
    else{
      resultados = [];
      resultados.push(user);
    }
    localStorage.setItem('resultados', JSON.stringify(resultados));
    //console.log(JSON.parse(localStorage.getItem('resultados')));
  }


}
