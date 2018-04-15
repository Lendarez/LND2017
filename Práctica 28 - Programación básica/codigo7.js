/*
Ejercicio 1

para la 

practica 28
*/
function Calcular() {
	var numero = document.getElementById("numero").value;
	var nMultiplicador = parseInt(numero) - 1;
	var resultadoString = numero.toString();
	var resultadoInt = parseInt(numero);
	do {
		resultadoString += "x"+ nMultiplicador.toString();
		resultadoInt *= nMultiplicador
		nMultiplicador--;
	} while (parseInt(nMultiplicador) >= 1);
		resultadoString = resultadoString + "=";
		alert("El factorial de \""+numero+"\""+" son:\n"+resultadoString+resultadoInt);
}
