/*
//ejercicio 1
var edad = prompt("Ingrese su edad: ");
if (edad >= 18) {
    console.log("Puedes conducir");
    document.write("<h1>Puedes conducir</h1>");
    alert("Puedes conducir");
} else {
    console.log("No puedes conducir");
    document.write("<h1>No puedes conducir</h1>");
    alert("No puedes conducir");
}
*/

/*
ctrl+k+c para comentar
ctrl+k+u para descomentar
//ejercicio 2 con if else
var nota = prompt("Ingrese su nota: ");
if (nota >= 0 && nota < 3) {
    console.log("Muy Deficiente");
    document.write("<h1>Muy Deficiente</h1>");
    alert("Muy Deficiente");
} else if (nota >= 3 && nota < 5) {
    console.log("Insuficiente");
    document.write("<h1>Insuficiente</h1>");
    alert("Insuficiente");
} else if (nota >= 5 && nota < 6) {
    console.log("Sufucuente");
    document.write("<h1>Sufucuente</h1>");
    alert("Sufucuente");
}else if (nota >= 6 && nota < 7) {
    console.log("Bien");
    document.write("<h1>Bien</h1>");
    alert("Bien");
}else if (nota >= 7 && nota < 9) {
    console.log("Notable");
    document.write("<h1>Notable</h1>");
    alert("Notable");
}else if (nota >= 9 && nota < 10) {
    console.log("Sobresaliente");
    document.write("<h1>Sobresaliente</h1>");
    alert("Sobresaliente");
} else {
    console.log("La nota debe ser mayor o igual a cero y menor o igual a 10");
    document.write("<h1>La nota debe ser mayor o igual a cero y menor o igual a 10</h1>");
    alert("La nota debe ser mayor o igual a cero y menor o igual a 10");
}
*/

/*
//ejercicio 2 con switch
var nota = prompt("Ingrese su nota: ");
switch (true) {
    case (nota >= 0 && nota < 3):
        console.log("Muy Deficiente");
        document.write("<h1>Muy Deficiente</h1>");
        alert("Muy Deficiente");
        break;
    case (nota >= 3 && nota < 5):
        console.log("Insuficiente");
        document.write("<h1>Insuficiente</h1>");
        alert("Insuficiente");
        break;
    case (nota >= 5 && nota < 6):
        console.log("Sufucuente");
        document.write("<h1>Sufucuente</h1>");
        alert("Sufucuente");
        break;
    case (nota >= 6 && nota < 7):
        console.log("Bien");
        document.write("<h1>Bien</h1>");
        alert("Bien");
        break;
    case (nota >= 7 && nota < 9):
        console.log("Notable");
        document.write("<h1>Notable</h1>");
        alert("Notable");
        break;
    case (nota >= 9 && nota < 10):
        console.log("Sobresaliente");
        document.write("<h1>Sobresaliente</h1>");
        alert("Sobresaliente");
        break;
    default:
        console.log("La nota debe ser mayor o igual a cero y menor o igual a 10");
        document.write("<h1>La nota debe ser mayor o igual a cero y menor o igual a 10</h1>");
        alert("La nota debe ser mayor o igual a cero y menor o igual a 10");
        break;
}
*/

//ejercicio 3
// var suma = 0;
// do {
//     var numero = prompt("Ingrese un numero: ");
//     if (typeof(parseInt(numero)) === 'number') {
//         suma += parseInt(numero);
//     }
//     document.write(numero);
// } while (numero != null);
// alert("la suma es: "+ suma);


// var numero = parseInt(prompt("Ingrese un numero: "));
// var suma = 0;
// while (!isNaN(numero)) {    
//     if (typeof(numero) != 'number') {
//         alert("ingrese un numero");
//     } else {
//         suma += numero;
//         numero = parseInt(prompt("Ingrese un numero: "));
//     }    
// }
// alert("la suma es: "+ suma);

var number = 0;
do {
    current = prompt("Ingrese un numero: ");
    n = number(current);
    if (n == current) {
        number += n;
    } else {
        alert("ingrese un numero");
    }    
} while(current) {
    alert("la suma es: "+ number);
}
