/*
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m")
 y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/
function mostrar()
{
	var nombre, nacionalidad, edad, sexo, estadoCivil, temperaturaAlta, nacionalidadPMT, mayoresS=0, banderaT=true;
	var mujeresSV=0, personas3EdadFiebre=0, promedioEdadMC, contadorEdadMC=0, acumuladorEdadMC=0, temperatura;
	var respuesta ="s";

	while (respuesta=="s" || respuesta=="S"){
		nombre=prompt("nombre del pasajero");
		nacionalidad=prompt("nacionalidad");
		edad=parseInt(prompt("Edad"));
		while (edad<=0){
			edad=parseInt(prompt("Edad"));
		}
		sexo=prompt("introduzca Sexo (m) o (f)");
		while(sexo!="m" && sexo!="f"){
			sexo=prompt("Error, introduzca Sexo (m) o (f)");
		}
		estadoCivil=prompt("Ingresar estado civil (soltero, casado, viudo)");
		while (estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo"){
			estadoCivil=prompt("Error, Ingresar estado civil (soltero, casado, viudo)")
		}
		temperatura=parseInt(prompt("temperatura"));
		if (banderaT==true){
			temperaturaAlta=temperatura;
			nacionalidadPMT=nacionalidad;
			banderaT=false;
		} else {
		if (temperaturaAlta<temperatura) {
				temperaturaAlta=temperatura;
				nacionalidadPMT=nacionalidad;
			}
		}
		console.log(nacionalidadPMT)
		if (edad>=18 && estadoCivil=="soltero") {
			mayoresS=mayoresS+1;
			}
		if (sexo=="f" && (estadoCivil=="soltero" || estadoCivil=="viudo")) {
			mujeresSV=mujeresSV+1;
		}
		if (edad>60 && temperatura>38) {
			personas3EdadFiebre=personas3EdadFiebre+1;
		}

		if (sexo=="m" && estadoCivil=="casado") {
			acumuladorEdadMC=acumuladorEdadMC+edad;
			contadorEdadMC=contadorEdadMC+edad;
		}
		respuesta=prompt("Presiones (s) si desea Ingresar otro Pasajero");
	}
if (contadorEdadMC=!0) {
	promedioEdadMC=acumuladorEdadMC/contadorEdadMC;
}else {
	promedioEdadMC=0;
} 

document.write("nacionalidad de la persona con temperatura mas alta: "+nacionalidadPMT);
document.write('<br>',"Mayores de edad Solteros: "+mayoresS);
document.write('<br>',"Mujeres Solteras o Viudas: "+mujeresSV);
document.write('<br>',"Personas 3 Edad con mas de 38 temperatura: "+ personas3EdadFiebre);
document.write('<br>',"Promedio edad de Mujeres Casadas: "+promedioEdadMC);
}
