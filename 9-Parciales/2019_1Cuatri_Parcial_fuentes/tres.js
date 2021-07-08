/*3.	
Autor: Gustavo Vargas
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
function mostrar()
{
 var precio, porcentaj, descuento;

 precio=prompt("Ingresar Precio del Articulo");
 porcentaj=prompt("Ingresar el porcentaje de descuento");
 precio=parseInt(precio);
 porcentaj=parseInt(porcentaj);
 descuento=(precio*porcentaj);
 descuento=(descuento/100);
 descuento=(precio-descuento);
 document.getElementById("elPrecioFinal").value=descuento;


}
