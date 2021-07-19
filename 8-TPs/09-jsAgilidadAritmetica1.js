/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var num1, num2, operador;
function comenzar()
{
    num1=Math.random();
    num1=num1*10;
    num1=parseInt(num1);
    num1=num1+1;    
    console.log(num1);
    num2=Math.random();
    num2=num2*10;
    num2=parseInt(num2);
    num2=num2+1;    
    console.log(num2);
    operador=Math.random();
    operador=operador*4;
    operador=parseInt(operador);
    operador=operador+1;    
    console.log(operador);
switch (operador){
    case 1:
    operador="Sumar";
    break;
    case 2:
    operador="Restar";
    break;
    case 3:
    operador="Multiplicar";
    break;
    default:
    operador="Dividir";
    
}

document.getElementById("txtIdPrimerNumero").value=num1;
document.getElementById("txtIdOperador").value=operador;
document.getElementById("txtIdSegundoNumero").value=num2;
}
function Responder()

{
var resultado, usuario;
usuario=parseFloat(document.getElementById("txtIdRespuesta").value)
switch (operador){
    case "Sumar":
    resultado=num1+num2;
    console.log(resultado)
    break;
    case "Restar":
    resultado=num1-num2;
    console.log(resultado)
    break;
    case "Multiplicar":
    resultado=num1*num2;
    console.log(resultado)
    break;
    case "Dividir":
    resultado=num1/num2;
    resultado=parseFloat(resultado);
    resultado=resultado.toFixed(2);
    break;
    console.log(resultado)
}	

if (usuario==resultado) {
    alert("Felicidades Lo hiciste Bien\n La Respusta Correcta es " + resultado);
} else {
    alert("Intentalo Nuevamente\n La Respusta Correcta es " + resultado);
}

this.comenzar();
}
