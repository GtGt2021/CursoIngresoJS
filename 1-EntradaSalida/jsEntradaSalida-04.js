/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declaro variable
	var nombre;
	//solicito por prompt el nombre
	nombre=prompt("Ingrese su nombre");
    //ahora asignamos a la caja de texto el VALOR de la Variable para que no las muestre
	document.getElementById('txtIdNombre').value=nombre;

	}

