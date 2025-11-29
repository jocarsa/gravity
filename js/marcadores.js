function marcadores() {
    // ================= HUD PANEL ======================
    const hudX = 20;
    const hudY = 20;
    const hudW = 260;
    const hudH = 150;

    contexto.save();

    // Panel de fondo con esquinas redondeadas
    contexto.globalAlpha = 0.85;
    contexto.fillStyle = "rgba(0,0,0,0.6)";
    contexto.strokeStyle = "rgba(255,255,255,0.35)";
    contexto.lineWidth = 2;

    const r = 12; // radio de esquina
    contexto.beginPath();
    contexto.moveTo(hudX + r, hudY);
    contexto.lineTo(hudX + hudW - r, hudY);
    contexto.quadraticCurveTo(hudX + hudW, hudY, hudX + hudW, hudY + r);
    contexto.lineTo(hudX + hudW, hudY + hudH - r);
    contexto.quadraticCurveTo(hudX + hudW, hudY + hudH, hudX + hudW - r, hudY + hudH);
    contexto.lineTo(hudX + r, hudY + hudH);
    contexto.quadraticCurveTo(hudX, hudY + hudH, hudX, hudY + hudH - r);
    contexto.lineTo(hudX, hudY + r);
    contexto.quadraticCurveTo(hudX, hudY, hudX + r, hudY);
    contexto.closePath();
    contexto.fill();
    contexto.stroke();

    contexto.globalAlpha = 1;
    contexto.font = "12px monospace";
    contexto.textBaseline = "middle";

    // Función auxiliar para dibujar una barra de progreso
    function drawBar(label, x, y, value, maxValue, color1, color2) {
        const barW = 140;
        const barH = 10;
        const barX = x + 65;
        const barY = y - barH / 2 + 1;

        const pct = Math.max(0, Math.min(1, value / maxValue));

        // Etiqueta
        contexto.fillStyle = "rgba(255,255,255,0.9)";
        contexto.fillText(label, x, y);

        // Fondo de la barra
        contexto.fillStyle = "rgba(255,255,255,0.06)";
        contexto.fillRect(barX, barY, barW, barH);

        // Relleno con gradiente
        const grad = contexto.createLinearGradient(barX, barY, barX + barW, barY);
        grad.addColorStop(0, color1);
        grad.addColorStop(1, color2);
        contexto.fillStyle = grad;
        contexto.fillRect(barX, barY, barW * pct, barH);

        // Borde de la barra
        contexto.strokeStyle = "rgba(255,255,255,0.25)";
        contexto.strokeRect(barX, barY, barW, barH);

        // Texto numérico
        contexto.fillStyle = "rgba(255,255,255,0.75)";
        const txt = Math.round(value) + " / " + Math.round(maxValue);
        contexto.fillText(txt, barX + barW + 8, y);
    }

    // Líneas internas del panel
    let line = hudY + 30;
    const step = 22;

    // ENERGY (vida)
    drawBar(
        "ENERGY",
        hudX + 16,
        line,
        jugador.vida,
        100,
        "#2aff9c",
        "#0a8f5a"
    );

    // FUEL
    line += step;
    drawBar(
        "FUEL",
        hudX + 16,
        line,
        jugador.fuel,
        100,
        "#33aaff",
        "#0050aa"
    );

    // AMMO (munición)
    line += step;
    drawBar(
        "AMMO",
        hudX + 16,
        line,
        jugador.municion,
        100,
        "#ffcc66",
        "#aa5500"
    );

    // TIME (misma lógica que antes: 100 → lleno, 0 → agotado)
    line += step;
    const timeValue = 100 - (tiempo / 10000) * 100; // equivalente a la barra antigua
    drawBar(
        "TIME",
        hudX + 16,
        line,
        timeValue,
        100,
        "#ff8888",
        "#aa0000"
    );

    // Línea de información: nivel y puntuación
    line += step;
    contexto.fillStyle = "rgba(255,255,255,0.9)";
    contexto.fillText(
        "LVL " + nivel + "   SCORE " + jugador.puntos,
        hudX + 16,
        line
    );

    contexto.restore();
}

