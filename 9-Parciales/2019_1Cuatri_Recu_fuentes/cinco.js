function mostrar()
{
var continente, tipoDePago, descuento, precio=100, precioFinal;
continente=document.getElementById("selecContinente").value;
tipoDePago=document.getElementById("selecPago").value;

switch (continente){
	case "America":
	switch (tipoDePago){
		case "Débito":
		descuento=25;
		break;
		default:
		descuento=15;
		break;
	}
	console.log(continente+tipoDePago);
	break;

	case "África":
	case "Oceania":
		switch (tipoDePago){
			case "MercadoPago":
			case "Efectivo":
			descuento=45;
			break;
			default:
			descuento=30;
			break;
		}
	break;

	case "Asia":
	descuento=-20;
	break;
	case "Europa":
		switch (tipoDePago){
			case "Débito":
			descuento=35;
			break;
			case "MercadoPago":
			descuento=30;
			break;
			default:
			descuento=25;
			break;
		}
	break;
}
console.log(descuento);
if (tipoDePago=="Cheque") {
	descuento=descuento-15;
}
descuento=(descuento/100)*precio;
precioFinal=precio-descuento;
alert("El precio por dia para este destino es: " + precioFinal);
}
