function mostrar()
{
var nombre, edad, sexo, estadoCivil, temperatura, temperaturaMax, temperaturaNombre, temperaturaMNBandera=true;
var respuesta="s", contadorHSV=0, contadorMV=0, contadorMF=0, sumatoriaEHS=0, contadorEHS=0, promedioEHS;
while(respuesta=="S" || respuesta=="s"){
	nombre=prompt("Introduce Nombre");
	edad=parseInt(prompt("Ingrese edad"));
    while (edad<=0){
          edad=parseInt(prompt("Error, Ingrese edad"));
    }
    sexo=prompt("Ingresar el Tipo de Sexo (f) femenino (m) masculino");
    while (sexo!="m" && sexo!="f"){
          sexo=prompt("Error, Ingresar el Tipo de Sexo (f) femenino (m) masculino");
	}
	estadoCivil=prompt("Ingresar el Tipo de estado Civil: soltero, casado o viudo");
    while (estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo"){
          estadoCivil=prompt("Error, Ingresar el Tipo de estado Civil: soltero, casado o viudo");
	}
	temperatura=parseInt(prompt("Ingrese temperatura"));
	if (temperaturaMNBandera==true) {
		temperaturaMax=temperatura;
		temperaturaNombre=nombre;
		temperaturaMNBandera=false;
	}	if (temperaturaMax<temperatura) {
		temperaturaMax=temperatura;
		temperaturaNombre=nombre;
	}
	if (edad>17 && estadoCivil=="viudo") {
		contadorMV=contadorMV+1;
	}
	if (sexo=="m" && (estadoCivil =="viudo" || estadoCivil=="soltero")){
		contadorHSV=contadorHSV+1;
	}
	if (edad>60 && temperatura>38){
		contadorMF=contadorMF+1;
	}
	if (sexo=="m" && estadoCivil=="soltero") {
		sumatoriaEHS=sumatoriaEHS+edad;
		contadorEHS=contadorEHS+1;
	}

	respuesta=prompt("Si desea Cargar otro introduce (S)");
}

if (sumatoriaEHS!=0) {
	promedioEHS=sumatoriaEHS/contadorEHS;
} else {
	promedioEHS=0
}

alert("A) "+temperaturaNombre+"\nB)"+contadorMV +"\nC)"+contadorHSV+"\nD)"+contadorMF+"\nE)"+promedioEHS);

}