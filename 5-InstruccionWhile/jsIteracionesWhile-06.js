function mostrar()
{
	
	var contador;
	var acumulador;
	var numeroIngresado;
	var numeros;
	numeros=prompt("Cuantos Numeros Quiere Promediar");
	numeros=parseInt(numeros);
	contador=0;
	acumulador=0;
	while(contador<numeros)
	{
		numeroIngresado=prompt("Ingresar Numero a promediar");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
	}

	document.getElementById("txtIdSuma").value=("Suma Acumulada "+ acumulador);
	document.getElementById("txtIdPromedio").value=("Promedio " + acumulador/numeros);
}