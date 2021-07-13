/*
Al presionar el Bot&oacute;n, 
					asignar una nota RANDOM al examen y mostrar:<br>
					"EXCELENTE" para notas igual a 9 o 10,<br>
					"APROB&Oacute;" para notas mayores a 4,<br>
					"Vamos, la proxima se puede" para notas menores a 4*/

function mostrar()
{
		//Genero el número RANDOM entre 1 y 10 
	var rand = Math.random();
	rand=rand*10;
	rand=parseInt(rand);
	rand=rand+1;
	alert(rand);

	if (rand>8) {
		alert("Excelente");
	} 
	else if (rand>4) {

		alert("Aprobado");
	} 
	else {
		alert("Vamos, la proxima se puede");
	}


	
}//FIN DE LA FUNCIÓN