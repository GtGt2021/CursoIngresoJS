/*
Gustavo Vargas
switch 08

*/

function mostrar()
{
	var destino;
	destino=document.getElementById("txtIdDestino").value;
	
		switch(destino){
		case "Bariloche":
		alert(destino + " es un destino frio");
		break;
		case "Ushuaia":
		alert(destino + " es un destino frio");
		break;
		case "Cataratas":
		alert(destino + " es un destino caluroso");
		break;
		case "Mar del plata":
		alert(destino + " es un destino caluroso");
		break;
	}

}