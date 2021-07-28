function mostrar()
{
var tipo, bolsas, precio, precioCD, cantBolAre=0, cantBolCem=0, cantBolCal=0, precioCem=0, precioCal=0, precioAre=0;
var respuesta="s", mensajeD, mensajeF;
var totalBrutoAcum=0, total, totalAcumDesc=0;

while (respuesta=="s" || respuesta=="S"){

  tipo=prompt("Ingresar Producto (arena, cal o cemento)");
  while (tipo!="arena" && tipo!="cal" && tipo!="cemento"){
    tipo=prompt("Error, Ingresar Producto (arena, cal o cemento)");
  }
  bolsas=prompt("Ingresar cantidad bolsas");
  bolsas=parseInt(bolsas);
  while (bolsas<=0){
    bolsas=prompt("Error, Ingresar cantidad bolsas");
    bolsas=parseInt(bolsas);
  }
  precio=prompt("Ingresar Precio");
  precio=parseInt(precio);
  while (precio<=0){
    precio=prompt("Error, Ingresar Precio");
    precio=parseInt(precio);
  }
total=precio*bolsas;
totalBrutoAcum=totalBrutoAcum+total;
console.log(totalBrutoAcum);
if (bolsas>=10 && bolsas<30) {
  descuento=.15;
}else {
  if (bolsas>=30) {
    descuento=.25
  }else {
    descuento=1
  }
}
precioCD=precio*bolsas*descuento;
console.log(precio*bolsas*descuento);
totalAcumDesc=totalAcumDesc+precioCD;
console.log(totalAcumDesc);

switch (tipo){
  case "arena":
  cantBolAre=cantBolAre+bolsas;
  precioAre=precio;
  break;
  case "cal":
  cantBolCal=cantBolCal+bolsas;
  precioCal=precio
  break;
  case "cemento":
  cantBolCem=cantBolCem+bolsas;
  precioCem=precio;
  break;
}


respuesta=prompt("Desea Ingresar otro producto (s) para confirmar");
}

if (cantBolAre>cantBolCem && cantBolAre>cantBolCal) {
    mensajeD="el tipo con mas bolsas es Arena con: " +cantBolAre;
}else {
    if (cantBolCal>cantBolAre && cantBolCal>cantBolCem) {
    mensajeD="el tipo con mas bolsas es CAL con: " +cantBolCal;
    }else {
      mensajeD="El tipo con mas bolsas es Cemento con: " +cantBolCem;
    }
}

if (precioAre>precioCem && precioAre>precioCal) {
  mensajeF="lo mas caro es la Arena en: " +precioAre;
}else{
  if (precioCal>precioAre && precioCal>precioCem) {
    mensajeF="lo mas caro es la Cal en: " +precioCal;
  }else{
    mensajeF="lo mas caro es el Cemento en: " +precioCem;
  }
}

document.write("El importe bruto a pagar es: "+totalBrutoAcum);
document.write('<br>',"Total con Descuento: "+(totalBrutoAcum-totalAcumDesc));
document.write('<br>',mensajeD);
document.write('<br>',mensajeF);





 }