/*
Ejercicio 1

para la 

practica 28
*/
function Comprobar() {
	var numero = document.getElementById("numero").value;

	if(parseInt(numero) % 2 == 0) {
	  alert("El número "+numero+" es par");
	}
	else {
	  alert("El número "+numero+" no es par");
	}
}
