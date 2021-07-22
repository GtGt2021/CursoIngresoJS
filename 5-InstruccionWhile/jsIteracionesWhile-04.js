/*
Gustavo Vargas
Div J
While 04
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado=prompt("ingrese un número entre 0 y 10.");
	numeroIngresado=parseInt(numeroIngresado);
	while(numeroIngresado<0 || numeroIngresado>=10)
	{
		numeroIngresado=prompt("Numero ingresado No esta entre 0-9, Intente Nuevamente");
	}
	document.getElementById("txtIdNumero").value=("El Numero Ingresado es Valido: " + numeroIngresado);
}