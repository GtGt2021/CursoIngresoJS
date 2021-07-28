function mostrar()
{
	var num, cantidadPares=0;
	num=parseInt(prompt("Ingresar numero"));
	for (i=1; i<=num; i++){
		if (i%2==0) {
			document.write("Numero Par: "+i+'<br>')
			cantidadPares=cantidadPares+1;
		}

	}
document.write("Cantidad de Numeros Pares Encontrados: "+cantidadPares);
}//FIN DE LA FUNCIÓN