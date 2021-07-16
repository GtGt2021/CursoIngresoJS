/*
Gustavo Vargas
Instruccion If Ejercicio 6 
*/
function mostrar()
{
	var edad;
	edad=parseInt(document.getElementById("txtIdEdad").value);

	if (edad>17) {
		alert("Es Mayor de Edad");
	} else {
		if (edad>12) {
		alert("Es Adolescente");
		} else {
		alert("Es niño");
		}
	}



}//FIN DE LA FUNCIÓN