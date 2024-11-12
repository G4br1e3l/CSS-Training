function preprocessText(text) {
    return text.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^\w\s]/g, '')
        .trim();
}

function calcularSimilaridadeGeral(texto1, texto2) {
    const palavras1 = texto1.split(' ');
    const palavras2 = texto2.split(' ');

    let palavrasComuns = 0;
    palavras1.forEach(palavra => {
        if (palavras2.includes(palavra)) {
            palavrasComuns++;
        }
    });

    const similaridade = (palavrasComuns * 2 * 100) / (palavras1.length + palavras2.length);
    return similaridade;
}

function processarPerguntaContextual(pergunta, perguntasElemento) {
    const processedQuestion = preprocessText(pergunta);

    const perguntasProcessadas = Object.keys(perguntasElemento).map(p => ({
        original: p,
        processada: preprocessText(p)
    }));

    const perguntasSimilares = perguntasProcessadas.map(p => ({
        pergunta: p.original,
        similaridade: calcularSimilaridadeGeral(processedQuestion, p.processada)
    })).sort((a, b) => b.similaridade - a.similaridade);

    const perguntaMaisSimilar = perguntasSimilares[0];
    const limiarSimilaridade = 60;

    if (perguntaMaisSimilar.similaridade >= limiarSimilaridade) {
        return {
            tipo: 'resposta',
            texto: perguntasElemento[perguntaMaisSimilar.pergunta][0]
        };
    } else if (perguntaMaisSimilar.similaridade >= 40) {
        return {
            tipo: 'sugestao',
            perguntaOriginal: pergunta,
            perguntaSugerida: perguntaMaisSimilar.pergunta
        };
    } else {
        return {
            tipo: 'erro',
            texto: "Desculpe, não entendi sua pergunta. Tente uma das sugestões acima."
        };
    }
}

// Exportar funções para uso global
window.processarPerguntaContextual = processarPerguntaContextual;
window.preprocessText = preprocessText;
window.calcularSimilaridadeGeral = calcularSimilaridadeGeral;