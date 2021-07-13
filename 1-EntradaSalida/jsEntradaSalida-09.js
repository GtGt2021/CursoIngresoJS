/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 	/*var sueldo, mensaje;
 	
 	sueldo=parseInt(document.getElementById("txtIdSueldo").value);
 	sueldo=(sueldo*1.1);
 	sueldo=sueldo.toFixed(2);
  	mensaje=("Su Nuevo Salario Luego del Aumento de 10% es de " + sueldo);

 	document.getElementById("txtIdResultado").value=mensaje;
 	*/

	var sueldo, porcentaje, aumento, mensaje;
 	sueldo=parseInt(document.getElementById("txtIdSueldo").value);
 	porcentaje=prompt("Ingrese el Porcentaje que quiere Aumentar");
  	aumento=(sueldo*porcentaje);
  	aumento=(aumento/100);
  	aumento=sueldo+aumento;
  	aumento=aumento.toFixed(2);
  	mensaje=("Su Nuevo Salario Luego del Aumento de " + porcentaje + "% es de $" +aumento);
 	document.getElementById("txtIdResultado").value=mensaje;


}
