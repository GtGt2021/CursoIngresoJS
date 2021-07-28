
function mostrar()
{
var tipoP, precio, cantidad, i, marca, fabricante, jabonBandera=true, precioJabonC=0, fabricanteJabonC="No se Compraron"; 
var cantidadJabonC=0, cantidadJ=0, cantidadA=0, cantidadB=0, contCantidadB=0, contCantidadA=0, contCantidadJ=0;
var mensajeA, mensajeB, mensajeC;

	for (i=0; i<3; i++){
		tipoP=prompt("Ingresar Tipo de Producto (barbijo, jabon o alcohol)");
		while (tipoP!="barbijo" && tipoP!="jabon" && tipoP!="alcohol"){
			tipoP=prompt("error, Ingresar Tipo de Producto (barbijo, jabon o alcohol)");
		}
		precio=prompt("Ingresar Precio");
		while (precio<100 || precio>300){
			precio=prompt("Error, Ingresar Precio");
		}
		cantidad=prompt("Ingresar cantidad");
		while (precio<=0 || precio>1000){
			cantidad=prompt("Error, Ingresar cantidad");
		}
		marca=prompt("Introducir Marca");
		fabricante=prompt("Introducir Fabrincante");
		if (tipoP=="jabon") {
			if (jabonBandera==true) {
			precioJabonC=precio;
			fabricanteJabonC=fabricante;
			jabonBandera=false;
			cantidadJabonC=cantidad;
			}
		}else {
			if (precioJabonC<precio) {
				precioJabonC=precio;
				fabricanteJabonC=fabricante;
				cantidadJabonC=cantidad;
			}
		}
		switch (tipoP) {
			case "jabon":
			cantidadJ=cantidadJ+cantidad
			contCantidadJ=contCantidadJ+1;
			break;
			case "alcohol":
			cantidadA=cantidadA+cantidad;
			contCantidadA=contCantidadA+1;
			break;
			case "barbijo":
			cantidadB=cantidadB+cantidad;
			contCantidadB=contCantidadB+1;
			break;

		}
	}
	if (cantidadA>cantidadB && cantidadA>cantidadJ) {
		mensajeB="el Producto con mas Compras es Alcohol con unidades: "+cantidadA/contCantidadA;
	}	if (cantidadB>cantidadA && cantidadB>cantidadJ) {
		mensajeB="el Producto con mas Compras es Barbijo con unidades: "+cantidadB/contCantidadB;
		}else {
			mensajeB="el Producto con mas Compras es Jabbon con unidades: "+cantidadJ/contCantidadJ;
		}

	mensajeC="Se compraron "+cantidadB+" Barbijos";
	mensajeA="el jabon mas Caro es del fabricante: " +fabricanteJabonC + " y la cantidad de: " + cantidadJabonC;
	document.write(mensajeA);
	document.write('<br>',mensajeB);
	document.write('<br>',mensajeC);

}
