class Roca extends Mundo{
	constructor(radio) {
		super()
		this.x = Math.random()*anchura;
		this.y = Math.random()*altura;
		this.angulo = Math.PI*2*Math.random();
		this.angulo2 = Math.PI*2*Math.random();
		this.vel = Math.random()*3;
		this.radio = Math.random()*20+10
		this.visible = true
		this.vertices = new Array()
		this.velangular = (Math.random()-0.5)*0.1;
		this.numvertices = Math.round(Math.random()*24)+4
		this.pariente = null
		this.velx = (Math.random()-0.5)*10;
		this.vely = (Math.random()-0.5)*10;
		
		for(var i = 0;i<this.numvertices;i++){
			this.vertices[i] = (Math.random()+0.5)*1;
		}
	}

	dibuja(){
		if(this.visible == true){
			var cx = desfasex+this.x;
			var cy = desfasey+this.y;

			// Cuerpo poligonal de la roca
			contexto.beginPath()

			// Primer vértice
			var ang0 = this.angulo2;
			var r0 = this.radio * this.vertices[0];
			contexto.moveTo(
				cx + Math.cos(ang0)*r0,
				cy + Math.sin(ang0)*r0
			)

			// Resto de vértices
			for(var i = 1;i<this.numvertices;i++){
				var ang = Math.PI*2*(i/this.numvertices)+this.angulo2;
				var rr = this.radio*this.vertices[i];
				contexto.lineTo(
					cx + Math.cos(ang)*rr,
					cy + Math.sin(ang)*rr
				)
			}
			contexto.closePath()

			// Gradiente para dar volumen
			var grad = contexto.createRadialGradient(
				cx - this.radio*0.3, cy - this.radio*0.3, this.radio*0.2,
				cx,               cy,               this.radio
			)

			// Colores algo distintos según tamaño
			if(this.radio > 30){
				grad.addColorStop(0, "#f0f0f0")
				grad.addColorStop(0.4, "#9a9085")
				grad.addColorStop(1, "#322b28")
			}else{
				grad.addColorStop(0, "#f5f5f5")
				grad.addColorStop(0.4, "#aaa8a0")
				grad.addColorStop(1, "#3a3a3a")
			}

			contexto.fillStyle   = grad
			contexto.strokeStyle = "rgba(255,255,255,0.8)"
			contexto.lineWidth   = 1.5
			contexto.fill()
			contexto.stroke()

			// Pequeñas “grietas” / aristas internas
			contexto.strokeStyle = "rgba(0,0,0,0.35)"
			contexto.lineWidth   = 0.5
			for(var i = 0;i<this.numvertices;i+=3){
				var ang = Math.PI*2*(i/this.numvertices)+this.angulo2;
				var rr = this.radio*this.vertices[i]*0.6;
				contexto.beginPath()
				contexto.moveTo(cx, cy)
				contexto.lineTo(
					cx + Math.cos(ang)*rr,
					cy + Math.sin(ang)*rr
				)
				contexto.stroke()
			}
		}
	}

	mueve(){
		// Rotación ligera constante
		this.angulo2 += this.velangular;

		// Movimiento lineal actual
		this.x += this.velx
		this.y += this.vely
	}
}

