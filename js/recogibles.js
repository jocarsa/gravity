function recoge(){
			if(Math.random() < 0.005){
                	console.log("nuevo recogible")
                		recogibles[recogibles.length] = new Recogible()
                }
                for(var i = 0;i<recogibles.length;i++){
                		recogibles[i].dibuja()
                		recogibles[i].edad++;
                		if(recogibles[i].edad > 1000){recogibles.splice(i,1)}
                		
                }
} 
