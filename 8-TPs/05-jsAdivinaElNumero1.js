/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroPrueba;
contadorIntentos=0;
function comenzar(){
	
	numeroSecreto=Math.random();
	numeroSecreto=numeroSecreto*100;
	numeroSecreto=parseInt(numeroSecreto);
	numeroSecreto=numeroSecreto+1;
	console.log(numeroSecreto)
}

function verificar(){
var direfencia;
contadorIntentos=contadorIntentos+1;
numeroPrueba=parseInt(document.getElementById("txtIdNumero").value);
document.getElementById("txtIdIntentos").value=contadorIntentos;


if (numeroPrueba==numeroSecreto) {
	alert("Usted es Ganador y solo en " + contadorIntentos + " Intentos");
	document.getElementById("txtIdIntentos").value=("El Numero es " + numeroSecreto + " Intentaste " + contadorIntentos + " Veces");
}else {
	direfencia=numeroSecreto-numeroPrueba;
	if (direfencia<0) {
		alert("te pasaste");
		console.log(direfencia)
	}
	else {
		alert ("te quedastes corto");
		console.log(direfencia)
	}
}

document.getElementById("txtIdNumero").value="";

}