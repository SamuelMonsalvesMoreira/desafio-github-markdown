// src/04-arrays.js

console.log("=== TRABALHANDO COM ARRAYS ===");

// Criando arrays
let frutas = ["maçã", "banana", "laranja", "uva"];
let numeros = [1, 2, 3, 4, 5];

console.log("Frutas:", frutas);
console.log("Números:", numeros);

// Acessando elementos
console.log("\n--- Acessando elementos ---");
console.log("Primeira fruta:", frutas[0]);
console.log("Última fruta:", frutas[frutas.length - 1]);

// Adicionando elementos
frutas.push("manga");
console.log("Após adicionar manga:", frutas);

// Removendo elementos
let frutaRemovida = frutas.pop();
console.log("Fruta removida:", frutaRemovida);
console.log("Array após remoção:", frutas);

// Percorrendo array com FOR
console.log("\n--- Percorrendo com FOR ---");
for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}

// Percorrendo array com FOR OF
console.log("\n--- Percorrendo com FOR OF ---");
for (let fruta of frutas) {
    console.log("Fruta:", fruta);
}

// Operações com arrays numéricos
console.log("\n--- Operações com números ---");
let soma = 0;
for (let numero of numeros) {
    soma += numero;
}
console.log("Soma dos números:", soma);

// Encontrando o maior número
let maior = numeros[0];
for (let numero of numeros) {
    if (numero > maior) {
        maior = numero;
    }
}
console.log("Maior número:", maior);