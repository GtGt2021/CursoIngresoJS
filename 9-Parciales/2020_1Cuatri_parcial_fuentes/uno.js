/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
var precio, marca, fabricante, tipo, precioABar, cantidad, fabricanteABar, cantidadABar, mensaje, mensaje2, mensaje3, banderaA=true; 
var cantidadUA=0, cantidadUB=0, cantidadUJ=0; cantidadCA=0; cantidadCB=0; cantidadCJ=0;

for (var i=0; i<3; i++){

tipo=prompt("Ingresar Tipo de Producto: alcohol, barbijo, jabon");
while (tipo!="alcohol" && tipo!="barbijo" && tipo!="jabon"){
	tipo=prompt("Ingresar Tipo de Producto: alcohol, barbijo, jabon");
}
precio=parseInt(prompt("Ingresar Precio Valores entre 100-300"));
while (precio<100 || tipo>300){
	precio=parseInt(prompt("Error, Ingresar Precio Valores entre 100-300"));
}
cantidad=parseInt(prompt("Ingresar Cantidad Valores entre 0-1000"));
while (cantidad<=0 || cantidad>1000){
	cantidad=parseInt(prompt("Error, Ingresar Cantidad Valores entre 0-1000"));
}
marca=prompt("Ingresar Marca");
fabricante=prompt("Ingresar Fabricante");
// (1) Barbijo (2) Jabon (3) Alcohol
if (tipo=="alcohol"){
	if (banderaA==true){
		fabricanteABar=fabricante;
		cantidadABar=cantidad;
		banderaA=false;
		precioABar=precio
	}	else {
			if (precioABar>precio) {
				fabricanteABar=fabricante;
				cantidadABar=cantidad;
				precioABar=precio;
		}

	}
}
switch (tipo){
	case "alcohol":
	cantidadUA=cantidadUA+cantidad;
	cantidadCA=cantidadCA+1;
	break;
	case "barbijo":
	cantidadUB=cantidadUB+cantidad;
	cantidadCB=cantidadCB+1;
	break;
	case "jabon":
	cantidadUJ=cantidadUJ+cantidad;
	cantidadCJ=cantidadCJ+1;
	break;
}

}
console.log("cantidad jabon: "+cantidadUJ);
console.log("cantidad barbijo: "+cantidadUB);
console.log("cantidad alcohol: "+cantidadUA);
if (cantidadUJ>cantidadUB && cantidadUJ>cantidadUA) {
	mensaje2="promedio por compra tipo(jabon) con mas unidades: "+cantidadUJ/cantidadCJ;
} else {
	if (cantidadUB>cantidadUJ && cantidadUB>cantidadUA) {
		mensaje2="promedio por compra (barbijo) con mas unidades: "+cantidadUB/cantidadCB;
	}else {
		mensaje2="promedio por compra (alcohol) con mas unidades: " +cantidadUA/cantidadCA;
	}

}
mensaje3="hay "+ cantidadUJ+ " unidades de jabon";
mensaje="el alcohol mas barato es de: "+ fabricanteABar + " y su precio es: " + precioABar;
document.write(mensaje);
document.write(mensaje2);
document.write(mensaje3);
}
