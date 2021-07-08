/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var Precio;
 	
 	Precio=parseInt(document.getElementById("txtIdImporte").value);
   	Precio=(Precio*0.75);
  	
 	document.getElementById("txtIdResultado").value=Precio;





	/*var Precio, Porcentaje, Descuento;
 	
 	Precio=parseInt(document.getElementById("txtIdImporte").value);
 	Descuento=prompt("Ingrese el Porcentaje a Descontar");
  	Descuento=(Precio*Descuento);
  	Descuento=(Descuento/100);
  	Descuento=Precio - Descuento;

 	document.getElementById("txtIdResultado").value=Descuento;*/

}
