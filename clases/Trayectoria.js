class Trayectoria  extends Mundo{
              constructor(alto, ancho) {
              	super();
                this.x = anchura/2;
                this.y = altura/2;
                this.angulo = 0;
                this.velocidad = 0;
                  this.aceleracion = 0;
                  this.velx = 0;
                  this.vely = 0;
                  this.direccionaceleracion = 1
                  this.vida = 100
                  this.municion = 100;
                  this.puntos = 0;
                  this.fuel = 100;
                  this.mododisparo = 1;
                  this.fricciondireccional = 0.99
                  this.atrapando = 0
              }
                mueve(){
                	
                
                	
                	if(this.fuel > 0){
	                    jugador.velx += Math.cos(jugador.angulo)*jugador.aceleracion*jugador.direccionaceleracion
	                    jugador.vely += Math.sin(jugador.angulo)*jugador.aceleracion*jugador.direccionaceleracion
                   }
                   this.velx *= 1-this.friccionmundo
                   this.vely *= 1-this.friccionmundo
                   
                   //this.velx *= Math.cos(jugador.angulo)
                   //this.vely *= Math.sin(jugador.angulo)
                   
                   //this.velx *= Math.cos(this.angulo)*this.fricciondireccional
                   //this.vely *= Math.sin(this.angulo)*this.fricciondireccional
                   
                    this.x += jugador.velx
                    this.y += jugador.vely
                    /*
                    if(this.x < 0 ){this.x = anchura}
                    if(this.x > anchura ){this.x = 0}
                    if(this.y < 0 ){this.y = altura}
                    if(this.y > altura ){this.y = 0}
                    */
                   
                }
                dibuja(){
                	 
                    // Dibujo personaje
                    contexto.lineWidth = 1
                    
                    contexto.strokeStyle = "rgb(250,250,250)"
                    contexto.beginPath();
                    contexto.arc(desfasex+this.x,desfasey+this.y,1,0,Math.PI*2)
                    contexto.closePath();
                    contexto.stroke()
                    
                   
                    
                    
                }
            }