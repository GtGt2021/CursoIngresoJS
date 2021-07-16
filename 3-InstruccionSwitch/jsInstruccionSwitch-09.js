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
		if (destino=="Bariloche"){
			porcentaje=1.2;
		} else{
			if (destino=="Mar del plata") {
				porcentaje=.8;
			}else{
				porcentaje=.9;
			}
		}
	break;
	case "Verano":
		if (destino=="Bariloche"){
			porcentaje=.8;
		} else{
			if (destino=="Mar del plata") {
				porcentaje=1.2;
			}else{
				porcentaje=1.1;
			}
		}
	break;	
	case "Otoño":
	case "Primavera":
		if (destino=="Cordoba"){
			porcentaje=1;
		} else{
			porcentaje=1.1;
		}
	break;	
}
precio=precio*porcentaje
alert("El costo del viaje es $" + precio);
}