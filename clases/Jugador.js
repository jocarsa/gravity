class Jugador extends Mundo{
              constructor(alto, ancho) {
              	super();
              	this.visible = true;
                this.x = anchura/2;
                this.y = altura/2;
                this.angulo = 0;
                this.velocidad = 0;
                  this.aceleracion = 0;
                  this.velx = 0;
                  this.vely = 0;
                  this.direccionaceleracion = 1
                  this.vida = 100
                  this.municion = 100;
                  this.puntos = 0;
                  this.fuel = 100;
                  this.mododisparo = 1;
                  this.fricciondireccional = 0.99
                  this.atrapando = 0
                  this.estatico = false;
				  this.pariente = false;
				  
              }
                mueve(){
                if(this.pariente != false){
					this.x = planetas[this.pariente].x
					this.y = planetas[this.pariente].y
				}	
                if(jugador.estatico == false){
                	
                	if(this.fuel > 0){
	                    jugador.velx += Math.cos(jugador.angulo)*jugador.aceleracion*jugador.direccionaceleracion
	                    jugador.vely += Math.sin(jugador.angulo)*jugador.aceleracion*jugador.direccionaceleracion
                   }
                   this.velx *= 1-this.friccionmundo
                   this.vely *= 1-this.friccionmundo
                   
                   //this.velx *= Math.cos(jugador.angulo)
                   //this.vely *= Math.sin(jugador.angulo)
                   
                   //this.velx *= Math.cos(this.angulo)*this.fricciondireccional
                   //this.vely *= Math.sin(this.angulo)*this.fricciondireccional
                   
                    this.x += jugador.velx
                    this.y += jugador.vely
                    /*
                    if(this.x < 0 ){this.x = anchura}
                    if(this.x > anchura ){this.x = 0}
                    if(this.y < 0 ){this.y = altura}
                    if(this.y > altura ){this.y = 0}
                    */
                    }
                }
               dibuja() {
    // ================== PARTICULAS DE PROPULSIÓN ==================

    // Propulsor principal (cola) cuando aceleras / frenas
    if (this.aceleracion > 0 && this.fuel > 0 && this.visible) {
        for (var i = 0; i < 10; i++) {
            estelas[estelas.length] = new Estela();
        }
        this.fuel -= 0.10;
    }

    // Propulsores laterales cuando giras
    if (this.fuel > 0 && this.visible && typeof mueveangulo !== "undefined") {
        var offsetLateral = 18;    // distancia desde el centro a los laterales
        var velocidadBase = 1.2;   // velocidad de las partículas laterales

        // IMPORTANTE:
        // Para girar a la IZQUIERDA -> chorro en el LADO DERECHO
        // Para girar a la DERECHA  -> chorro en el LADO IZQUIERDO

        // Lado derecho de la nave (perpendicular +π/2)
        var angDerecha = this.angulo + Math.PI / 2;
        // Lado izquierdo de la nave (perpendicular -π/2)
        var angIzquierda = this.angulo - Math.PI / 2;

        // Girar a la izquierda → encendemos propulsor del lado DERECHO
        if (mueveangulo === "izquierda") {
            var sxR = this.x + Math.cos(angDerecha) * offsetLateral;
            var syR = this.y + Math.sin(angDerecha) * offsetLateral;

            for (var j = 0; j < 4; j++) {
                var pR = new Estela();
                pR.x = sxR;
                pR.y = syR;
                // Chorro hacia afuera desde el lado derecho
                pR.angulo = angDerecha + (Math.random() - 0.5) * 0.5;
                var spR = velocidadBase + Math.random() * 0.5;
                pR.velx = Math.cos(pR.angulo) * spR + this.velx * 0.2;
                pR.vely = Math.sin(pR.angulo) * spR + this.vely * 0.2;
                estelas[estelas.length] = pR;
            }
            this.fuel -= 0.03;
        }

        // Girar a la derecha → encendemos propulsor del lado IZQUIERDO
        if (mueveangulo === "derecha") {
            var sxL = this.x + Math.cos(angIzquierda) * offsetLateral;
            var syL = this.y + Math.sin(angIzquierda) * offsetLateral;

            for (var k = 0; k < 4; k++) {
                var pL = new Estela();
                pL.x = sxL;
                pL.y = syL;
                // Chorro hacia afuera desde el lado izquierdo
                pL.angulo = angIzquierda + (Math.random() - 0.5) * 0.5;
                var spL = velocidadBase + Math.random() * 0.5;
                pL.velx = Math.cos(pL.angulo) * spL + this.velx * 0.2;
                pL.vely = Math.sin(pL.angulo) * spL + this.vely * 0.2;
                estelas[estelas.length] = pL;
            }
            this.fuel -= 0.03;
        }

        if (this.fuel < 0) this.fuel = 0;
    }

    // ================== DIBUJO DE LA NAVE ==================

    if (!this.visible) {
        return;
    }

    contexto.save();
    contexto.translate(desfasex + this.x, desfasey + this.y);
    contexto.rotate(this.angulo);

    // ----- LLAMA DEL MOTOR PRINCIPAL (visual) ----------------------
    if (this.aceleracion > 0 && this.fuel > 0) {
        // Llama exterior
        contexto.beginPath();
        contexto.moveTo(-22, 0);     // punto de unión al casco
        contexto.lineTo(-40, -8);    // punta superior
        contexto.lineTo(-40, 8);     // punta inferior
        contexto.closePath();
        contexto.fillStyle = "rgba(255,160,60,0.9)";
        contexto.fill();

        // Llama interior
        contexto.beginPath();
        contexto.moveTo(-20, 0);
        contexto.lineTo(-32, -5);
        contexto.lineTo(-32, 5);
        contexto.closePath();
        contexto.fillStyle = "rgba(255,230,180,0.9)";
        contexto.fill();
    }

    // ----- CUERPO PRINCIPAL (tipo shuttle NASA, vista superior) ----
    contexto.lineWidth = 2.5;
    contexto.strokeStyle = "rgb(230,230,230)";
    contexto.fillStyle = "rgb(240,240,240)";

    contexto.beginPath();
    // morro
    contexto.moveTo(35, 0);
    // borde superior hacia atrás
    contexto.lineTo(18, -10);
    contexto.lineTo(-15, -10);
    // cola ligeramente ensanchada
    contexto.lineTo(-28, -6);
    contexto.lineTo(-32, 0);
    contexto.lineTo(-28, 6);
    contexto.lineTo(-15, 10);
    contexto.lineTo(18, 10);
    contexto.closePath();
    contexto.fill();
    contexto.stroke();

    // ----- ALAS DELTA ----------------------------------------------
    // Ala izquierda
    contexto.beginPath();
    contexto.moveTo(-5, -10);
    contexto.lineTo(-20, -24);
    contexto.lineTo(-10, -18);
    contexto.lineTo(6, -10);
    contexto.closePath();
    contexto.fillStyle = "rgb(220,220,220)";
    contexto.fill();
    contexto.strokeStyle = "rgb(200,200,200)";
    contexto.stroke();

    // Ala derecha
    contexto.beginPath();
    contexto.moveTo(-5, 10);
    contexto.lineTo(-20, 24);
    contexto.lineTo(-10, 18);
    contexto.lineTo(6, 10);
    contexto.closePath();
    contexto.fillStyle = "rgb(220,220,220)";
    contexto.fill();
    contexto.stroke();

    // ----- COLA VERTICAL (marca superior) --------------------------
    contexto.beginPath();
    contexto.moveTo(-24, -6);
    contexto.lineTo(-30, -14);
    contexto.lineTo(-26, -6);
    contexto.closePath();
    contexto.fillStyle = "rgb(200,200,200)";
    contexto.fill();

    // ----- FRANJA TÉRMICA INFERIOR ---------------------------------
    contexto.beginPath();
    contexto.moveTo(18, 10);
    contexto.lineTo(-12, 10);
    contexto.lineTo(-20, 8);
    contexto.lineTo(-10, 8);
    contexto.lineTo(18, 8);
    contexto.closePath();
    contexto.fillStyle = "rgb(25,25,40)";
    contexto.fill();

    // Punta negra del morro
    contexto.beginPath();
    contexto.moveTo(35, 0);
    contexto.lineTo(27, -6);
    contexto.lineTo(27, 6);
    contexto.closePath();
    contexto.fillStyle = "rgb(25,25,40)";
    contexto.fill();

    // ----- CABINA --------------------------------------------------
    contexto.beginPath();
    contexto.arc(14, 0, 5, 0, Math.PI * 2, true);
    contexto.closePath();
    contexto.fillStyle = "rgba(120,170,220,0.95)";
    contexto.fill();
    contexto.strokeStyle = "rgba(200,230,255,0.9)";
    contexto.stroke();

    // ----- LÍNEA CENTRAL DEL FUSELAJE ------------------------------
    contexto.lineWidth = 1.3;
    contexto.strokeStyle = "rgba(80,80,80,0.7)";
    contexto.beginPath();
    contexto.moveTo(-28, 0);
    contexto.lineTo(30, 0);
    contexto.stroke();

    // ----- MOTORES TRASEROS ----------------------------------------
    contexto.fillStyle = "rgb(40,40,60)";
    contexto.strokeStyle = "rgba(180,180,200,0.9)";
    contexto.lineWidth = 1;

    // motor central
    contexto.beginPath();
    contexto.arc(-30, 0, 3.8, 0, Math.PI * 2, true);
    contexto.fill();
    contexto.stroke();

    // motor superior
    contexto.beginPath();
    contexto.arc(-28, -6, 3.2, 0, Math.PI * 2, true);
    contexto.fill();
    contexto.stroke();

    // motor inferior
    contexto.beginPath();
    contexto.arc(-28, 6, 3.2, 0, Math.PI * 2, true);
    contexto.fill();
    contexto.stroke();

    contexto.restore();
}


            }
