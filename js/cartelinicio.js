function cartelinicio(){
	if(tiempo < 300){
		contexto.fillStyle = "white"
		contexto.textAlign = "center";
		contexto.font = "50px Monospace";
		contexto.fillText(mundo.titulo,anchura/2,altura/2)
		contexto.font = "20px Monospace";
		contexto.fillText(mundo.controles,anchura/2,altura/2+30)
		contexto.font = "50px Monospace";
		contexto.fillText("Level:"+nivel,anchura/2,altura/2+80)
		contexto.textAlign = "left";
		contexto.font = "20px Monospace";
    }
}

