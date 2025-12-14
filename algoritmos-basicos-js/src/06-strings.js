// src/06-strings.js

console.log("=== MANIPULAÇÃO DE STRINGS ===");

let texto = "JavaScript é incrível";
let nome = "  Maria Silva  ";

// Propriedades básicas
console.log("Texto:", texto);
console.log("Tamanho:", texto.length);

// Métodos de transformação
console.log("Maiúsculo:", texto.toUpperCase());
console.log("Minúsculo:", texto.toLowerCase());
console.log("Nome sem espaços:", nome.trim());

// Buscando na string
console.log("Contém 'Script'?", texto.includes("Script"));
console.log("Posição de 'incrível':", texto.indexOf("incrível"));
console.log("Começa com 'Java'?", texto.startsWith("Java"));
console.log("Termina com 'vel'?", texto.endsWith("vel"));

// Extraindo partes
console.log("Primeiros 4 caracteres:", texto.substring(0, 4));
console.log("Últimos 8 caracteres:", texto.slice(-8));

// Substituindo
let novoTexto = texto.replace("incrível", "fantástico");
console.log("Texto modificado:", novoTexto);

// Dividindo strings
let frase = "maçã,banana,laranja,uva";
let frutas = frase.split(",");
console.log("Frutas separadas:", frutas);

// Juntando arrays em string
let palavras = ["Eu", "amo", "programar"];
let fraseCompleta = palavras.join(" ");
console.log("Frase completa:", fraseCompleta);

// Repetindo strings
console.log("Repetindo 'Ha' 3 vezes:", "Ha".repeat(3));

// Formatação com template literals
let produto = "Notebook";
let preco = 2500;
let descricao = `O ${produto} custa R\$ ${preco.toFixed(2)}`;
console.log(descricao);