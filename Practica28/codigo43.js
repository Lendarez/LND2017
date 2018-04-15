/*
Ejercicio 1

para la 

practica 28
*/
var nuevoH1 = document.createElement("h1");
var titulo = document.createTextNode("4.3");
var suma = document.createElement("p");
var resta = document.createElement("p");
var multiplicacion = document.createElement("p");
var divicion = document.createElement("p");
var modulo = document.createElement("p");
var valores = [true, 3, false, "hola", "adiós", 5];
var n1 = valores[1].toString();
var n2 = valores[5].toString();
var resultado = valores[1]+valores[5];
var resultadoString = resultado.toString();
/*
3.	Determina el resultado de las cinco operaciones matemáticas (suma, resta, división, multiplicación y módulo)
	realizadas con los dos elementos numéricos del array.
*/
nuevoH1.appendChild(titulo);
document.body.appendChild(nuevoH1);
var texto = document.createTextNode(n1+"+"+n2+"= "+resultadoString);
suma.appendChild(texto);
document.body.appendChild(suma);
//Resta
resultado = valores[1]-valores[5];
resultadoString = resultado.toString();
texto = document.createTextNode(n1+"-"+n2+"= "+resultadoString);
resta.appendChild(texto);
document.body.appendChild(resta);
//Multiplicacion
resultado = valores[1]*valores[5];
resultadoString = resultado.toString();
texto = document.createTextNode(n1+"x"+n2+"= "+resultadoString);
multiplicacion.appendChild(texto);
document.body.appendChild(multiplicacion);
//Division
resultado = valores[1]/valores[5];
resultadoString = resultado.toString();
texto = document.createTextNode(n1+":"+n2+"= "+resultadoString);
divicion.appendChild(texto);
document.body.appendChild(divicion);
//Modulo
resultado = valores[1]%valores[5];
resultadoString = resultado.toString();
texto = document.createTextNode("El resto de "+n1+" entre "+n2+" es: "+resultadoString);
modulo.appendChild(texto);
document.body.appendChild(modulo);