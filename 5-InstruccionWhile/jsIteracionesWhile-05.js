/*
Gustavo Vargas
Div J
While 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado=prompt("Ingrese su Sexo\n f para femenino\n m para masculino.");

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado=prompt("Sexo Invalido, Ingrese f o m")
	}

	if (sexoIngresado=="f") {
		sexoIngresado="Femenino";
	}else{
		sexoIngresado="Masculino";
	}

	document.getElementById("txtIdSexo").value=("Sexo ingresado " +sexoIngresado);
}