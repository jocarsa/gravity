class Estrella{
    constructor(radio) {
        this.x = (Math.random()-0.5)*anchura*5;
        this.y = (Math.random()-0.5)*altura*5;
        this.z = Math.random();
    }
    dibuja(){
        contexto.fillStyle = "white"
        contexto.fillRect(
		desfasex+this.x-((jugador.x-anchura/2)/10)*this.z,
		desfasey+this.y-((jugador.y-altura/2)/10)*this.z,
		2,2)
    }
  }