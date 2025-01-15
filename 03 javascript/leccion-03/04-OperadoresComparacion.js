let a = 3, b = 2, c = "3";

let z = a == b; // Se revisa el valor sin importar el tipo de variable
console.log(z);

z = a === c; // Resiva si los valores son iguales pero tambien los tipos
console.log(z);