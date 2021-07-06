/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaramos la Variable 
	var nombreIngresado;
	//obtenemos de la caja de texto txtIdNombre el Valor "value" y lo asignamos a la variable
	nombreIngresado=document.getElementById('txtIdNombre').value;
	//mostramos la alerta como nos piden
	alert(nombreIngresado);
	//Dejamos Limpia la Caja de Texto Despues de aceptar la Alerta
 document.getElementById('txtIdNombre').value = "";
}

