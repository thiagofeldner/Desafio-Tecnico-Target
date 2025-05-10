function inverterString(str) {
  let invertida = "";

  // Percorre a string de trás para frente
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }

  return invertida;
}

// Exemplo
const texto = "AMORA";
const invertido = inverterString(texto);

console.log("Texto:", texto);
console.log("Invertida:", invertido);