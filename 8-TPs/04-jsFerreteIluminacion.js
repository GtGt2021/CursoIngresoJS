/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 var cantidad, iibb, total, marca;

cantidad=parseInt(document.getElementById("txtIdCantidad").value);
marca=document.getElementById("Marca").value;
if (cantidad > 5) {
     total=cantidad*35;
     total=total*0.50;
} else if (cantidad == 5){
    if (marca == "ArgentinaLuz") {
    total=cantidad*35;
    total=total*0.60;
} else { 
    total=cantidad*35;
    total=total*0.70;
}
  
} else if (cantidad==4){
    if (marca== "ArgentinaLuz" || marca == "FelipeLamparas") {
    total=cantidad*35;
    total=total*0.75;
} else {
    total=cantidad*35;
    total=total*0.8;
} 
}

/*else if (cantidad == 3 && marca == "ArgentinaLuz"){
    total=cantidad*35;
    total=total*0.85;
} else if (cantidad == 3 && marca == "FelipeLamparas"){
    total=cantidad*35;
    total=total*0.9;
} else if (cantidad ==3 && (marca != "ArgentinaLuz" || "FelipeLamparas")) {
    total=cantidad*35;
    total=total*0.95;
} */
else if (cantidad == 1 || cantidad == 2) {
total=cantidad*35
}



if (total>120) {
iibb=(total*0.1);
total=total+iibb;
alert("Usted Pago " + iibb + " de IIBB."); 
} 

    document.getElementById("txtIdprecioDescuento").value=total;
}