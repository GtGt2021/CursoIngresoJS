/*
Gustavo Vargas
Div J
Parcial 2019 Ejercicio 4
*/
function mostrar()
{

var numero1, numero2, numeroT, mensaje;

numero1=prompt("Ingrese numero1");
numero2=prompt("Ingrese numero2");
if (numero1==numero2) {
	mensaje=(numero1+numero2);
}else{
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	if (numero1<numero2) {
		mensaje=(numero1+numero2);
	}else {
		numeroT=numero1-numero2;
		if (numeroT>10) {
			mensaje=("la resta es " + numeroT + " y supero el 10");
		}else {
			mensaje=(numeroT);
		}
		
	}
}
alert(mensaje)

}
