/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 

{
	var precio1, precio2, precio3, sum;
	precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
	precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
	precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);
	sum=precio1+precio2+precio3;
	sum=sum.toFixed(2);
 	alert("La Suma de los tres Articulos es $" + sum);
  	document.getElementById("txtIdPrecioUno").value="";
 	document.getElementById("txtIdPrecioDos").value="";
 	document.getElementById("txtIdPrecioTres").value="";
}

function Promedio () 
{
	var precio1, precio2, precio3, promedi;	
	precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
	precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
	precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);
	promedi=precio1+precio2+precio3;
	promedi=promedi/3;
	promedi=promedi.toFixed(2);
	alert("El promedio de los articulos es $" + promedi);
	document.getElementById("txtIdPrecioUno").value="";
 	document.getElementById("txtIdPrecioDos").value="";
 	document.getElementById("txtIdPrecioTres").value="";
	
}


function PrecioFinal () 
{
	var precio1, precio2, precio3, sumaMasIva;
	precio1=parseFloat(document.getElementById("txtIdPrecioUno").value);
	precio2=parseFloat(document.getElementById("txtIdPrecioDos").value);
	precio3=parseFloat(document.getElementById("txtIdPrecioTres").value);
	sumaMasIva=precio1+precio2+precio3;
	sumaMasIva=sumaMasIva*1.21;
	sumaMasIva=sumaMasIva.toFixed(2);
	alert("el precio final de la suma de los articulos es $" + sumaMasIva);
	document.getElementById("txtIdPrecioUno").value="";
 	document.getElementById("txtIdPrecioDos").value="";
 	document.getElementById("txtIdPrecioTres").value="";
}

