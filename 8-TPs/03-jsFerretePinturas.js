/*3.	
Autor: Gustavo Vargas
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados 
con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit 
(ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperF, temperC;
	temperF=parseInt(document.getElementById("txtIdTemperatura").value);
	temperC=(temperF-32) * 5/9;
	alert(temperF + " Grados Fahrenheit Son " + temperC + " grados Centigrados");
	//(document.getElementById("txtIdTemperatura").value)=("");
}

function CentigradosFahrenheit () 
{
	var temperF, temperC;
	temperF=((celsius*9)/5)+32
}
