var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

dibujarLinea(colorcito, 0, 0, 0, 300);
dibujarLinea(colorcito, 0, 300, 300, 300);
dibujarLinea(colorcito, 300, 300, 300, 0);
dibujarLinea(colorcito , 0, 0, 300, 0);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{ 
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.moveTo(xinicial, yinicial);
   lienzo.lineTo(xfinal, yfinal);
   lienzo.stroke();
   lienzo.closePath(); 
}
function dibujoPorClick()
{
   
var lineas = parseInt(texto.value);
var l = 0;
var yi, xf; 
var colorcito = purple;
var espacio = ancho / lineas;

console.log(lienzo);

for(l = 0; l < lineas; l++)
{
   yi = espacio * l;
   xf = espacio * (l + 1);
   dibujarLinea(colorcito, 0, yi, xf, 300);
   console.log("Linea" + l);
}

for(l = 0; l < lineas; l++)
{
   yi = 300 - (l * espacio);
   xf = 290 - (l * espacio);
   dibujarLinea(colorcito, 300, yi, xf, 0);
   console.log("Linea" + l);
}

for(l = 0; l < lineas; l++)
{
   yi = 300 - (l * espacio);
   xf = 10 + (l * espacio);
   dibujarLinea(colorcito, 0, yi, xf, 0);
   console.log("Linea" + l);
}

for(l = 0; l < lineas; l++)
{
   yi = l * espacio;
   xf = 290 - (l * espacio);
   dibujarLinea(colorcito, 300, yi, xf, 300);
   console.log("Linea" + l);
}
   
}