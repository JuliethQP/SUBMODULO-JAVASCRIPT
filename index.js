// document.write("Hola mundo");
// document.getElementById("demo").innerHTML = "Adios";
// console.log("1 2 3 4 5");


/*PRIMITIVOS*/
// 1
// "String"
// true
// false

// /*PROPIOS DE JS*/
// undefined
// null

// /* NO PRIMITIVOS */
// [1, 2, 3, 4]
// { nombre: "Julieth" }

/*VARIABLES */
var nombre;
// console.log(nombre);
nombre = "Julieth";
var nombre = "Pepito";
// console.log(nombre);

let apellido = "Quinchia"
// console.log(apellido);

// const frutas = ["banano", "mango"];

let nombreCompleto = "Pepito Perez";
// console.log(nombreCompleto);


let numero = 1;
numero = numero + 1;
// console.log('numero', numero);
numero += 1;
// console.log('numero', numero);
numero = numero - 1;
numero -= 1;
// console.log('numero', numero);

//Arrays

const frutas = ["banano", "Manzana", "Pina"];
// console.log(frutas[0]);
frutas.push("Mango");
// console.log(frutas);

// Objeto
const persona = {
    name: "Pepito",
    apellido: "Perez",
    edad: 20
};
// console.log(persona.name);
// console.log(persona["apellido"]);
persona.altura = 2;
// console.log(persona);
//

//CONDICIONALES
const edad = 15;
if (edad > 60) {
    alert("Eres población prioritaria");
} else if (edad > 18 && edad < 59) {
    alert("Puedes esperar dos horas");
} else if (edad < 18) {
    alert("Eres menor de edad, eres prioritario");
} else {
    alert("Eres mayor de edad, puedes esperar")
};

/*SWITCH */
switch (edad) {
    case 60:
        alert("Tienes 60 años");
        break;
    case 30:
        alert("tienes 30 años");
        break;
    case 15:
        alert("tienes 15 años");
        break;
    default:
        alert("No estas dentro de las edades");
}

let i = 1;

/*WHILE*/

while (i < 10) {
    console.log(i);
    i++;
}

/*CICLOS */

for (i; i < 10; i++) {
    console.log(i);
}

let unidad = 1;

/*FUNCIONES */

function mostrarNumero(numero) {
    const resultado = ` El numero es  ${numero}`
    return resultado
};









