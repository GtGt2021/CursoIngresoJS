/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var ancho, largo, alambre;
ancho=parseFloat(document.getElementById("txtIdAncho").value);
largo=parseFloat(document.getElementById("txtIdLargo").value);
alambre=2*ancho+2*largo;
alambre=3*alambre;
alert("Se Necesitan " + alambre + "Metros");
document.getElementById('txtIdAncho').value = "";
document.getElementById('txtIdLargo').value = "";
document.getElementById('txtIdRadio').value = "";
}
function Circulo () 

{

var radio, alambre;
radio=parseFloat(document.getElementById("txtIdRadio").value);
alambre=2*Math.PI*radio;
alambre=3*alambre;
alambre=alambre.toFixed(2);
alert("Se Necesitan " + alambre + "Metros");
document.getElementById('txtIdAncho').value = "";
document.getElementById('txtIdLargo').value = "";
document.getElementById('txtIdRadio').value = "";
	
}
function Materiales () 
{
var ancho, largo, cemento, cal, area;
ancho=parseFloat(document.getElementById("txtIdAncho").value);
largo=parseFloat(document.getElementById("txtIdLargo").value);
area=ancho*largo;
cemento=area*2;
cemento=cemento.toFixed(0)
cal=area*3;
cal=cal.toFixed(0);
alert("Se Necesitan " + cemento + " bolsas de Cemento y " + cal + " bolsas de Cal");
document.getElementById('txtIdAncho').value = "";
document.getElementById('txtIdLargo').value = "";
document.getElementById('txtIdRadio').value = "";

}