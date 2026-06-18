document.addEventListener("DOMContentLoaded", function() {
    
    // Elementos do DOM
    const btnAcessibilidade = document.getElementById("btn-acessibilidade");
    const btnEnviar = document.getElementById("btn-enviar");
    const resultadoQuiz = document.getElementById("resultado-quiz");

    // 1. Funcionalidade de Acessibilidade (Modo Escuro)
    btnAcessibilidade.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // 2. Validador do Quiz de Desinformação
    btnEnviar.addEventListener("click", function() {
        const alternativas = document.getElementsByName("q1");
        let respostaSelecionada = "";

        // Captura o valor selecionado pelo usuário
        for (let i = 0; i < alternativas.length; i++) {
            if (alternativas[i].checked) {
                respostaSelecionada = alternativas[i].value;
                break;
            }
        }

        // Verifica se o usuário respondeu algo antes de validar
        if (respostaSelecionada === "") {
            resultadoQuiz.textContent = "Por favor, selecione uma resposta antes de verificar.";
            resultadoQuiz.className = "erro";
            return;
        }

        // Processa e exibe o resultado dinamicamente na tela
        if (respostaSelecionada === "certo") {
            resultadoQuiz.textContent = "Correto! Desenvolver senso crítico é fundamental para não ser enganado por Deepfakes.";
            resultadoQuiz.className = "sucesso";
        } else {
            resultadoQuiz.textContent = "Incorreto. Atualmente, a Inteligência Artificial consegue simular vídeos muito convincentes. Fique atento!";
            resultadoQuiz.className = "erro";
        }
    });
});
