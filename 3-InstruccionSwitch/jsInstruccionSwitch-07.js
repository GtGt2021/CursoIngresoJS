/*
Gustavo Vargas
switch 07

*/
function mostrar()
{
	var destino,
	destino=document.getElementById("txtIdDestino").value;
	
		switch(destino){
		case "Bariloche":
		alert(destino + " Ubicado al Oeste del Pais");
		break;
		case "Ushuaia":
		alert(destino + " Ubicado al Sur del Pais");
		break;
		case "Cataratas":
		alert(destino + " Ubicado al Norte del Pais");
		break;
		case "Mar del plata":
		alert(destino + " Ubicado al Este del Pais");
		break;
	}

}//FIN DE LA FUNCIÓN