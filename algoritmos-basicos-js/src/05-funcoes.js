// src/05-funcoes.js

console.log("=== FUNÇÕES ===");

// Função simples
function saudar() {
    console.log("Olá! Bem-vindo!");
}

saudar();

// Função com parâmetros
function saudarPessoa(nome) {
    console.log(`Olá, ${nome}! Como você está?`);
}

saudarPessoa("Maria");
saudarPessoa("João");

// Função com retorno
function somar(a, b) {
    return a + b;
}

let resultado = somar(5, 3);
console.log("5 + 3 =", resultado);

// Função para calcular área do retângulo
function calcularArea(largura, altura) {
    return largura * altura;
}

console.log("Área do retângulo 5x3:", calcularArea(5, 3));

// Função para verificar se número é par
function ehPar(numero) {
    return numero % 2 === 0;
}

console.log("10 é par?", ehPar(10));
console.log("7 é par?", ehPar(7));

// Função com múltiplos parâmetros
function apresentarPessoa(nome, idade, cidade) {
    return `${nome} tem ${idade} anos e mora em ${cidade}`;
}

console.log(apresentarPessoa("Ana", 28, "São Paulo"));

// Arrow function (função moderna)
const multiplicar = (a, b) => a * b;
console.log("4 x 6 =", multiplicar(4, 6));

// Função que usa outras funções
function calcularMedia(numeros) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma / numeros.length;
}

let notas = [8, 7, 9, 6, 8];
console.log("Média das notas:", calcularMedia(notas));