/*
Gustavo Vargas
tp4
*/
function CalcularPrecio () 
{

var cantidad, marca, descuento, total;
cantidad=parseInt(document.getElementById("txtIdCantidad").value);
marca=document.getElementById("Marca").value;

switch (cantidad){
    case 5:
    switch (marca){
            case "ArgentinaLuz":
                descuento=.6;
            break;
            default:
                descuento=.7;
    }
    break;
    case 4:
    switch (marca){
        case ("ArgentinaLuz"):
        case ("FelipeLamparas"):
            descuento=.75
        break;
        default:
            descuento=.8;
    }   
    break;
    case 3:
    switch (marca){
        case "ArgentinaLuz":
            descuento=.85
        break;
        case "FelipeLamparas":
            descuento=.9;
        break;
        default:
            descuento=.95;
    }
    break;
    case 2:
    case 1:
        descuento = 1;
    break;
    default:
        descuento=.5;

}

total=cantidad*35;
total=total*descuento;
if (total>120) {
    iibb=(total*.1);
    total=total+iibb;
    total=total.toFixed(2);
    alert("Usted Pago " + iibb + " de IIBB."); 
}

    document.getElementById("txtIdprecioDescuento").value=total;


}
/*
function CalcularPrecio () 
{

var cantidad, marca, descuento, total;
cantidad=parseInt(document.getElementById("txtIdCantidad").value);
marca=document.getElementById("Marca").value;

 if (cantidad>=6) {
    descuento=.5;
 }else {
    if (cantidad==5) {
            switch (marca){
            case "ArgentinaLuz":
            descuento=.6;
            break;
            default:
            descuento=.7;
        }
        }else {
            if (cantidad==4) {
                switch (marca){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                descuento=.75;
                break;
                default:
                descuento=.8;
            }
            }else{
                if (cantidad==3) {
                    switch (marca){
                    case "ArgentinaLuz":
                    descuento=.85
                    break;
                    case "FelipeLamparas":
                    descuento=.9;
                    break;
                    default:
                    descuento=.95;
                }
                }else {
                    descuento=1;
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

    document.getElementById("txtIdprecioDescuento").value=total;


}
*/


/*
function CalcularPrecio () 
{
var cantidad, marca, descuento, total;
cantidad=parseInt(document.getElementById("txtIdCantidad").value);
marca=document.getElementById("Marca").value;

switch (cantidad){
    case 1:
    case 2:
        descuento=1;
        break;
    case 3:
        if (marca=="ArgentinaLuz") {
            descuento=.85; 
        }else {
            switch (marca){
                case "FelipeLamparas":
                descuento=.9;
                break;
                default:
                descuento=.95;
            }
        }
        break;
    case 4:
        if (marca=="ArgentinaLuz" || marca=="FelipeLamparas") {
            descuento=.75;
        }else {
            descuento=.8
        }        
        break;
    case 5:
        if (marca=="ArgentinaLuz") {
            descuento=.6
        }else{
            descuento=.7
        }
        break;
    default:
    descuento=.5;
}


total=cantidad*35;
total=total*descuento;
if (total>120) {
    iibb=(total*.1);
    total=total+iibb;
    total=total.toFixed(2);
    alert("Usted Pago " + iibb + " de IIBB."); 
}

    document.getElementById("txtIdprecioDescuento").value=total;
}
*/


/* 
function CalcularPrecio () 
{

var cantidad, iibb, total, marca, descuento;
cantidad=parseInt(document.getElementById("txtIdCantidad").value);
marca=document.getElementById("Marca").value;


if (cantidad>=6) {
    descuento=.5;
}else {
    if (cantidad==5) {
        if (marca=="ArgentinaLuz") {
            descuento=.6;
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

    document.getElementById("txtIdprecioDescuento").value=total;
}
    */
