/*
Ejercicio 1

para la 

practica 28
*/
function Comprobar() {
	var frase = document.getElementById("frase").value;
	if (frase.toUpperCase() == frase){
		alert("La frase: \""+frase+"\" está compuesta por mayúsculas");
	}else if (frase.toLowerCase() == frase) {
		alert("La frase: \""+frase+"\" está compuesta por minúsculas");
	}else {
		alert("La frase: \""+frase+"\" está compuesta por mayúsculas y minúsculas");
	}
}