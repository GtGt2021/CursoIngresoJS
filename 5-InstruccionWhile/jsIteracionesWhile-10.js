/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var cantidadNegativos=0;
	var promedioNegativos=0;
	var sumaPositivos=0;
	var cantidadPositivos=0; 
	var promedioPositivos=0;
	var cantidadceros=0;
	var diferencia;
	var cantidadPares=0;

	respuesta="si";
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingresar Numero");
		numeroIngresado=parseInt(numeroIngresado);
		if (numeroIngresado%2==0) {
			cantidadPares=cantidadPares+1;
		}

		if (numeroIngresado>0) {
			sumaPositivos=sumaPositivos+numeroIngresado;
			cantidadPositivos=cantidadPositivos+1;
		}else {
			if (numeroIngresado<0) {
				sumaNegativos=sumaNegativos+numeroIngresado;
				cantidadNegativos=cantidadNegativos+1;
			} else {
				cantidadceros=cantidadceros+1
			}
		}

	respuesta=prompt("desea continuar?");
	}
	if (cantidadNegativos!=0) {
		promedioNegativos=sumaNegativos/cantidadNegativos;
	}
	if (cantidadPositivos!=0) {
		promedioPositivos=sumaPositivos/cantidadPositivos;
	}
	if (cantidadPositivos>cantidadNegativos){
		diferencia=cantidadPositivos-cantidadNegativos;	
	}else {
		diferencia=cantidadNegativos-cantidadPositivos;
	}
		

	document.write("la suma de negativos es : "+sumaNegativos);
	document.write('<br>',"la suma de positivos es : "+sumaPositivos);
	document.write('<br>',"la cantidad de ceros es : "+cantidadceros);
	document.write('<br>',"La cantidad de Negativos es: "+cantidadNegativos);
	document.write('<br>',"La cantidad de positivos es: "+cantidadPositivos);
	document.write('<br>',"La cantidad de pares es: "+cantidadPares);
	document.write('<br>',"promedio Positivos es: "+promedioPositivos);
	document.write('<br>',"promedio negativos es: "+promedioNegativos);
	document.write('<br>',"Diferencia entre positivos y Negativos"+diferencia);
}