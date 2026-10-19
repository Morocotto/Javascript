/*
Mensaje de Bienvenida 
*/ 

alert("BIENVENIDO A MI APLICACION");

/*
Variables en JS

let - Este tipo de variable se utiliza y esta disponible en bloques de codigo, no es disponible en todo el programa
var - Este tipo de variable se utiliza de forma global y no esta disponible en todo el programa
*/

var edad = "19";
var nombre = "Jeremias";

console.log(edad);
console.log("El nombre del estudiante es " + nombre);

//Operadores Matematicos y logicos

/*
Matematicos
+ suma
- resta
* multiplicacion 
/ division

logicos
&& AND 
|| OR

Asignacion 
== igual
= asignar
> mayor
< menor
>= mayor igual
<= menor igual
!= diferente o no igual
*/


const formulario = document.getElementById("registros");

formulario.addEventListener("submit", function(event) {
    //Evitar recargar la pagina
    event.preventDefault();

    //Capturamos cada uno de los valores del formulario
    let nombre = document.getElementById("nombre").value;
    //Capturamos el apellidp
    let apellido = document.getElementById("apellido").value;
    //Capturamos la edad
    let edad = Number((document.getElementById("edad")).value);
    //Capturamos la carrera
    let carrera = document.getElementById("carrera").value;

    //Mostramos en consola primero 
    console.log("El nombre del estudiante es " + nombre);
    console.log("El apellido del estudiante es " + apellido);
    console.log("La edad del estudiante es " + edad);
    console.log("La carrera del estudiante es " + carrera);

    //Mostrar en el index.html

    let resultado = document.getElementById("resultado");
    resultado.textContent = "Estudiante: " + nombre + " " + "apellido: " + apellido + "|Edad : " + edad + "|Carrera : " + carrera; 
})