/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1, precio2, precio3, Sum;
	Precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
	Precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
	Precio3=parseInt(document.getElementById("txtIdPrecioTres").value);
	Sum = Precio1 + Precio2 + Precio3;
 	alert("La Suma de los tres Articulos es " + Sum);
}
function Promedio () 
{
	var precio1, precio2, precio3, Promedi;	
	Precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
	Precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
	Precio3=parseInt(document.getElementById("txtIdPrecioTres").value);
	Promedi = Precio1 + Precio2 + Precio3;
	Promedi = Promedi/3
	alert("El promedio de los articulos es " + Promedi);
}
function PrecioFinal () 
{
	var precio1, precio2, precio3, sumamasIva;
	Precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
	Precio2=parseInt(document.getElementById("txtIdPrecioDos").value);
	Precio3=parseInt(document.getElementById("txtIdPrecioTres").value);
	sumamasIva = Precio1 + Precio2 + Precio3;
	sumamasIva = sumamasIva * 1.21
	alert("el precio final de la suma de los articulos es " + sumamasIva);


}