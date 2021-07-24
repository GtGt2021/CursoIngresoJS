/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var colorSecreto;
var tiempoInicio;
function comenzar()
{
	colorSecreto=Math.random();
    colorSecreto=colorSecreto*6;
    colorSecreto=parseInt(colorSecreto);
    colorSecreto=colorSecreto+1;    
    console.log(colorSecreto);
    switch (colorSecreto){
    	case 1:
    	colorSecreto="azul";
    	break;
    	case 2:
    	colorSecreto="amarillo";
    	break;
    	case 3:
    	colorSecreto="marron";
    	break;
    	case 4:
    	colorSecreto="verde";
    	break;
    	case 5:
    	colorSecreto="celeste";
    	break;
    	case 6:
    	colorSecreto="rojo";
    	break;
    }
    console.log(colorSecreto);
    document.getElementById("txtIdColorElegido").value=colorSecreto;
    
}//fin de la funcion

function Responder(colorParametro)
{
	if (Responder('amarillo')=="amarillo") {
		alert("Excelente");
	} else {
		alert("te equivocaste intentalo de nuevo");
	}
	
}//FIN DE LA FUNCIÓN
