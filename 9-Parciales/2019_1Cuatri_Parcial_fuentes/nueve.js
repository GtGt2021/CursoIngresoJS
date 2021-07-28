/*
Gustavo Vargas
Parcial 2019 09
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones 
entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

Testeo con los siguientes valores
(pais=argentina;habitantes = 50; t =-300(mal) ,-15(bien) )
(pais=tunes;habitantes = 10; t =1 )
(pais=islandia;habitantes = -150(mal), 15(bien); t =-13 )
(pais=china;habitantes = 2000; t =-12 )
*/
function mostrar()
{
	var pais, cantidadHab, temperatura, pais1, minimoHab, temperaturaMin, pais2, promedioHabitantes;
	var temperaturaPar=0;
	var acumuladorHabitantes=0;
	var contadorPaises=0;
	var paisCaliente=0; 
	var primero=true;
	var respuesta="s";
while (respuesta=="S" || respuesta=="s"){
	pais=prompt("Ingrese Nombre Pais");
	cantidadHab=prompt("Ingrese Cantidad de Habitantes entre 1-7000 M");
	cantidadHab=parseInt(cantidadHab);
	while (cantidadHab<1 || cantidadHab>7000){
		cantidadHab=prompt("Error, Ingrese Cantidad Correcta");
		cantidadHab=parseInt(cantidadHab);
	}
	console.log(pais);
	console.log(cantidadHab);
	temperatura=prompt("Ingrese Temperatura minima de Este Pais");
	temperatura=parseInt(temperatura);
	while (temperatura<-50 || temperatura>50){
		temperatura=prompt("Error, Ingrese Temperatura minima de Este Pais");
		temperatura=parseInt(temperatura);
	}
	console.log(temperatura);
	if (temperatura>40) {
		paisCaliente=paisCaliente+1;
	}
	if (temperatura%2==0) {
		temperaturaPar=temperaturaPar+1;
		console.log("temperatura Par: "+temperaturaPar);
	}
	if (primero==true) {
		pais1=pais;
		pais2=pais;
		temperaturaMin=temperatura;
		minimoHab=cantidadHab;
		primero=false;
	}else{
		if (temperatura<temperaturaMin) {
			temperaturaMin=temperatura;
			pais1=pais;
			console.log(pais1+temperaturaMin);
		}
		if (cantidadHab<minimoHab) {
			minimoHab=cantidadHab;
			pais2=pais;
			console.log(pais2+minimoHab);
		}
	}
acumuladorHabitantes=acumuladorHabitantes+cantidadHab;
contadorPaises=contadorPaises+1;

respuesta=prompt("Si desea Ingresar Otro Pais presione la tecla (S)");
}

promedioHabitantes=acumuladorHabitantes/contadorPaises;

	document.write("temperaturas Pares: "+temperaturaPar);
	document.write('<br>',"Pais con menos Habitantes: "+pais2);
	document.write('<br>',"Cantidad de Paises que superan los 40°: " +paisCaliente);
	document.write('<br>',"Promedio Habitantes totales: " + promedioHabitantes+ "Millones");
	document.write('<br>',"Temperatura Minima y Pais: " + pais1 + temperaturaMin);

}
