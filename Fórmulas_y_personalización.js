function calcularCapitalFinal() {
    // Obtén los valores ingresados por el usuario
    let CI = parseFloat(document.getElementById("capitalInicial").value);
    let i = parseFloat(document.getElementById("tasaInteres").value) / 100; // Convertir a decimal
    let n = parseInt(document.getElementById("periodos").value);
    let t = parseInt(document.getElementById("tiempo").value);

    // Validar los valores ingresados
    if (isNaN(CI) || isNaN(i) || isNaN(n) || isNaN(t) || CI <= 0 || n <= 0 || t <= 0) {
        document.getElementById("resultado").textContent = "Por favor, introduce valores válidos.";
        return;
    }

    // Fórmula para calcular el capital final (CF = CI * (1 + i/n)^(nt))
    let CF = CI * Math.pow(1 + i / n, n * t);

    // Muestra el resultado
    document.getElementById("resultado").textContent = "Capital Final: " + CF.toFixed(2) + " €";
}