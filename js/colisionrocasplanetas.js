function colisionplanetasrocas(){
// Muchas balas y muchas rocas es N a N = doble bucle for
                for(var i = 0;i<planetas.length;i++){
                    for(var j = 0;j<rocas.length;j++){
                        distancia = Math.sqrt(Math.pow(planetas[i].x-rocas[j].x,2)+Math.pow(planetas[i].y-rocas[j].y,2))
                        if(distancia < rocas[j].radio && rocas[j].visible == true){
                           
                            rocas[j].visible = false
                            planetas[i].visible = false
                            jugador.puntos += Math.round(100/rocas[j].radio);
                           console.log(rocas[j].colisionhijos)
                           console.log(rocas[j].radio)
                            if(rocas[j].radio > 25){
                                for(var k = 0;k<rocas[j].colisionhijos;k++){
                                	console.log("creo nueva roca")
                                    rocas[rocas.length] = new Roca()
                                    rocas[rocas.length-1].x = rocas[j].x
                                    rocas[rocas.length-1].y = rocas[j].y
                                    rocas[rocas.length-1].radio = rocas[j].radio/3*Math.random()+5
                                }
                                
                            }else{
                            		for(var k = 0;k<rocas[j].colisionhijos;k++){
                                    estelas[estelas.length] = new Estela()
                                    estelas[estelas.length-1].x = rocas[j].x
                                    estelas[estelas.length-1].y = rocas[j].y
                                    estelas[estelas.length-1].angulo = Math.PI*2*Math.random()
                                    estelas[estelas.length-1].radio = rocas[j].radio/3*Math.random()+5
                                }
                            }
                            
                        }
                    }
                }
                }