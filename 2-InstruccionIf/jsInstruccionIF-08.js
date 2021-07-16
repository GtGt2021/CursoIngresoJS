/*
Gustavo Vargas
Instruccion If Ejercicio 8
*/

function mostrar()
{
	var edad, estado;
	edad=parseInt(document.getElementById("txtIdEdad").value);
	estado=document.getElementById("estadoCivil").value;

	if (edad>18 && estado=="Soltero") {
		alert('Es soltero y no es menor');
	}

}