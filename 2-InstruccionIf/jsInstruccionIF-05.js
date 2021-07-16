/*
Gustavo Vargas
Instruccion If Ejercicio 5
*/
function mostrar()

{
	var edad;
	edad=parseInt(document.getElementById("txtIdEdad").value);

	if (edad > 17 || edad < 13) {
		alert ("No es Adolescente")
	}  
	
}