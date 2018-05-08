var divIzquierdo = document.getElementById("izq"), divDerecho = document.getElementById("dch"), nAciertos = 0, nSmile = 5;

function rellenar() {
  for (var i = 0; i < nSmile; i++) {
    var smile = document.createElement("img");
    smile.src = "./smile.png";
    smile.style.top = (Math.floor(Math.random() * 400+1) + "px");
    smile.style.left = (Math.floor(Math.random() * 400+1) + "px");
    divIzquierdo.appendChild(smile);
  }

var clon = divIzquierdo.cloneNode(true);
    clon.removeChild(clon.lastElementChild);
  divDerecho.appendChild(clon);

  divIzquierdo.lastChild.onclick =
    function multiplicar(estado) {
      estado.stopPropagation();
      nSmile += 5;
      nAciertos++;
      while (divIzquierdo.firstChild) {
        divIzquierdo.removeChild(divIzquierdo.firstChild);
      }
      while (divDerecho.firstChild) {
        divDerecho.removeChild(divDerecho.firstChild);
      }
      rellenar();
    }

var cuerpo = document.getElementsByTagName("body")[0];
  cuerpo.onclick =
    function fallo() {
      alert("FALLASTE, llegaste hasta la ronda " + nAciertos);
      location.reload(true);
    }
}