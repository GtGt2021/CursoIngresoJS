/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
//Declaramos Las Variables
var numer1, numer2, sumatoria;
//Tomamos los valores de las dos cajas de texto y las asignamos a las variables
numer1=document.getElementById("txtIdNumeroUno").value;
numer2=document.getElementById("txtIdNumeroDos").value;
//con parseInt convertimos en enteros estos datos
numer1=parseInt(numer1);
numer2=parseInt(numer2);
//ya convertidos en enteros sumamos
sumatoria=numer1+numer2;


// mostramos el mensaje con la suma
	alert("La Suma es " + sumatoria);
}

