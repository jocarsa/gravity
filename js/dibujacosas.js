function dibujacosas(){

	// ---------- FONDO ----------
	contexto.fillStyle="rgba(0,0,0,0.2)"
	contexto.fillRect(0,0,anchura,altura)
	contexto.fillStyle = "rgb(20,20,20)"
	contexto.strokeStyle = "rgb(150,150,150)"
	contexto.fillRect(0,0,anchura,altura)

	// ---------- HELPERS DE MARCADORES ----------
	function dibujaMarcadorDireccion(x, y, angulo, color, radio){
		contexto.save()
		contexto.translate(x, y)
		contexto.rotate(angulo)

		// Flecha tipo “triángulo”
		contexto.beginPath()
		contexto.moveTo(0, -radio)             // punta
		contexto.lineTo(radio*0.8,  radio)     // esquina derecha
		contexto.lineTo(-radio*0.8, radio)     // esquina izquierda
		contexto.closePath()
		contexto.fillStyle   = color
		contexto.strokeStyle = "rgba(0,0,0,0.8)"
		contexto.lineWidth   = 2
		contexto.fill()
		contexto.stroke()

		contexto.restore()
	}

	function dibujaMarcadorPlanetaMadre(x, y, angulo){
		contexto.save()
		contexto.translate(x, y)
		contexto.rotate(angulo)

		// Círculo exterior
		contexto.beginPath()
		contexto.arc(0, 0, 18, 0, Math.PI*2, true)
		contexto.strokeStyle = "rgba(120,220,255,0.95)"
		contexto.lineWidth   = 3
		contexto.stroke()

		// Triángulo interior apuntando hacia el planeta
		contexto.beginPath()
		contexto.moveTo(0, -12)
		contexto.lineTo(10, 4)
		contexto.lineTo(-10, 4)
		contexto.closePath()
		contexto.fillStyle = "rgba(120,220,255,0.95)"
		contexto.fill()

		contexto.restore()
	}


	// ---------- REJILLA ----------
	contexto.lineWidth = 0.1
	contexto.strokeStyle = "grey";
	contexto.fillStyle = "grey"

	for(var x = -500;x<500;x++){
		contexto.beginPath();
		contexto.moveTo(desfasex+x*10,desfasey-5000)
		contexto.lineTo(desfasex+x*10,desfasey+5000)
		contexto.stroke()   
	}
	for(var y = -500;y<500;y++){
		contexto.beginPath();
		contexto.moveTo(desfasex-5000,desfasey+y*10)
		contexto.lineTo(desfasex+5000,desfasey+y*10)
		contexto.stroke()
	}

	contexto.lineWidth = 0.5
	for(var x = -100;x<100;x++){
		contexto.beginPath();
		contexto.moveTo(desfasex+x*100,desfasey-10000)
		contexto.lineTo(desfasex+x*100,desfasey+10000)
		contexto.stroke()   
	}
	for(var y = -100;y<100;y++){
		contexto.beginPath();
		contexto.moveTo(desfasex-10000,desfasey+y*100)
		contexto.lineTo(desfasex+10000,desfasey+y*100)
		contexto.stroke()
	}

	// ---------- ESTRELLAS ----------
	for(var i = 0;i<estrellas.length;i++){
		estrellas[i].dibuja()
	}

	// ---------- PLANETAS ----------
	for(var i = 0;i<planetas.length;i++){
		planetas[i].dibuja()
		planetas[i].mueve()
	}

	// ---------- BALAS ----------
	for(var i = 0;i<balas.length;i++){
		balas[i].mueve()
		balas[i].dibuja()
		if(
			balas[i].x > anchura*200 || 
			balas[i].y > altura*200  || 
			balas[i].x < -anchura*200|| 
			balas[i].y < -altura*200
		){
			balas.splice(i,1)
		}
	}

	// ---------- ESTELAS ----------
	for(var i = 0;i<estelas.length;i++){
		estelas[i].mueve()
		estelas[i].dibuja()
		estelas[i].edad+=4;
		if(estelas[i].edad > 255){
			estelas.splice(i,1)
		}
	}

	// ---------- ROCAS + MARCADORES DE DIRECCIÓN ----------
	for(var i = 0;i<rocas.length;i++){
		rocas[i].mueve()
		rocas[i].dibuja()

		if(rocas[i].visible == true){
			var p3 = {"x":desfasex+jugador.x,"y":desfasey+jugador.y}
			var p4 = {"x":desfasex+rocas[i].x,"y":desfasey+rocas[i].y}

			// Ángulo desde el jugador hacia la roca (para orientar la flecha)
			var anguloRoca = Math.atan2(rocas[i].y - jugador.y, rocas[i].x - jugador.x)

			// Color del marcador según tamaño de la roca
			var colorMarcador = "rgba(255,255,255,0.9)"
			if(rocas[i].radio > 35){
				colorMarcador = "rgba(255,120,80,0.95)"   // grande: más peligrosa
			}else if(rocas[i].radio > 20){
				colorMarcador = "rgba(255,220,120,0.95)" // media
			}else{
				colorMarcador = "rgba(180,220,255,0.95)" // pequeña
			}

			var interseccion;

			// Izquierda
			var p1 = {"x":0,"y":0}
			var p2 = {"x":0,"y":altura}
			interseccion = calculateIntersection(p1,p2,p3,p4)
			if(interseccion != false){
				dibujaMarcadorDireccion(interseccion.x, interseccion.y, anguloRoca, colorMarcador, 12)
				continue;
			}

			// Arriba
			p1 = {"x":0,"y":0}
			p2 = {"x":anchura,"y":0}
			interseccion = calculateIntersection(p1,p2,p3,p4)
			if(interseccion != false){
				dibujaMarcadorDireccion(interseccion.x, interseccion.y, anguloRoca, colorMarcador, 12)
				continue;
			}

			// Abajo
			p1 = {"x":0,"y":altura}
			p2 = {"x":anchura,"y":altura}
			interseccion = calculateIntersection(p1,p2,p3,p4)
			if(interseccion != false){
				dibujaMarcadorDireccion(interseccion.x, interseccion.y, anguloRoca, colorMarcador, 12)
				continue;
			}

			// Derecha
			p1 = {"x":anchura,"y":0}
			p2 = {"x":anchura,"y":altura}
			interseccion = calculateIntersection(p1,p2,p3,p4)
			if(interseccion != false){
				dibujaMarcadorDireccion(interseccion.x, interseccion.y, anguloRoca, colorMarcador, 12)
				continue;
			}
		}
	}

	// ---------- MARCADOR ESPECIAL PLANETA MADRE (planetas[0]) ----------
	if(planetas.length > 0 && planetas[0].visible){
		var pmx = desfasex + planetas[0].x;
		var pmy = desfasey + planetas[0].y;

		// Solo si el planeta está fuera de pantalla
		if(pmx < 0 || pmx > anchura || pmy < 0 || pmy > altura){
			var p3p = {"x":desfasex+jugador.x,"y":desfasey+jugador.y}
			var p4p = {"x":pmx,"y":pmy}
			var edges = [
				[{"x":0,"y":0},{"x":anchura,"y":0}],           // arriba
				[{"x":anchura,"y":0},{"x":anchura,"y":altura}],// derecha
				[{"x":anchura,"y":altura},{"x":0,"y":altura}], // abajo
				[{"x":0,"y":altura},{"x":0,"y":0}]            // izquierda
			]

			for(var ei = 0; ei < edges.length; ei++){
				var e1 = edges[ei][0]
				var e2 = edges[ei][1]
				var inter = calculateIntersection(e1, e2, p3p, p4p)
				if(inter != false){
					var anguloPlaneta = Math.atan2(planetas[0].y - jugador.y, planetas[0].x - jugador.x)
					dibujaMarcadorPlanetaMadre(inter.x, inter.y, anguloPlaneta)
					break;
				}
			}
		}
	}

	// ---------- TRAYECTORIAS (de momento vacío) ----------
	for(var i = 0;i<trayectorias.length;i++){
		// reservado para futuras visualizaciones de trayectoria
	}

	// ---------- MARCADORES EN ÓRBITA DEL PLANETA MADRE ----------
	contexto.beginPath()
	contexto.fillStyle = "blue"
	contexto.arc(
		desfasex+planetas[0].x+Math.cos(anguloestatico)*planetas[0].radio,
		desfasey+planetas[0].y+Math.sin(anguloestatico)*planetas[0].radio,
		10,
		0,
		Math.PI*2
	)
	contexto.fill()
	
	contexto.beginPath()
	contexto.fillStyle = "green"
	contexto.arc(
		desfasex+planetas[0].x+Math.cos(anguloestatico2)*planetas[0].radio,
		desfasey+planetas[0].y+Math.sin(anguloestatico2)*planetas[0].radio,
		10,
		0,
		Math.PI*2
	)
	contexto.fill()
}

