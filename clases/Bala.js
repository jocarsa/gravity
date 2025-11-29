class Bala{
                constructor(alto, ancho) {
                    this.x = jugador.x;
                    this.y = jugador.y;
                    this.angulo = jugador.angulo;
                    this.visible = true
                     
                      this.velx = jugador.velx+Math.cos(this.angulo)*5;
                      this.vely = jugador.vely+Math.sin(this.angulo)*5;
              }
                dibuja(){
                    if(this.visible){
						contexto.strokeStyle = "white"
                    	 contexto.lineWidth = 5
                    		contexto.beginPath();
                    		contexto.moveTo(desfasex+this.x,desfasey+this.y)
                    		contexto.lineTo(desfasex+this.x+Math.cos(this.angulo),desfasey+this.y+Math.sin(this.angulo))
                    		contexto.closePath();
                    		contexto.stroke();
                        //contexto.fillRect(this.x,this.y,5,5)
                    }
                }
                mueve(){
                    this.x += this.velx
                    this.y += this.vely
                    
                }
                
            }