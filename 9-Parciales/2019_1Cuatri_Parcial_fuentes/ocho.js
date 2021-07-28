/*
Gustavo Vargas
Div J
Parcial 2019 08
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos,
 una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)*/
function mostrar()
{
var numero, letra, promedioPositivos, minimo, maximo;
var sumaNegativos=0;
var cantidadCeros=0;
var cantidadPares=0;
var cantidadPositivos=0;
var cantidadImpares=0;
var sumaPositivos=0;
var respuesta="s";
var primero=true;
var letraMax;
var LetraMin;


while (respuesta=="S" || respuesta=="s"){

letra=prompt("Ingrese una letra");
numero=prompt("Ingrese Numero entre -100 a 100");
numero=parseInt(numero);
while (numero<-100 || numero>100){
	numero=prompt("Dato invalido, Ingrese Numero entre -100 a 100");
	numero=parseInt(numero);
}
console.log(numero);
console.log(letra);
if (numero==0) {
	cantidadCeros=cantidadCeros+1;
	console.log("Ceros" + cantidadCeros);
}else{
	if (numero%2==0) {
		cantidadPares=cantidadPares+1;
		console.log("pares"+cantidadPares);
	}else {
		cantidadImpares=cantidadImpares+1;
		console.log("impares"+cantidadImpares);
	}	
}
if (primero==true) {
	minimo=numero;
	maximo=numero;
	letraMax=letra;
	LetraMin=letra;
	primero=false;
}else{
	if (numero<minimo) {
		minimo=numero;
		LetraMin=letra;
	}else {
		if (numero>maximo) {
			maximo=numero;
			letraMax=letra;
		}
	}
}

if (numero>0) {
	sumaPositivos=sumaPositivos+numero;
	cantidadPositivos=cantidadPositivos+1;
}	else {
	sumaNegativos=sumaNegativos+numero;
}

respuesta=prompt("¿Desea Continuar? Ingres la Letra (S) o cualquier otra tecla para salir");
}
if (cantidadPositivos!=0) {
promedioPositivos=sumaPositivos/cantidadPositivos;
} else {
	promedioPositivos=0;
}
document.write("Cantidad de Pares: "+ cantidadPares);
document.write('<br>',"Cantidad de Impares: "+ cantidadImpares);
document.write('<br>',"Cantidad de Ceros: "+ cantidadCeros);
document.write('<br>',"Promedio de los Positivos: "+ promedioPositivos);
document.write('<br>',"Suma de los Negativos: "+ sumaNegativos);
document.write('<br>',"numero y letra Maximo: "+ letraMax+maximo);
document.write('<br>',"numero y letra Minimo: "+ LetraMin+minimo);


}
