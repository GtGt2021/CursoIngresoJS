/*RISING BTL. 
Gustavo Vargas
div j
tp07
*/
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edad;
 	var sexo;
 	var estadoCivil;
    var sueldo;
    var legajo;
    var nacionalidad;
    
    //PEDIR EDAD Y VALIDAR
    edad=prompt("Ingrese la Edad");
    edad=parseInt(edad);
    while (edad<18 || edad>90) {
    edad=prompt("Dato Invalido, Introduzca la Edad nuevamente");
    edad=parseInt(edad);
        }

    document.getElementById("txtIdEdad").value=("Edad: "+edad);
    
    //PEDIR SEXO Y VALIDAR
    sexo=prompt("Introduzca Sexo\n(F)Femenino\n(M)Masculino");
    while (sexo!="M" && sexo!="F"){
        sexo=prompt("Dato Invalido, Introduzca \n(F)Femenino\n(M)Masculino");
        }
    if (sexo=="M") {
        sexo="Masculino";
    }else {
        sexo=="Femenino";
    }
    document.getElementById("txtIdSexo").value=("Sexo: "+ sexo);

    //PEDIR ESTADO CIVIL Y VALIDAR
    estadoCivil=prompt("Estado Civil\n(1)Soltero\n(2)Casado\n(3)Divorsiado\n(4)Viudo" );
    estadoCivil=parseInt(estadoCivil);
    while(estadoCivil<1 || estadoCivil>4){
        estadoCivil=prompt("Dato Invalido, Introduzca\n(1)Soltero\n(2)Casado\n(3)Divorsiado\n(4)Viudo" );
        estadoCivil=parseInt(estadoCivil);
    }
    switch (estadoCivil){
        case 1:
        estadoCivil=("Soltero");
        break;
        case 2:
        estadoCivil=("Casado");
        break;
        case 3:
        estadoCivil=("Divorsiado");
        break;
        case 4:
        estadoCivil=("Viudo");
        break;
    }
    document.getElementById("txtIdEstadoCivil").value=("Estado Civil: "+estadoCivil);

//PEDIR SUELDO BRUTO MAYOR A 8000 Y VALIDAR
    sueldo=prompt("Introduzca Sueldo Bruto (Mayor a 8000)");
    sueldo=parseInt(sueldo)
    while (sueldo<8000){
        sueldo=prompt("CDato Invalido, Introduzca Sueldo Bruto (Mayor a 8000)");
        sueldo=parseInt(sueldo);
    }
    document.getElementById("txtIdSueldo").value=("Sueldo: "+sueldo);

//PEDIR Número de legajo, numérico de 4 cifras, sin ceros a la izquierda
    legajo=prompt("Introduzca Legajo (4 cifras sin cero a la izquierda)");
    legajo=parseInt(legajo);
    while (legajo<1000 || legajo>9999){
        legajo=prompt("Dato Invalido, Introduzca Legajo (4 cifras sin cero a la izquierda)");
        legajo=parseInt(legajo);
    }
    document.getElementById("txtIdLegajo").value=("Legajo: "+legajo);

//Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.

    nacionalidad=prompt("Ingrese Nacionalidad\n(A)Argentinos\n(E)Extranjeros\n(N)Nacionalizados");
    while (nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N"){
        nacionalidad=prompt("Dato Invalido, Ingrese Nacionalidad\n(A)Argentinos\n(E)Extranjeros\n(N)Nacionalizados");
    }
    switch (nacionalidad){
        case "A":
        nacionalidad="Argentina";
        break;
        case "E":
        nacionalidad="Extranjero";
        break;
        case "N":
        nacionalidad="Nacionalizado";
        break;
    }
    document.getElementById("txtIdNacionalidad").value=("Nacionalidad: "+nacionalidad)
}
