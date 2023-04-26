function calcularPromedio() {
    var calif1 = parseInt(document.getElementById("calif1").value);
    var porc1 = parseInt(document.getElementById("porc1").value);
    var calif2 = parseInt(document.getElementById("calif2").value);
    var porc2 = parseInt(document.getElementById("porc2").value);
    var calif3 = parseInt(document.getElementById("calif3").value);
    var porc3 = parseInt(document.getElementById("porc3").value);
    var calif4 = parseInt(document.getElementById("calif3").value);
    var porc4 = parseInt(document.getElementById("porc3").value);

    var totalPorc = porc1 + porc2 + porc3 + porc4;
    var promedio = ((calif1 * porc1) + (calif2 * porc2) + (calif3 * porc3) + (calif4 * porc4)) / totalPorc;

    document.getElementById("resultado").innerHTML = promedio.toFixed(2);
}
