/* Rellenamos un arrary con los nombres de los colores*/
var colores = new Array();
var aleatorio = parseInt((Math.random()*9));
var intentos = 0;
var pistas = 0;
var win = document.createElement('H1');
var text = document.createTextNode("GANAAAASTE! ! !");
win.appendChild(text);
win.id = "win";
colores = [
/*color Css*/[["Black"],["Blue"],["Brown"],["Gray"],["Orange"],["Pink"],["Red"],["White"],["Yellow"]],
/*elegido*/[[false],[false],[false],[false],[false],[false],[false],[false],[false]],
/*Color*/[["Negro"],["Azul"],["Marrón"],["Gris"],["Naranja"],["Rosa"],["Rojo"],["Blanco"],["Amarillo"]]
];

var boton0 = document.createElement('input');
var boton1 = document.createElement('input');
var boton2 = document.createElement('input');
var boton3 = document.createElement('input');
var boton4 = document.createElement('input');
var boton5 = document.createElement('input');
var boton6 = document.createElement('input');
var boton7 = document.createElement('input');
var boton8 = document.createElement('input');

boton0.type = 'button';
boton1.type = 'button';
boton2.type = 'button';
boton3.type = 'button';
boton4.type = 'button';
boton5.type = 'button';
boton6.type = 'button';
boton7.type = 'button';
boton8.type = 'button';

boton0.id = 'boton0'
boton1.id = 'boton1'
boton2.id = 'boton2'
boton3.id = 'boton3'
boton4.id = 'boton4'
boton5.id = 'boton5'
boton6.id = 'boton6'
boton7.id = 'boton7'
boton8.id = 'boton8'

boton0.value = colores[2][0];
boton1.value = colores[2][1];
boton2.value = colores[2][2];
boton3.value = colores[2][3];
boton4.value = colores[2][4];
boton5.value = colores[2][5];
boton6.value = colores[2][6];
boton7.value = colores[2][7];
boton8.value = colores[2][8];



document.getElementById("contenido").appendChild(boton0);
document.getElementById("contenido").appendChild(boton1);
document.getElementById("contenido").appendChild(boton2);
document.getElementById("contenido").appendChild(boton3);
document.getElementById("contenido").appendChild(boton4);
document.getElementById("contenido").appendChild(boton5);
document.getElementById("contenido").appendChild(boton6);
document.getElementById("contenido").appendChild(boton7);
document.getElementById("contenido").appendChild(boton8);


document.getElementById("boton0").onclick = function () { acerteCon(0) };
document.getElementById("boton1").onclick = function () { acerteCon(1) };
document.getElementById("boton2").onclick = function () { acerteCon(2) };
document.getElementById("boton3").onclick = function () { acerteCon(3) };
document.getElementById("boton4").onclick = function () { acerteCon(4) };
document.getElementById("boton5").onclick = function () { acerteCon(5) };
document.getElementById("boton6").onclick = function () { acerteCon(6) };
document.getElementById("boton7").onclick = function () { acerteCon(7) };
document.getElementById("boton8").onclick = function () { acerteCon(8) };

colores[1][aleatorio] = true;

function acerteCon(numero)
{
    if (colores[1][numero] == true) {
    	
    	alert("Lo adivinaste! ! !\n Intentos realizados: "+intentos+".\n Pistas solicitadas: "+pistas+".");
    	document.getElementById("contenido").appendChild(win);
    	var reloj = setInterval(cambiaFondo, 250);
    }else{
    	var respuesta;

    	if (confirm("oooh, no has acertado ¿quieres una pista?")) {
    	    respuesta = true;
    	    pistas++;
    	    intentos++;
    	} else {
    	    respuesta = false;
    	    intentos++;
    	}

    	if (respuesta) {
    		if (colores[2][aleatorio] > colores[2][numero] ) {
    			alert("El color que pienso está despues de "+colores[2][numero]+" en el abcedario.");
    		}else {
    			alert("El color que pienso está antes de "+colores[2][numero]+" en el abcedario." );
    		}
    	}else {
    		alert("Deacuerdo, mejor suerte para la próxima vez");
    	}
    }
}

function cambiaFondo() {
    document.body.style.backgroundColor = colores[0][aleatorio];
    aleatorio = parseInt((Math.random()*9));
}