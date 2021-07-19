/*
gustavo Vargas
tp07
Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var tirada;

function comenzar()
{
	tirada=Math.random();  // Math.random() genero aleatorio
	tirada=tirada*3; // 
	tirada=parseInt(tirada);
	tirada=tirada+1;	
	console.log('Numero Computador: '+tirada);

}//FIN DE LA FUNCIÓN hay genero un numero del 1 al 3 para la jugada de la pc piedra papel o tijera


function piedra()
{
	console.log('functionPiedra: '+tirada);
	switch (tirada) {
		case 1:
		alert("empates");
		break;
		case 2:
		alert("Papel le Gana a piedra");
		break;
		case 3:
		alert("Piedra le Gana a Tijera");
				break;
	}
}//FIN DE LA FUNCIÓN


function papel()
{
	console.log('functionPapel: '+tirada);
	switch (tirada) {
		case 1:
		alert("Papel le Gana a piedra");
		break;
		case 2:
		alert("Empate");
		break;
		case 3:
		alert("Tijera le Gana a Papel");
		break;
	}
}//FIN DE LA FUNCIÓN


function tijera()
{
	console.log('functionTijera: '+tirada);
	switch (tirada) {
		case 1:
		alert("Piedra Gana a Tijera");
		break;
		case 2:
		alert("Tijera Gana a Papel");
		break;
		case 3:
		alert("Empate");
		break;
	}
}//fn fcn