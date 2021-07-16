/*
Gustavo Vargas
switch 10

*/

function mostrar()
{

var temporada, destino;
temporada=document.getElementById("txtIdEstacion").value;
destino=document.getElementById("txtIdDestino").value;

	switch(temporada){
	case "Invierno":
		if (destino=="Bariloche"){
			alert("Se Viaja a este destino en esta temporada");
		} else{
			alert("no se viaja a este destino en esta temporada");
		}
	break;
	case "Verano":
		if (destino=="Mar del plata" || destino=="Cataratas"){
			alert("Se Viaja a este destino en esta temporada");
		} else{
			alert("no se viaja a este destino en esta temporada");
		}
	break;	
	case "Otoño":
	alert("Se Viaja a este destino en esta temporada");
	break;
	case "Primavera":
		if (destino!="Bariloche"){
			alert("Se Viaja a este destino en esta temporada");
		} else{
			alert("no se viaja a este destino en esta temporada");
		}
	break;	
}
}