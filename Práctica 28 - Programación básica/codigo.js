/*
Ejercicio 1

para la 

practica 28
*/
var nuevoP = document.createElement("p");
var edad = document.createTextNode("34");
var tipoVar = document.createTextNode(Object.prototype.toString(edad));
var texto = "Mario Figueroa Alvarez";
//Obtenemos el elemento con id "text" y le insertamos el texto indicado
document.getElementById("text").innerHTML = texto;
//Escribimos en el documento sin usar ningun elemento.
document.write("Esto funciona")
nuevoP.appendChild(edad);
nuevoP.appendChild(tipoVar);
document.body.appendChild(nuevoP);