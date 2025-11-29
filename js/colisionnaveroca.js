function colisionnaveroca(){
// Vamos a ver si una roca me da a mi
                for(var j = 0;j<rocas.length;j++){
                    distancia = Math.sqrt(Math.pow(jugador.x-rocas[j].x,2)+Math.pow(jugador.y-rocas[j].y,2))
                    if(distancia < rocas[j].radio && rocas[j].visible == true){
                        jugador.vida -= 1
                        contexto.beginPath()
                        contexto.arc(jugador.x,jugador.y,30,0,Math.PI*2,true)
                        contexto.closePath();
                        contexto.strokeStyle  = "white"
                        contexto.stroke();
                        jugador.x += (Math.random()-0.5)*3
                        jugador.y += (Math.random()-0.5)*3
                    }
                }
               }