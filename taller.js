// console.group("Perimetro del cuadrado");
// const ladoCuadrado = 5;
// const perimetroCuadrado = 4 * ladoCuadrado;
// console.log(`El perimetro del  cuadrado es: ${perimetroCuadrado} cm`);
// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log(`El área del  cuadrado es: ${areaCuadrado} cm²`);
// console.groupEnd();

// console.group("Perimetro y Área de un círculo ");
// const radioCirculo = 4;
// const diametroCirculo = 2 * radioCirculo;
// const PI = Math.PI;
// const perimetroCirculo = diametroCirculo * PI;
// console.log("eL perimetro del circulo es ", perimetroCirculo, "cm");
// const areaCirculo = 2 * radioCirculo * PI;
// console.log("El área del circulo es " + areaCirculo + "cm²");
// console.groupEnd();


// function perimetroCuadrado(lado) {
//     return lado * 4;
// };

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetroCuadrado = 4 * value;
    alert("El perimetro del cuadrado es " + perimetroCuadrado);
};

// calcularPerimetroCuadrado(5);

// function mostrarMensaje(palabra) {
//     document.getElementById("demo").innerHTML = palabra;
// };

// function primeraFuncion() {
//     mostrarMensaje("Hola");
// }

// function segundaFuncion() {
//     mostrarMensaje("Adios");
// }

// primeraFuncion();
// segundaFuncion();

function ejemploCallback(nombre, callback) {
    console.log(nombre);
    callback();
};

ejemploCallback("Pepito", function() {
    console.log("Hola Pepito");
});

function displayMessage() {
    document.getElementById("demo").innerHTML = "Hola Pepe";
}

function cleanMessage() {
    document.getElementById("demo").innerHTML = "";
};

setTimeout(displayMessage, 3000);
setTimeout(cleanMessage, 6000);