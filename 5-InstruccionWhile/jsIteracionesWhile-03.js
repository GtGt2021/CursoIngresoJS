/*
Gustavo Vargas
Div J
While 03
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{

var claveIngresada;
claveIngresada=prompt("ingrese la clave.");
	while (claveIngresada!="utn750")
	{
		claveIngresada=prompt("Clave incorrecta Intente Nuevamente");
	}
alert("Bienvenido");

}