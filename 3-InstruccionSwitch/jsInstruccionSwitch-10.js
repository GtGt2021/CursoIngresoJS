/*
Gustavo Vargas
switch 10
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/

function mostrar()
{

var temporada, destino, mensaje;
temporada=document.getElementById("txtIdEstacion").value;
destino=document.getElementById("txtIdDestino").value;

	switch(temporada){
	case "Invierno":
		switch (destino){
			case "Bariloche":
			mensaje=("Se Viaja a este destino en esta temporada");
			break;
			default:
			mensaje=("no se viaja a este destino en esta temporada");
			break;
		}
	break;
	case "Verano":
		switch (destino){
			case "Mar del plata":
			case "Cataratas":
			mensaje=("Se Viaja a este destino en esta temporada");
			break;
			default:
			mensaje=("no se viaja a este destino en esta temporada");
			break;
		}
	break;	
	case "Otoño":
	mensaje=("Se Viaja a este destino en esta temporada");
	break;
	case "Primavera":
		switch (destino){
			case "Bariloche":
			mensaje=("no se viaja a este destino en esta temporada");
			break;
			default:
			mensaje=("Se Viaja a este destino en esta temporada");
		}
	break;	
}
alert(mensaje)
}