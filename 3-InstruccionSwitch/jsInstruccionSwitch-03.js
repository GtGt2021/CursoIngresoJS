/*
Gustavo Vargas
switch 03


*/
function mostrar()
{

var mes;
mes=document.getElementById("txtIdMes").value;

switch (mes){
	case "Febrero":
	alert("Este mes no tiene mas de 29 dias");
	break;
	default:
	alert("Este mes tiene mas de 30 dias o mas");
}
	
}