/*        </br>Se ingresa una hora.
        </br>Si está entre las 6 y las 11 mostrar:"es de mañana",
        </br>si es desde las 12 a las 19: "es de tarde",
        </br>de lo contrario informar que es de noche.
        </br>Informar si la hora no es válida.
        </br>Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje  : "a dormir".
       
        </br>
				</h3>
				 </br>Aclaración: hacer un switch y dentro toda la lógica. */

function mostrar()
{
var hora;
hora=parseInt(document.getElementById("laHora").value);

if (hora>=6 && hora<=11) {
	alert("es de mañana");
}else {
	if ((hora>19 && hora<=24) || (hora>=0 && hora<6)) {
	alert("es de noche");
	}else {
		if (hora>11 && hora <=19) {
			alert("es de tarde")
		}else {
			alert("hora invalida")
		}
	}
}
}
