function mostrar()
{
	var num;
	for (var i=1; i<=20; i++){
	document.write(i+'<br>');
	num=parseInt(prompt("Ingrese Numero"));
	if (num==9) {
		break;
	}
	}

}//FIN DE LA FUNCIÓN