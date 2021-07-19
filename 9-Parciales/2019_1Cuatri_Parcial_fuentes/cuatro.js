/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/
function mostrar()

{
var numero1, numero2, resultado, numeroT;

numero1=prompt("Ingrese numero1");
numero2=prompt("Ingrese numero2");
if (numero1==numero2) {
	alert(numero1+numero2);
}else{
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	if (numero1<numero2) {
		alert(numero1+numero2);
	}else {
		numeroT=numero1-numero2;
		if (numeroT>10) {
			alert("la resta es " + numeroT + " y supero el 10");
		}else {
			alert(numeroT);
		}
		
	}
}
}
