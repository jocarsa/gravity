class Planeta extends Mundo {
    constructor(radio) {
        super();

        this.x = Math.random() * anchura;
        this.y = Math.random() * altura;

        this.angulo = Math.PI * 2 * Math.random();
        this.angulo2 = Math.PI * 2 * Math.random();

        this.vel = Math.random() * 3;
        this.radio = Math.random() * 20 + 20;
        this.m = (this.radio * this.radio) / 50;

        this.visible = true;

        this.orbita = Math.random() * (altura / 2) + altura / 5;
        this.anguloorbita = Math.random() * Math.PI * 2;

        this.velangular = (Math.random() - 0.5) * 0.01;

        this.pariente = null;

        // Colores base del planeta
        this.colorClaro = "#4ec9ff";
        this.colorOscuro = "#003c7a";
    }

    dibuja() {
        if (!this.visible) {
            return;
        }

        // ----- ÓRBITA (círculo alrededor del centro de la pantalla) -----
        contexto.save();
        contexto.lineWidth = 1;
        contexto.strokeStyle = "rgba(255,255,255,0.10)";
        contexto.beginPath();
        contexto.arc(
            desfasex + anchura / 2,
            desfasey + altura / 2,
            this.orbita,
            0,
            Math.PI * 2,
            true
        );
        contexto.stroke();
        contexto.restore();

        // Centro del planeta
        var cx = desfasex + this.x;
        var cy = desfasey + this.y;
        var r = this.radio;

        // Pequeña animación de rotación (offset por planeta)
        var t = Date.now() * 0.00025 + this.angulo2;

        contexto.save();
        contexto.translate(cx, cy);

        // ----- DISCO BASE DEL PLANETA -----------------------------------
        var grad = contexto.createRadialGradient(
            -r * 0.3, -r * 0.3, r * 0.2,
            0, 0, r
        );
        grad.addColorStop(0, this.colorClaro);
        grad.addColorStop(1, this.colorOscuro);

        contexto.beginPath();
        contexto.arc(0, 0, r, 0, Math.PI * 2);
        contexto.fillStyle = grad;
        contexto.fill();

        // Atmosfera exterior / borde
        contexto.lineWidth = 3;
        contexto.strokeStyle = "rgba(200,230,255,0.5)";
        contexto.stroke();

        // Recorta todo lo siguiente al disco del planeta
        contexto.clip();

        // ----- MERIDIANOS (líneas verticales que giran) ------------------
        var meridianos = 8;
        contexto.lineWidth = 0.8;
        contexto.strokeStyle = "rgba(255,255,255,0.28)";

        for (var i = 0; i < meridianos; i++) {
            contexto.save();
            var ang = (i / meridianos) * Math.PI * 2 + t;
            contexto.rotate(ang);

            contexto.beginPath();
            contexto.moveTo(0, -r);
            contexto.lineTo(0, r);
            contexto.stroke();

            contexto.restore();
        }

        // ----- PARALELOS (latitudes, elipses) ----------------------------
        var paralelos = 5;
        contexto.lineWidth = 0.6;
        contexto.strokeStyle = "rgba(255,255,255,0.22)";

        for (var j = 1; j <= paralelos; j++) {
            var lat = (j / (paralelos + 1)) * 0.9; // 0..0.9
            var ry = r * lat;
            var rx = Math.sqrt(r * r - ry * ry); // radio horizontal en esa latitud

            contexto.save();
            // ligera rotación de los paralelos para dar sensación de esfera
            contexto.rotate(t * 0.6);

            if (contexto.ellipse) {
                contexto.beginPath();
                contexto.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
                contexto.stroke();
            } else {
                // Fallback simple si no existiera ellipse()
                contexto.scale(1, lat);
                contexto.beginPath();
                contexto.arc(0, 0, r, 0, Math.PI * 2);
                contexto.stroke();
            }

            contexto.restore();
        }

        // ----- SOMBRA DEL LADO NOCTURNO ---------------------------------
        var gradNoche = contexto.createRadialGradient(
            r * 0.7, -r * 0.3, r * 0.2,
            0, 0, r * 1.3
        );
        gradNoche.addColorStop(0, "rgba(0,0,0,0.5)");
        gradNoche.addColorStop(1, "rgba(0,0,0,0)");

        contexto.beginPath();
        contexto.arc(0, 0, r, 0, Math.PI * 2);
        contexto.fillStyle = gradNoche;
        contexto.fill();

        contexto.restore();
    }

    mueve() {
        // this.anguloorbita += 0.001; // si quieres que se muevan en la órbita, descomentar

        // Posición en la órbita alrededor del centro de la pantalla
        this.x = anchura / 2 + Math.cos(this.anguloorbita) * this.orbita;
        this.y = altura / 2 + Math.sin(this.anguloorbita) * this.orbita;

        // Rotación lenta del propio planeta (para variar ligeramente el patrón)
        this.angulo2 += this.velangular;

        /*
        // Movimiento libre antiguo (lo mantengo comentado por si lo quieres recuperar)
        if (this.pariente == null) {
            this.angulo2 += this.velangular;
            this.velangular *= 1 - this.friccionmundo;
            this.vel *= 1 - this.friccionmundo;

            this.x += Math.cos(this.angulo) * this.vel;
            this.y += Math.sin(this.angulo) * this.vel;
            if (this.x < 0) { this.x = anchura; }
            if (this.y < 0) { this.y = altura; }
            if (this.x > anchura) { this.x = 0; }
            if (this.y > altura) { this.y = 0; }
        } else {
            this.x = jugador.x + Math.cos(jugador.angulo) * 50;
            this.y = jugador.y + Math.sin(jugador.angulo) * 50;
            this.angulo2 = jugador.angulo;
        }
        */
    }
}

