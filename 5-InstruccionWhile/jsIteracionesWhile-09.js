/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	banderaDelPrimero=1;
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese Numero");
		numeroIngresado=parseInt(numeroIngresado);
		if (banderaDelPrimero==1){
			numeroMaximo=numeroIngresado;
			console.log(numeroMaximo);
			numeroMinimo=numeroIngresado;
			console.log(numeroMinimo);
			banderaDelPrimero=banderaDelPrimero+1;
		}

		if (numeroIngresado<numeroMinimo) {
			numeroMinimo=numeroIngresado;
		}else {
			if (numeroIngresado>numeroMaximo) {
			numeroMaximo=numeroIngresado;
			}
		}
		
		
		
console.log("nMin"+numeroMinimo);
console.log("nMax"+numeroMaximo)

		
		respuesta=prompt("Escriba Si para Continuar?");
	}

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}