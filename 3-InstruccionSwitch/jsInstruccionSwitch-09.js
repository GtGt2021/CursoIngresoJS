/*
Gustavo Vargas
switch 09

*/
function mostrar()
{
	
var precio, temporada, destino, porcentaje;
precio=15000;
porcentaje=1;
temporada=document.getElementById("txtIdEstacion").value;
destino=document.getElementById("txtIdDestino").value;

switch(temporada){
	case "Invierno":
	switch (destino){
		case "Bariloche":
		porcentaje=-20;
		break;
		case "Cordoba":
		case "Cataratas":
		porcentaje=10;
		break;
		case "Mar del plata":
		porcentaje=20;
		break;
	}	
	break;
	case "Verano":
	switch (destino){
		case "Bariloche":
		porcentaje=20;
		break;
		case "Cordoba":
		case "Cataratas":
		porcentaje=-10;
		break;
		case "Mar del plata":
		porcentaje=-20;
		break;
	}
	break;	
	case "Otoño":
	case "Primavera":
	switch (destino){
		case "Bariloche":
		case "Cataratas":
		case "Mar del plata":
		porcentaje=-10;
		break;
		case "Cordoba":
		porcentaje=0;
		break;
	}
	break;	
}
porcentaje=(porcentaje/100)*precio;
precio=precio-porcentaje;
alert("El costo del viaje es $" + precio);
}