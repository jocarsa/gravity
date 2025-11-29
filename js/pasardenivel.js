function pasardenivel(){
	// Repaso las rocas
				
                siguientenivel = 'si'
                for(var i = 0;i<rocas.length;i++){
                    if(rocas[i].visible == true){siguientenivel = 'no'}
                }
                if(jugador.estatico == false){
                		siguientenivel = 'no'
                }
                if(siguientenivel == 'si'){
					balas = []
                	jugador.municion = 100;
                	jugador.fuel = 100
                	planetas[planetas.length] = new Planeta()
                	planetas[planetas.length - 1].x = anchura/2+anchura/4
                		planetas[planetas.length - 1].y = altura/2+altura/4
                    nivel++;
                    tiempo = 0;
                    for(var k = 0;k<nivel*1;k++){
                        rocas[rocas.length] = new Roca()
						rocas[rocas.length-1].radio *= (1+nivel/10)
						
                    }
                    //$("#nivel").text("nivel "+nivel)
                    //$("#nivel").fadeIn("1000")
                    //setTimeout(function(){$("#nivel").fadeOut("1000")},5000)
                }
                
}
