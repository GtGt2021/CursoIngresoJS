function mostrar()
{
var sexo, altura, alturaMinima, sexojugador;
var jugador=1;
var promedioAltura;
var cantidadMujeres;

while (jugador<=5){
altura=prompt("Ingrese Altura");
altura=parseInt(altura);
while (altura<=0 || altura>=250){
	altura=prompt("Altura Fuera de los parametros, Ingresela nuevamente");
	altura=parseInt(altura);
}
promedioAltura=promedioAltura+altura;
sexo=prompt("Ingrese Sexo m o f");
while (sexo!="m" && sexo!="f"){
	sexo=prompt("Sexo Invalido, Introduzca nuevamente");
}
if (altura>190 && sexo=="m") {
	cantidadMujeres=cantidadMujeres+1;
}
if (jugador==1) {
	alturaMinima=altura;
	sexojugador=sexo;
}else {
	if (altura<alturaMinima) {
		alturaMinima=altura;
		sexojugador=sexo;
	}
}

jugador=jugador+1;
}

alert("El jugador mas bajo mide " + alturaMinima +" y es de sexo "+ sexojugador + "\nPromedio de Alturas" + promedioAltura/5)
alert("cantidad de mujeres con mas de 1.90" + cantidadMujeres);
}
