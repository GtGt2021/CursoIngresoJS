/*
Gustavo Vargas
TP6
.*/

var numeroSecreto; 
var contadorIntentos;
var numeroPrueba;
contadorIntentos=0;
function comenzar(){
	
	numeroSecreto=Math.random();
	numeroSecreto=numeroSecreto*100;
	numeroSecreto=parseInt(numeroSecreto);
	numeroSecreto=numeroSecreto+1;
}

function verificar(){
var direfencia;
contadorIntentos=contadorIntentos+1;
numeroPrueba=parseInt(document.getElementById("txtIdNumero").value);
document.getElementById("txtIdIntentos").value=contadorIntentos;

if (numeroPrueba==numeroSecreto) {
	switch (contadorIntentos){
		case 1:
		alert("usted es un Psíquico”");
		break;
		case 2:
		alert("Excelente Percepcion");
		break;
		case 3:
		alert("Esto es suerte”");
		break;
		case 4:
		alert("Excelente Tecnica");
		break;
		case 5:
		alert("usted está en la media");
		break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		alert("falta técnica");
		break;
		default:
		alert("afortunado en el amor!!");
	}
	document.getElementById("txtIdIntentos").value=("El Numero es " + numeroSecreto + " Intentaste " + contadorIntentos + " Veces");
}else {
	direfencia=numeroSecreto-numeroPrueba;
	if (direfencia<0) {
		alert("te pasaste");
	}
	else {
		alert ("te quedastes corto");
	}
}

document.getElementById("txtIdNumero").value="";

}