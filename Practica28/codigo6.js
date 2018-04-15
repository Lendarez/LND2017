/*
Ejercicio 1

para la 

practica 28
*/

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
function Validar() {
	var dni = document.getElementById("dni").value;
	var resto = dni % 23;
	var letra = document.getElementById("letra").value;

	if (parseInt(dni) < 0 || parseInt(dni) > 99999999 ) {
		alert("El número facilitado es erroneo.");
	}else {
		if (letra.toUpperCase() == letras[resto]){
			alert("El D.N.I.: "+dni+letra.toUpperCase()+" es correcto.");
		}else {
			alert("El D.N.I.: "+dni+letra.toUpperCase()+" es incorrecto.");
		}
	}
}
