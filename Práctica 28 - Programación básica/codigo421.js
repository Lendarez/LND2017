/*
Ejercicio 1

para la 

practica 28
*/
var nuevoH1 = document.createElement("h1");
var titulo = document.createTextNode("4.2.1");
var nuevoP = document.createElement("p");
var valores = [true, 3, false, "hola", "adiós", 5];
/*
1.	Determina cuál de los dos elementos de texto es mayor.
2.	Utilizando exclusivamente los dos valores booleanos del array ylos operadores lógicos,
	muestra un resultado true y otro resultado false.
3.	Determina el resultado de las cinco operaciones matemáticas (suma, resta, división, multiplicación y módulo)
	realizadas con los dos elementos numéricos del array.
*/

if (valores[0] == valores[2]) {
	var resultado = document.createTextNode('El valor 0 del array "valores" es igual que el valor 2 del mismo array: '+true);
}else{
	var resultado = document.createTextNode('El valor 0 del array "valores" es igual que el valor 2 del mismo array: '+false);
}
nuevoP.appendChild(resultado);
nuevoH1.appendChild(titulo);
document.body.appendChild(nuevoH1);
document.body.appendChild(nuevoP);