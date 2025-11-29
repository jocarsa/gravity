// Declaraciones///////////////////////////////////////////////////////////////
			var mundo = new Mundo();
			var desfasex = 0;
			var desfasey = 0;
			velocidaddesfase = 5; 
	        var intro = 0;
	        var anchura = window.innerWidth/1
	        var altura = window.innerHeight/1
        	document.getElementById("lienzo").width = anchura
            document.getElementById("lienzo").height = altura
            var mueveangulo = 0;
            var nivel = 1
            var zoom = 1
            var balas = new Array();
            
            var rocas = new Array();
            
            for(var i = 0;i<nivel;i++){
                rocas[i] = new Roca()
                rocas[i].radio = 10;
            }
            
            var estrellas = new Array();
            for(var i = 0;i<5000;i++){
                estrellas[i] = new Estrella()
            }
            var planetas = new Array();
            for(var i = 0;i<nivel;i++){
                planetas[i] = new Planeta()
                if(i == 0){
                		planetas[i].x = 0;
                		planetas[i].y = 0;
                planetas[i].orbita = 0;
                planetas[i].radio = 100;
                }
                
            }
            var jugador = new Jugador();
            anguloestatico = Math.random()*Math.PI*2
            anguloestatico2 = Math.random()*Math.PI*2
            jugador.x = anchura/2+planetas[0].x+Math.cos(anguloestatico)*planetas[0].radio*1.1;
            jugador.y = altura/2+planetas[0].y+Math.sin(anguloestatico)*planetas[0].radio*1.1;
            jugador.estatico = true;
            jugador.angulo = anguloestatico
            var trayectorias = new Array()
            for(var i = 0;i<2500;i++){
            		trayectorias[i] = new Trayectoria();
            }
            var estelas = new Array();
            var cuentaestelas = 0;
            var contexto = document.getElementById("lienzo").getContext("2d");
            contexto.font = "20px Monospace";
            contexto.lineWidth = 2
            contexto.lineJoin = 'round'
            contexto.textAlign = "center";
            var temporizador;
            recogibles = new Array();
            var numeroparedes = 0;
            var paredes = new Array();
            for(var i = 0;i<numeroparedes;i++){
            		paredes[i] = new Pared()
            		paredes[i].x = Math.random()*anchura
            		paredes[i].y = Math.random()*altura
            }
            // Declaraciones///////////////////////////////////////////////////////////////