/*
Alumno Gustavo Vargas
Parcial 2019 Ejercicio 1
Realizar el algoritmo que  pida los datos necesarios 
para un triángulo equilátero por prompt y que muestre el perímetro por alert. */

function mostrar()
{
	var lado, perime;
	lado=prompt("Ingrese Valor Para 1 Lado Del Triangulo Equilatero a Calcular");
	lado=parseFloat(lado);
	perime=(3*lado);
	perime=perime.toFixed(2);
	alert("El Perimetro es " + perime);


}
