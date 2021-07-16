/*
Gustavo Vargas
Instruccion If Ejercicio 10
*/

function mostrar()
{

	var rand = Math.random();
	rand=rand*10;
	rand=parseInt(rand);
	rand=rand+1;
	alert(rand);

	if (rand>8) {
		alert("Excelente");
	} 
	else {
		if (rand>4) {
		alert("Aprobado");
		}else {
		alert("Vamos, la proxima se puede");
		}
	}

}