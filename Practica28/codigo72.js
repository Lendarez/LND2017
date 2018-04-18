/*
Ejercicio 1

para la 

practica 28
*/
function Calcular() {
	var numero = document.getElementById("numero").value;
    var factorial = parseInt(numero);
    alert("El factorial de "+ numero + " es " + Recursividad(factorial));
}

function Recursividad(n) {

    if (n < 0) {
        alert("Imposible realizar la operación");
    }
    else if (n == 0) {
        return 1;
    }
    else {
        return (n * Recursividad(n-1));
    }
}