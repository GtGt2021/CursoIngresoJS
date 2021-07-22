/*
Gustavo Vargas
Div J
Parcial 2019 ej: 5*/
function mostrar()
{
var tipoPago, destino, descuento, total, dias;
tipoPago=prompt("Ingrese Metodo de Pago:\n(Solo escribir el numero)\nMercadopago 1\nDebito 2\nEfectivo 3 \nOtra Forma de Pago 4");
tipoPago=parseInt(tipoPago);
dias=prompt("Ingrese Cantidad de Dias que quiere Vacacionar");
dias=parseInt(dias);
destino=document.getElementById("Marca").value;

/*
mercadopago 1
debito 2
efectivo 3
otra 4
formas de pago 
*/

switch (destino){
	case "América":
		switch(tipoPago){
			case 2:
			descuento=50+10;
			break;
			default:
			descuento=50;
		}
	break;
	case "África":
		switch(tipoPago){
			case 1:
			case 3:
			descuento=60+15;
			break;
			default:
			descuento=60;
		}
	break;
	case "Europa":
		switch (tipoPago) {
			case 1:
			descuento=20+10;
			break;
			case 2:
			descuento=20+15;
			break;
			default:
			descuento=20+5;
		}
	break;
	default:
	descuento=-20;
	break;
}
total=dias*100;
descuento=(descuento/100)*total;
total=total-descuento;
alert ("el total a pagar para el destino y el metodo de pago elegido es de \n$" + total)

}
