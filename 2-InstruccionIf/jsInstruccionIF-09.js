function mostrar()
{
var numero
const maximo = 10;
const minimo = 1;
numero = Math.round(Math.random()*(maximo - minimo) + minimo);

alert(numero)
/*	//Genero el número RANDOM entre 1 y 10 
	var rand = Math.random();
	rand=rand*10;
	rand=parseInt(rand);
	rand=rand+1;
	alert(rand);	
*/
}