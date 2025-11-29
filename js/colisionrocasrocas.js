function colisionrocasrocas(){
// Muchas balas y muchas rocas es N a N = doble bucle for
                for(var i = 0;i<rocas.length;i++){
                    for(var j = 0;j<rocas.length;j++){
	                    	if(i != j){
	                        distancia = Math.sqrt(Math.pow(rocas[i].x-rocas[j].x,2)+Math.pow(rocas[i].y-rocas[j].y,2))
	                        if(distancia < rocas[j].radio && rocas[j].visible == true && rocas[i].visible == true){
	                           
	                            rocas[j].visible = false
	                            rocas[i].visible = false
	                            
	                           console.log(rocas[j].radio)
	                            if(rocas[j].radio > 30){
	                                for(var k = 0;k<rocas[j].colisionhijos;k++){
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
                }