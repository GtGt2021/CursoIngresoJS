/*
Gustavo Vargas
switch 04


*/
function mostrar()
{
var mes;
mes=document.getElementById("txtIdMes").value;

switch (mes){
	case "Febrero":
	alert("Este mes tiene 28 dias");
	break;
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
	alert("Este mes tiene 30 dias");
	default:
	alert("Este mes tiene 31 dias");
	break;
}

}