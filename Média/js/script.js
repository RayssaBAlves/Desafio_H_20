
    function calcularMedia() {
      // Obter os valores das notas
      var nota1 = parseFloat(document.getElementById("nota1").value);
      var nota2 = parseFloat(document.getElementById("nota2").value);
      var nota3 = parseFloat(document.getElementById("nota3").value);

      // Calcular a média
      var media = (nota1 + nota2 + nota3) / 3;

      // Exibir a média
      document.getElementById("media").innerHTML = "Média do aluno: " + media.toFixed(2);

      // Verificar a aprovação
      var resultado = media >= 6 ? "Aprovado" : "Reprovado";

      // Exibir o resultado
      document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    }

