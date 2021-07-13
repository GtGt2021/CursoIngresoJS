/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	/*var precio, mensaje;
 	
 	precio=parseFloat(document.getElementById("txtIdImporte").value);
   	precio=(precio*0.75);
   	precio=precio.toFixed(2);
   	mensaje=("El Nuevo Precio Luego del Descuento Es $" + precio);
  	
 	document.getElementById("txtIdResultado").value=mensaje;*/





	var precio, descuento, mensaje;
 	
 	precio=parseFloat(document.getElementById("txtIdImporte").value);
 	porcentaje=prompt("Ingrese el porcentaje a Descontar");
 	porcentaje=parseFloat(porcentaje);
  	descuento=(precio*porcentaje);
  	descuento=(descuento/100);
  	descuento=precio-descuento;
  	descuento=descuento.toFixed(2);
  	mensaje=("El nuevo precio del articulo con el " + porcentaje + "% de descuento es de $" + descuento); 

 	document.getElementById("txtIdResultado").value=mensaje;

}
