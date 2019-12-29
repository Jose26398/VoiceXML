function calcularPrecioFinal(precioBase, lugar, horario, movilidad, otraDiscapacidad) {
    var precioFinal = parseFloat(precioBase);

    if (lugar == "palacio carlos quinto" || lugar == "palacio de carlos quinto") {
        precioFinal = 0.0;
    } else {
        if (horario == "noche") {
            precioFinal *= 1.5;
        }

        if (movilidad == "si") {
            precioFinal *= 0.25;
        }

        if (otraDiscapacidad == "si") {
            precioFinal *= 0.5;
        }
    }

    return Math.round(precioFinal * 100) / 100;
}