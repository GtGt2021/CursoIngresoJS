/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo, divisor, Resultado;
	dividendo=parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor=parseInt(document.getElementById("txtIdNumeroDivisor").value);
 	Resultado=dividendo%divisor;
	
	alert("el resto es " + Resultado);
	document.getElementById('txtIdNumeroDividendo').value = "";
	document.getElementById('txtIdNumeroDivisor').value = "";

}
