class Recogible{
    constructor(radio) {
        this.x = Math.random()*anchura;
        this.y = Math.random()*altura;
        this.tipo = Math.floor(Math.random()*8)
        this.edad = 0;
        this.lados = 0;
        this.color = ''
    }
    dibuja(){
        contexto.strokeStyle = "white"
        
        var letra
        if(this.tipo == 0){letra = 'a'; contexto.fillStyle = "red";    this.lados = 20; this.color = 'rgb(255,200,200)';}
        if(this.tipo == 1){letra = 'e'; contexto.fillStyle = "green";  this.lados = 20; this.color = 'rgb(200,255,200)';}
        if(this.tipo == 2){letra = 'f'; contexto.fillStyle = "blue";   this.lados = 20; this.color = 'rgb(200,200,255)';}
        if(this.tipo == 3){letra = '3'; contexto.fillStyle = "yellow"; this.lados = 3;  this.color = 'rgb(255,255,200)';}
        if(this.tipo == 4){letra = '5'; contexto.fillStyle = "magenta";this.lados = 5;  this.color = 'rgb(200,255,255)';}
        if(this.tipo == 5){letra = '7'; contexto.fillStyle = "cyan";   this.lados = 7;  this.color = 'rgb(255,200,255)';}
        if(this.tipo == 6){letra = '9'; contexto.fillStyle = "orange"; this.lados = 9;  this.color = 'rgb(100,255,200)';}
        if(this.tipo == 7){letra = '11';contexto.fillStyle = "cyan";   this.lados = 11; this.color = 'rgb(200,255,100)';}

        var cx = desfasex+this.x;
        var cy = desfasey+this.y;

        // Radio base + pulso suave en función de la edad
        var rBase = 20;
        var r     = rBase + Math.sin(this.edad*0.15)*3;

        // Halo exterior suave
        contexto.save()
        contexto.lineWidth = 2;
        contexto.strokeStyle = "rgba(255,255,255,0.35)"
        contexto.beginPath()
        contexto.arc(cx, cy, r+5, 0, Math.PI*2, true)
        contexto.stroke()
        contexto.restore()

        // Gradiente interior para el polígono
        var grad = contexto.createRadialGradient(
            cx - r*0.3, cy - r*0.3, r*0.2,
            cx,         cy,         r
        )
        grad.addColorStop(0, "rgba(255,255,255,0.95)")
        grad.addColorStop(1, this.color)

        // Cuerpo del recogible
        poligono(cx, cy, this.lados, r, grad)

        // Letra / número central
        contexto.fillStyle = "black"
        contexto.font = "16px Monospace"
        contexto.textAlign = "center";
        contexto.textBaseline = "middle";
        contexto.fillText(letra, cx, cy)

        // Recuperar alineación por si acaso
        contexto.textAlign = "left";
        contexto.textBaseline = "alphabetic";
    }
}

