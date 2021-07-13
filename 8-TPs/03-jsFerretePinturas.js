/*3.	
Autor: Gustavo Vargas
TPs ejercicio 3
Para el departamento 
de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados 
con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
(ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 

{
	var temperF, temperC;
	temperF=parseFloat(document.getElementById("txtIdTemperatura").value);
	temperC=(temperF-32) * 5/9;
	temperC=temperC.toFixed(2);
	alert(temperF + " Grados Fahrenheit Son " + temperC + " grados Centigrados");
	document.getElementById('txtIdTemperatura').value = "";

}

function CentigradosFahrenheit () 
{
	var temperF, temperC;
	temperC=parseFloat(document.getElementById("txtIdTemperatura").value);
	temperF=(temperC*1.8) + 32;
	temperF=temperF.toFixed(2);
	alert(temperC + " Grados Centigrados Son " + temperF + " grados Fahrenheit");
	document.getElementById('txtIdTemperatura').value = "";
	//ºF = (ºC · 1,8) + 32
}
