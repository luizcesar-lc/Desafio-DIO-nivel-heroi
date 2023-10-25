/* Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante */

let nome = prompt("Qual é o nome do Herói?");
let xp = Number(prompt("Qual é a sua quantidade de XP?"));

// Chama a função nivelHeroi() para obter o nível do herói
const nivel = nivelHeroi(xp);

// Exibe o nível do herói
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

// Função para obter o nível do herói
function nivelHeroi(xp) {
  return (xp < 1000) ? "Ferro"
    : (xp >= 1001 && xp < 2000) ? "Bronze"
    : (xp >= 2001 && xp < 5000) ? "Prata"
    : (xp >= 6001 && xp < 7000) ? "Ouro"
    : (xp >= 7001 && xp < 8000) ? "Platina"
    : (xp >= 8001 && xp < 9000) ? "Ascendente"
    : (xp >= 9001 && xp < 10000) ? "Imortal"
    : "Radiante";
}
