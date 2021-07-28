function mostrar()
{
  var tipo, precio, bolsas, descuento, mensajeA, mensajeB, mensajeD, importeBruto=0, precioBrutoCompra;
  var respuesta="s", descuentoCompra, precioTotalDescuento=0, cantidadUCal=0, cantidadUC=0,cantidadUCA=0;
  var precioC=0, precioCal=0, precioA=0, mensajeF, cantidadUA=0;
  while (respuesta=="s" || respuesta=="S"){
    tipo=prompt("Ingresar el Tipo de Producto (cemento, arena, cal)");
    while (tipo!="cemento" && tipo!="arena" && tipo!="cal"){
          tipo=prompt("Error, Ingresar el Tipo de Producto (cemento, arena, cal)");
    }
    precio=parseInt(prompt("Ingrese Precio por bolsa"));
    while (precio<=0){
          precio=parseInt(prompt("Error, Ingrese Precio por bolsa"));
    }
    bolsas=parseInt(prompt("Ingrese cantidad de bolsas"));
    while (bolsas<=0){
          bolsas=parseInt(prompt("Error, Ingrese cantidad de bolsas"));
    }
    if (bolsas>=10 && bolsas<30) {
        descuento=15;
    } else {
        if (bolsas>=30) {
          descuento=25;
        } else {
            descuento=0;
        }
    }
    precioBrutoCompra=bolsas*precio;
    importeBruto=importeBruto+precioBrutoCompra;
    descuentoCompra=(descuento/100)*precioBrutoCompra;
    precioTotalDescuento=precioTotalDescuento+(precioBrutoCompra-descuentoCompra);
    console.log(precioBrutoCompra);
    console.log(importeBruto);
    console.log(descuentoCompra);
    console.log(precioTotalDescuento);
    switch (tipo){
      case "cal":
      cantidadUCal=cantidadUCal+bolsas;
      precioCal=precio;
      break;
      case "cemento":
      cantidadUC=cantidadUC+bolsas;
      precioC=precio
      break;
      case "arena":
      cantidadUA=cantidadUA+bolsas;
      precioA=precio;
      break;
    }


    respuesta=prompt("Desea Ingresar otro Producto? (s) para Confirmar");
  } 
  mensajeA="importe Bruto a Pagar: "+importeBruto;
  mensajeB="importe a Pagar con los Descuentos Correspondiente: "+precioTotalDescuento;

if (precioA>precioC && precioA>precioCal) {
   mensajeF="el mas caro es la Arena";
}   else {
    if (precioC>precioCal && precioC>precioA) {
      mensajeF="el mas caro es el Cemento";
    } else {
      mensajeF="el mas caro es la Cal";
    }
}
if (cantidadUC>cantidadUCal && cantidadUC>cantidadUA) {
    mensajeD="El tipo con mas bolsas es: Cemento";
} else{
    if (cantidadUCal>cantidadUC && cantidadUCal>cantidadUA) {
      mensajeD="El tipo con mas bolsas es: CaL";
    } else {
      mensajeD="el tipo con mas bolsas es: Arena";
    }

}

alert(mensajeA);
alert(mensajeB);
alert(mensajeD);
alert(mensajeF);
}
