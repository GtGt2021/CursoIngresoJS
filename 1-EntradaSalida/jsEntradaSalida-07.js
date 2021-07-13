/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()

{	
	var Numero1, Numero2, Resultado;
	Numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	Numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
 	Resultado=Numero1+Numero2;

	alert("La Suma es " + Resultado);
	document.getElementById('txtIdNumeroUno').value = "";
	document.getElementById('txtIdNumeroDos').value = "";
}

function restar()
{
	var Numero1, Numero2, Resultado;
	Numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	Numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	Resultado=Numero1-Numero2;

	alert("La Resta es " + Resultado);
	document.getElementById('txtIdNumeroUno').value = "";
	document.getElementById('txtIdNumeroDos').value = "";
}

function multiplicar()
{ 
	var Numero1, Numero2, Resultado;
	Numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	Numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	Resultado=Numero1*Numero2;

	alert("La multiplicacion es " + Resultado);
	document.getElementById('txtIdNumeroUno').value = "";
	document.getElementById('txtIdNumeroDos').value = "";
}

function dividir()
{
	var Numero1, Numero2, Resultado;
	Numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	Numero2=parseInt(document.getElementById("txtIdNumeroDos").value);
	Resultado=Numero1/Numero2;

	alert("La Division es " + Resultado);
	document.getElementById('txtIdNumeroUno').value = "";
	document.getElementById('txtIdNumeroDos').value = "";
}

