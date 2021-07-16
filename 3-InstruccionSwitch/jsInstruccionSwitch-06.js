/*
Gustavo Vargas
switch 06

*/
function mostrar()
{
	var hora
	hora=document.getElementById("txtIdHora").value;
	hora=parseInt(hora);
		switch (hora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		alert("Es de Mañana");
		break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		alert("Es de tarde");
		break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		alert ("Es de noche");
		break;
		default:
		alert("Es una hora invalida");
	}

	/*
		if (hora>=0 && hora <=24){
		if (hora>=7 && hora<=11){
			alert("Es de mañana.");
		}else {
			if (hora>=12 && hora<=19) {
				alert("Es de tarde.");
			}else {
				alert("Es de noche.");
			}
		}

	}else{
		alert("Usted introdujo una hora invalida");
	}
*/
}