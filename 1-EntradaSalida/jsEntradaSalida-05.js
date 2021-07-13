/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Declaramos Variables
	var nombre, edad;
	var mensaje;

	//Tomamos los valores desde las cajas de texto
	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
//concatenamos el mensaje para que llegue como se nos pidio
	mensaje="Usted se llama " + nombre;
	mensaje=mensaje + " y tiene ";
	mensaje=mensaje + edad;
	mensaje=mensaje + " años";
//mostramos el mensaje
	alert(mensaje);
	}


