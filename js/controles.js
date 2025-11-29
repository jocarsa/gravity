/*let timer
document.getElementById("izquierda").mousedown = function(){
	timer = setInterval(() => {
	if(jugador.estatico == false){
		mueveangulo = 'izquierda'
	  }
	  }, 100); // Adjust the interval as needed
}

document.getElementById("izquierda").mouseup = function(){
	clearInterval(timer); // Stop the action when the button is released
	if(jugador.estatico == false){
		mueveangulo = ''
	  }
}

document.getElementById("derecha").mousedown = function(){
	timer = setInterval(() => {
	if(jugador.estatico == false){
		mueveangulo = 'derecha'
	  }
	  }, 100); // Adjust the interval as needed
}

document.getElementById("derecha").mouseup = function(){
	clearInterval(timer); // Stop the action when the button is released
	if(jugador.estatico == false){
		mueveangulo = ''
	  }
}
*/
/*
document.getElementById("acelerar").mousedown = function(){
	if(jugador.estatico == true){
                    		
                    		jugador.direccionaceleracion = 1
                    		jugador.estatico = false;
							jugador.pariente = false;
                    		jugador.aceleracion = 40
                    }
                    jugador.direccionaceleracion = 1
                        jugador.aceleracion = 0.5
}

document.getElementById("acelerar").mouseup = function(){
	jugador.aceleracion = 0
}

*/
document.onkeydown = function(e) {
	
                switch(e.which) {
                    case 37: // left
                    if(jugador.estatico == false){
                        mueveangulo = 'izquierda'
                       }
                        
                    break;
                     
                    case 38: // up
					if(jugador.estatico == true){
                    		
                    		jugador.direccionaceleracion = 1
                    		jugador.estatico = false;
							jugador.pariente = false;
                    		jugador.aceleracion = 50
                    }
                    jugador.direccionaceleracion = 1
                        jugador.aceleracion = 0.3
                        
                    break;
                    case 40: // down
                    jugador.direccionaceleracion = -1
                        jugador.aceleracion = 0.1
                        
                    break;

                    case 39: // right
                    if(jugador.estatico == false){
                        mueveangulo = 'derecha'
                       }
                       
                    break;
                    case 69: // e
                        jugador.atrapando = 1
                       
                    break;

                    case 32: // espacio
                    if(jugador.estatico == false){
                    		if(jugador.municion > 0){
                    			
                        		balas.push(new Bala())
                        		if(jugador.mododisparo >= 3){
                        			balas[balas.length] = new Bala()
                        			balas[balas.length-1].angulo += 0.1
                        			balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      			balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        			balas[balas.length] = new Bala()
                        			balas[balas.length-1].angulo -= 0.1
                        			balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      			balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        		}
                        		if(jugador.mododisparo >= 5){
                        			
                      			
                      			balas[balas.length] = new Bala()
                        			balas[balas.length-1].angulo += 0.2
                        			balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      			balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        			balas[balas.length] = new Bala()
                        			balas[balas.length-1].angulo -= 0.2
                        			balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      			balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        		}
                        		if(jugador.mododisparo >= 7){
                        			
                      			
                      			balas[balas.length] = new Bala()
                        			balas[balas.length-1].angulo += 0.3
                        			balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      			balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        			balas[balas.length] = new Bala()
                        			balas[balas.length-1].angulo -= 0.3
                        			balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      			balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        		}
                        		
                        		if(jugador.mododisparo >= 9){
                        			
                      			
                      			balas[balas.length] = new Bala()
                        			balas[balas.length-1].angulo += 0.4
                        			balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      			balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        			balas[balas.length] = new Bala()
                        			balas[balas.length-1].angulo -= 0.4
                        			balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      			balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        		}
                        		if(jugador.mododisparo >= 11){
                        			
                      			
                      			balas[balas.length] = new Bala()
                        			balas[balas.length-1].angulo += 0.5
                        			balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      			balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        			balas[balas.length] = new Bala()
                        			balas[balas.length-1].angulo -= 0.5
                        			balas[balas.length-1].velx = jugador.velx+Math.cos(balas[balas.length-1].angulo)*5;
                      			balas[balas.length-1].vely = jugador.vely+Math.sin(balas[balas.length-1].angulo)*5;
                        		}
                        		jugador.municion--;
                       }
                      }
                    break;

                    default: return; // exit this handler for other keys
                }
                e.preventDefault(); // prevent the default action (scroll / move caret)
            };
            document.onkeyup = function(e) {
                switch(e.which) {
                    case 37: // left
                       mueveangulo = ''
                    break;
                          
                    case 38: // up
                        jugador.aceleracion = 0
                    break;
                    case 40: // down
                    
                        jugador.aceleracion = 0
                        
                    break;

                    case 39: // right
                         mueveangulo = ''
                    break;

                    case 40: // down
                    break;

                    default: return; // exit this handler for other keys
                }
                e.preventDefault(); // prevent the default action (scroll / move caret)
            };