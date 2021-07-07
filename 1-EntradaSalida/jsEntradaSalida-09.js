/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 	var Sueldo, Porcentaje, Aumento;
 	
 	Sueldo=parseInt(document.getElementById("txtIdSueldo").value);
 	Porcentaje=prompt("Ingrese el Porcentaje que quiere Aumentar");
  	Aumento=(Sueldo*Porcentaje);
  	Aumento=(Aumento/100);
  	Aumento=Sueldo + Aumento;

 	document.getElementById("txtIdResultado").value=Aumento;


}
