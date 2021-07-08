/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var ancho, largo, alambre;
ancho=parseInt(document.getElementById("txtIdAncho").value);
largo=parseInt(document.getElementById("txtIdLargo").value);
alambre=2*ancho + 2*largo;
alambre=3*alambre;
alert("Se Necesitan " + alambre + "Metros");

}
function Circulo () 

{

var radio, alambre;
radio=parseInt(document.getElementById("txtIdRadio").value);
alambre=2 * Math.PI * radio;
alambre=3 * alambre;
alert("Se Necesitan " + alambre + "Metros");

	
}
function Materiales () 
{
var ancho, largo, cemento, cal, area;
ancho=parseInt(document.getElementById("txtIdAncho").value);
largo=parseInt(document.getElementById("txtIdLargo").value);
area=ancho*largo;
cemento=area*2;
cal=area*3;



alert("Se Necesitan " + cemento + " bolsas de Cemento y " + cal + " bolsas de Cal");

}