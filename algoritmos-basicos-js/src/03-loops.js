// src/03-loops.js

console.log("=== ESTRUTURAS DE REPETIÇÃO ===");

// FOR básico
console.log("--- FOR básico ---");
for (let i = 1; i <= 5; i++) {
    console.log("Contando:", i);
}

// FOR com tabuada
console.log("\n--- Tabuada do 5 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// WHILE
console.log("\n--- WHILE ---");
let contador = 1;
while (contador <= 3) {
    console.log("While - Volta:", contador);
    contador++;
}

// DO WHILE
console.log("\n--- DO WHILE ---");
let numero = 1;
do {
    console.log("Do While - Número:", numero);
    numero++;
} while (numero <= 3);

// FOR com números pares
console.log("\n--- Números pares de 1 a 10 ---");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Par:", i);
    }
}

// Soma de números
console.log("\n--- Soma de 1 a 100 ---");
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log("Resultado:", soma);