document.getElementById('quiz-form').addEventListener('submit', function(event) {
    // Impede o formulário de recarregar a página automaticamente
    event.preventDefault();

    // Seleciona a opção de resposta marcada pelo usuário
    const selectedAnswer = document.querySelector('input[name="quiz-answer"]:checked');
    const resultBox = document.getElementById('quiz-result');

    // Verifica se o usuário selecionou alguma opção antes de clicar no botão
    if (!selectedAnswer) {
        resultBox.textContent = "Por favor, selecione uma resposta antes de enviar.";
        resultBox.className = "result-box incorrect";
        resultBox.classList.remove('hidden');
        return;
    }

    // Validação da resposta
    if (selectedAnswer.value === "correta") {
        resultBox.textContent = " Parabéns! Você acertou. Movimentos oculares inconsistentes e a falta de piscadas naturais são fortes indícios de um vídeo gerado por IA.";
        resultBox.className = "result-box correct";
    } else {
        resultBox.textContent = " Resposta incorreta. Lembre-se: Deepfakes costumam apresentar falhas sutis, como piscadas de olhos não naturais ou defeitos nas bordas do rosto.";
        resultBox.className = "result-box incorrect";
    }

    // Exibe a caixa de resultado na tela
    resultBox.classList.remove('hidden');
});
