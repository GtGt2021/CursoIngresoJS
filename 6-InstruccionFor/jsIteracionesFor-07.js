function mostrar()
{
	var num, cantidadPares=0;
	num=parseInt(prompt("Ingresar numero"));
	for (i=1; i<=num/2; i++){
		if (num%i==0) {
			document.write("divisor: "+i+'<br>')
			cantidadPares=cantidadPares+1;
		}

	}
document.write("Cantidad de Numeros Divisores Encontrados: "+cantidadPares);

}


/*
		var divisor=1;
	var contadorDivisible=0;
	while  (divisor<(numeroPositivo/2) && divisor<=100){
		if (numeroPositivo%divisor==0) {
			contadorDivisible=contadorDivisible+1;
			console.log(numeroPositivo%divisor);
		}
	divisor=divisor+1;
	console.log(divisor);
	}*/