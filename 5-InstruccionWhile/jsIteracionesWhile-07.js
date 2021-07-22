/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta="si";
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingresar Numero a promediar");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contador=contador+1;
		respuesta=prompt("Ingrese (si) para Sumar otro Numero o cualquier otra tecla para promediar");
	}

	document.getElementById("txtIdSuma").value=("Suma Acumulada "+ acumulador);
	document.getElementById("txtIdPromedio").value=("Promedio " + acumulador/contador);
}