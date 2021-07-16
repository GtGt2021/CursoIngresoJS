/*
Gustavo Vargas
tp4

Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % 
y si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” 
se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos 
en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
 */
function CalcularPrecio () 
{

cantidad=parseInt(document.getElementById("txtIdCantidad").value);
marca=document.getElementById("Marca").value;











total=cantidad*35;
total=total*descuento;
if (total>120) {
    iibb=(total*.1);
    total=total+iibb;
    total=total.toFixed(2);
    alert("Usted Pago " + iibb + " de IIBB."); 
}

    document.getElementById("txtIdprecioDescuento").value=total;


























/* var cantidad, iibb, total, marca, descuento;

cantidad=parseInt(document.getElementById("txtIdCantidad").value);
marca=document.getElementById("Marca").value;


if (cantidad>=6) {
    descuento=.5;
}else {
    if (cantidad==5) {
        if (marca=="ArgentinaLuz") {
            descuento=.6
        }else {
            descuento=.7;
        }
    }else {
        if (cantidad==4) {
            if (marca== "ArgentinaLuz" || marca == "FelipeLamparas") {
                descuento=.75;
            }else{
                descuento=.8;
            }
        }else {
            if (cantidad==3) {
                if (marca=="ArgentinaLuz") {
                    descuento=.85;
                }else {
                    if (marca=="FelipeLamparas") {
                        descuento=.9;
                    }else {
                        descuento=.95;
                    }
                }
            }else {
                descuento=1
            }
        }
    }
}

total=cantidad*35;
total=total*descuento;
if (total>120) {
    iibb=(total*.1);
    total=total+iibb;
    total=total.toFixed(2);
    alert("Usted Pago " + iibb + " de IIBB."); 
}

    document.getElementById("txtIdprecioDescuento").value=total;*/
}