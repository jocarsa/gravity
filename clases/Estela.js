class Estela{
                constructor(alto, ancho) {
                    this.x = jugador.x;
                    this.y = jugador.y;
                    this.angulo = jugador.angulo+Math.PI+(Math.random()-0.5)*2;
                    this.visible = true
                    this.edad = 0;
                     
                      this.velx = (jugador.velx*0.5+Math.cos(this.angulo)*1)*Math.random()*jugador.direccionaceleracion;
                      this.vely = (jugador.vely*0.5+Math.sin(this.angulo)*1)*Math.random()*jugador.direccionaceleracion;
              }
                dibuja(){
                    if(this.visible){
                    		contexto.beginPath();
                    		/*
                    		contexto.moveTo(this.x,this.y)
                    		contexto.lineTo(this.x+Math.cos(this.angulo)*5,this.y+Math.sin(this.angulo)*5)
                    		*/
                    		contexto.arc(desfasex+this.x,desfasey+this.y,Math.round((255-this.edad)/25),0,Math.PI*2,true)
                    		contexto.closePath();
                    		contexto.strokeStyle = "rgba("+(255-this.edad)+","+(255-this.edad)+","+(255-this.edad)+","+(255-this.edad)/255+")"
                    		contexto.fillStyle = "rgba("+(255-this.edad)+","+(255-this.edad)+","+(255-this.edad)+","+(255-this.edad)/255+")"
                    		contexto.stroke();
                    		contexto.fill()
                        //contexto.fillRect(this.x,this.y,5,5)
                    }
                }
                mueve(){
                    this.x += this.velx
                    this.y += this.vely
                    
                }
                
            }