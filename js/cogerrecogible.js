function cogerrecogible(){
	for(var i = 0;i<recogibles.length;i++){
                	if(Math.sqrt(Math.pow((jugador.x - (recogibles[i].x+15)),2)+Math.pow((jugador.y - (recogibles[i].y+15)),2) ) < 20){
                			if(recogibles[i].tipo == 0){jugador.municion = 100}
                			if(recogibles[i].tipo == 1){jugador.vida = 100}
                			if(recogibles[i].tipo == 2){jugador.fuel = 100}
                			if(recogibles[i].tipo == 3){jugador.mododisparo = 3}
                			if(recogibles[i].tipo == 4){jugador.mododisparo = 5}
                			if(recogibles[i].tipo == 5){jugador.mododisparo = 7}
                			if(recogibles[i].tipo == 6){jugador.mododisparo = 9}
                			if(recogibles[i].tipo == 7){jugador.mododisparo = 11}
                			recogibles.splice(i,1)
                		}
                }
}
