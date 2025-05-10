function verFibonacci(numero) {
      let a = 0;
      let b = 1;

      if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
      }

      while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
      }

      if (b === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
      } else {
        return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
      }
    }

    const entrada = prompt("Digite um número para verificar se pertence à sequência de Fibonacci:");
    const numero = parseInt(entrada);

    if (isNaN(numero)) {
      alert("Por favor, digite um número válido.");
    } else {
      const resultado = verFibonacci(numero);
      alert(resultado);
    }