function mostrar()
{
	var num;
	var banderaPrimo=true;
	num=parseInt(prompt("Ingrese Numero"));
for(var i=2; i<num; i++){
		if (num%i==0) {
			banderaPrimo=false
			break;
		}
}
if (banderaPrimo==true && num!=1) {
	alert("Es Primo");
	} else {
	alert("no Es Primo");
}
}
/*
{
	ComenzarIngreso ();
	var divisor=2;
	var banderaPrimo=true;
	while (divisor<numeroPositivo && banderaPrimo==true){ 
		if (numeroPositivo%divisor==0) {
			banderaPrimo=false;
		} else {
			divisor=divisor+1;
		}
	}
if (banderaPrimo==true && numeroPositivo!=1) {
	alert("Es Primo");
	} else {
	alert("no Es Primo");
}
}*/