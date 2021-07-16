/*
Gustavo Vargas
Instruccion If Ejercicio 3
*/
function mostrar()
{
	var edad;
	edad=parseInt(document.getElementById("txtIdEdad").value);

	if (edad>17) {
	alert ("Esta Persona es Mayor de Edad");
	}else {
		alert("Esta Persona es menor de edad");
	}
	
}