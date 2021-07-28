function mostrar()
{
var num1, num2, resto;
num1=parseInt(prompt("Introduzca Primer Numero"));
num2=parseInt(prompt("Introuzca Segundo Numero"));
alert("los Numeros Ingresados son: "+num1+" y "+num2);
if (num1==num2) {
	alert(num1*num2);
}else {
	if (num1%num2==0) {
		alert(num1-num2);
	}else{
		resto=(num1%num2);
		alert(resto);
	}
}
if (resto>3) {
	alert("resto mayor a 3")
}
}
