document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quizForm');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', (event) => {
        // Evita o recarregamento padrão do formulário
        event.preventDefault();

        // Captura os valores selecionados no DOM
        const r1 = document.getElementById('resposta1').value;
        const r2 = document.getElementById('resposta2').value;

        // Limpa estados e estilos anteriores do feedback
        feedback.className = '';
        
        // Validação da pontuação lógica
        let acertos = 0;
        if (r1 === 'correto') acertos++;
        if (r2 === 'correto') acertos++;

        // Exibição condicional baseada na performance do usuário
        if (acertos === 2) {
            feedback.textContent = "Excelente! Você acertou 2 de 2. Você demonstra um ótimo preparo crítico contra deepfakes e desinformação automatizada.";
            feedback.classList.add('sucesso');
        } else if (acertos === 1) {
            feedback.textContent = "Atenção parcial! Você acertou 1 de 2. Algumas armadilhas digitais ainda podem te enganar. Lembre-se de sempre checar as fontes.";
            feedback.classList.add('erro');
        } else {
            feedback.textContent = "Alerta Vermelho! Você errou ambas as questões. É fundamental estudar mais sobre a identificação de mídias manipuladas para não espalhar boatos.";
            feedback.classList.add('erro');
        }
    });
});
