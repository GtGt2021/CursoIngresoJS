/*3.	
Autor: Gustavo Vargas
A una pareja se le pide los datos para mostrar un mensaje
" ustedes se llaman  xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/
function mostrar()
{
 var nomb1, nomb2, peso1, peso2, pesot, pesop;
 nomb1=prompt("Ingrese Nombre 1");
 nomb2=prompt("ingrese Nombre 2");
 peso1=prompt("ingrese Peso 1");
 peso1=parseFloat(peso1);
 peso2=prompt("ingrese peso 2");
 peso2=parseFloat(peso2);
 pesot=peso1 + peso2;
 pesop=pesot/2;
 peso1=peso1.toFixed(2);
 peso2=peso2.toFixed(2);
 pesop=pesop.toFixed(2);
 pesot=pesot.toFixed(2);
 alert("ustedes se llaman " + nomb1 + " y " + nomb2 + " pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + pesot + " kilos y el promedio de peso " + pesop);
}
