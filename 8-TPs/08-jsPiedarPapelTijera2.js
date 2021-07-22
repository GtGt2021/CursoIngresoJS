/*Piedra, Papel o Tijera (v 2.0):
</br>	Ahora debemos informar cuantas veces se ganó, perdió o empató desde la última recarga de página*/


var tirada;
var empates=0;
var ganadas=0;
var perdidas=0;

function comenzar()
{
	tirada=Math.random();
	tirada=tirada*3;
	tirada=parseInt(tirada);
	tirada=tirada+1;	
	console.log(tirada);

}//FIN DE LA FUNCIÓN

function piedra()
{
	
	switch (tirada) {
		case 1:
		alert("empate");
		empates=empates+1;
		break;
		case 2:
		alert("Perdiste: Papel le Gana a piedra");
		perdidas=perdidas+1;
		break;
		case 3:
		alert("Ganaste: Piedra le Gana a Tijera");
		ganadas=ganadas+1;
		break;
	}
	
	mostrarResultado();

}//FIN DE LA FUNCIÓN


function papel()
{
	switch (tirada) {
		case 1:
		alert("Ganaste: Papel le Gana a piedra");
		ganadas=ganadas+1;
		break;
		case 2:
		alert("Empate");
		empates=empates+1;
		break;
		case 3:
		alert("Perdiste: Tijera le Gana a Papel");
		perdidas=perdidas+1;
		break;
	}
	
	mostrarResultado();

}//FIN DE LA FUNCIÓN


function tijera()
{
	switch (tirada) {
		case 1:
		alert("Perdiste: Piedra Gana a Tijera");
		perdidas=perdidas+1
		break;
		case 2:
		alert("Ganaste: Tijera Gana a Papel");
		ganadas=ganadas+1
		break;
		case 3:
		alert("Empate");
		empates=empates+1;
		break;
	}
	
	mostrarResultado();

}

function mostrarResultado()
{
	document.getElementById("txtIdEmpatadas").value=("empatadas: " +empates);
	document.getElementById("txtIdPerdidas").value=("Perdidas: " +perdidas);
	document.getElementById("txtIdGanadas").value=("Ganadas: " +ganadas);
	comenzar()
}
