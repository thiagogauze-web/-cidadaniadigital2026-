// === INTERAÇÃO 1: QUIZ SOBRE DEEPFAKES ===
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedAnswer = document.querySelector('input[name="quiz-answer"]:checked');
    const resultBox = document.getElementById('quiz-result');

    if (!selectedAnswer) {
        resultBox.textContent = "⚠️ Por favor, selecione uma opção antes de enviar.";
        resultBox.className = "result-box incorrect";
        resultBox.classList.remove('hidden');
        return;
    }

    if (selectedAnswer.value === "correta") {
        resultBox.textContent = "✅ Excelente! Você acertou. Movimentos oculares erráticos e a falta de sincronia fina no áudio são sinais clássicos de falhas de processamento em ferramentas de IA atuais.";
        resultBox.className = "result-box correct";
    } else {
        resultBox.textContent = "❌ Resposta incorreta. Lembre-se: Imagens geradas por IA costumam falhar exatamente nos pequenos detalhes biológicos, como o padrão de piscadas ou bordas complexas.";
        resultBox.className = "result-box incorrect";
    }

    resultBox.classList.remove('hidden');
});


// === INTERAÇÃO 2: SIMULADOR DE ANÁLISE DE LINKS ===
document.getElementById('btn-analyze').addEventListener('click', function() {
    const linkInput = document.getElementById('link-input').value.trim();
    const analysisBox = document.getElementById('analysis-result');

    if (linkInput === "") {
        analysisBox.textContent = "⚠️ Por favor, insira uma URL para simular a análise.";
        analysisBox.className = "result-box incorrect";
        analysisBox.classList.remove('hidden');
        return;
    }

    // Lógica simulada de checagem com base em termos comuns de links falsos ou confiáveis
    const urlLower = linkInput.toLowerCase();
    
    if (urlLower.includes('gov') || urlLower.includes('org') || urlLower.includes('edu')) {
        analysisBox.textContent = "🟢 Domínio institucional verificado (.gov, .org, .edu). Fontes governamentais e acadêmicas possuem maior credibilidade, mas lembre-se sempre de conferir o contexto dos dados compartilhados.";
        analysisBox.className = "result-box correct";
    } else if (urlLower.includes('polemico') || urlLower.includes('urgente') || urlLower.includes('bomba') || urlLower.includes('exclusivo')) {
        analysisBox.textContent = "🚨 Alerta de Sensacionalismo! Links contendo termos apelativos no endereço costumam ser iscas para Clickbait ou portais propagadores de desinformação emotiva.";
        analysisBox.className = "result-box warning";
    } else {
        analysisBox.textContent = "🔍 Análise Concluída: Domínio comercial padrão. Lembre-se de checar se grandes portais de jornalismo também estão noticiando o mesmo fato antes de repassar o conteúdo adiante.";
        analysisBox.className = "result-box warning";
    }

    analysisBox.classList.remove('hidden');
});
