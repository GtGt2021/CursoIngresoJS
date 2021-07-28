/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación 
que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
*/

var numeroPositivo;
function ComenzarIngreso () 
{
	numeroPositivo=document.getElementById("txtIdNumero").value;
	numeroPositivo=parseInt(numeroPositivo);
while (numeroPositivo<0){
	numeroPositivo=prompt("Error en Numero, Ingreselo Nuevamente (Recuerde debe ser Positivo)");
	numeroPositivo=parseInt(numeroPositivo);
	document.getElementById("txtIdNumero").value=numeroPositivo;
}

}


//Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
function NumerosPares ()
{
	ComenzarIngreso ();
	var cantidadPares=0;
	if (numeroPositivo%2==0) {
			cantidadPares=numeroPositivo/2;	
			alert("Cantidad Pares Desde el Numero Ingresado a Cero: "+cantidadPares);
	}else {
			alert("Numero Impar")
	}


}


//Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
function NumerosImpares ()
{
	ComenzarIngreso ();
	var cantidadImpares;
	if (numeroPositivo%2==1) {
			cantidadImpares=numeroPositivo/2+.5;	
			alert("Cantidad Impares Desde el Numero Ingresado a Cero: " +cantidadImpares);
	}else {
			alert("Numero par");
	}

}


//Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 
//1 al 100.
function NumerosDivisibles ()
{
	ComenzarIngreso ();
	var divisor=1;
	var contadorDivisible=0;
	while  (divisor<(numeroPositivo/2) && divisor<=100){
		if (numeroPositivo%divisor==0) {
			contadorDivisible=contadorDivisible+1;
			console.log(numeroPositivo%divisor);
		}
	divisor=divisor+1;
	console.log(divisor);
	}
alert("el numero "+numeroPositivo+" es divisible entre " +contadorDivisible+ " numero incluyendo el 1 (sin incluir el "+numeroPositivo+")");

}


//Se pedirán un número positivo y se mostrará si el número es un número primo o no.
function VerificarPrimo ()
{
	ComenzarIngreso ();
	var divisor=2;
	var banderaPrimo=true;
	while (divisor<numeroPositivo && banderaPrimo==true){ 
		if (numeroPositivo%divisor==0) {
			banderaPrimo=false;
		} else {
			divisor=divisor+1;
		}
	}
if (banderaPrimo==true && numeroPositivo!=1) {
	alert("Es Primo");
	} else {
	alert("no Es Primo");
}
}


//Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
function NumerosPrimos() 
{
	ComenzarIngreso ();
	var divisor=2;
	var banderaPrimo=true;
	var contadorPrimos=0;
	

	while (numeroPositivo>0){

		while (divisor<numeroPositivo && banderaPrimo==true){ 
			if (numeroPositivo%divisor==0) {
				banderaPrimo=false;
			} else {
				divisor=divisor+1;
			}
		}

		if (banderaPrimo==true && numeroPositivo!=1){
			contadorPrimos=contadorPrimos+1;
			console.log("primo encontrado: "+numeroPositivo);
		} else {
			banderaPrimo=true;
		}

		numeroPositivo=numeroPositivo-1;
		divisor=2;
	}
	alert(contadorPrimos);
}