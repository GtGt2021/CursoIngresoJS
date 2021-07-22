/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var banderaMultiplicacion;
	banderaMultiplicacion=false;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingresar Numero");
		numeroIngresado=parseInt(numeroIngresado);
		if (numeroIngresado>=0) {
			sumaPositivos=sumaPositivos+numeroIngresado;
		}else{
			banderaMultiplicacion=true;
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
		}
		
		respuesta=prompt("Ingrese (si) para Sumar otro Numero o cualquier otra tecla ir al final");
	}
	if (banderaMultiplicacion==false) {
		multiplicacionNegativos=0;
	}

	document.getElementById("txtIdSuma").value=("Suma de los positivos "+ sumaPositivos);
	document.getElementById("txtIdProducto").value=("Multiplicacion Negativos " + multiplicacionNegativos);


}