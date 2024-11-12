const qaData = {
    flexbox: {
        "Como funciona o Flexbox?": [
            "O Flexbox é um modelo de layout que permite organizar elementos em uma direção (horizontal ou vertical). Os principais conceitos são: container flex (elemento pai) e flex items (elementos filhos). Use 'display: flex' no container e propriedades como 'justify-content' e 'align-items' para alinhar os elementos."
        ],
        "Como centralizar elementos com Flexbox?": [
            "Para centralizar elementos com Flexbox, use 'display: flex' no container junto com 'justify-content: center' para centralização horizontal e 'align-items: center' para centralização vertical."
        ],
        "Como criar um menu responsivo com Flexbox?": [
            "Para criar um menu responsivo, use 'display: flex' com 'flex-wrap: wrap'. Defina um 'flex-basis' para os itens e use media queries para ajustar o layout em telas menores. Exemplo: flex: 1 1 200px;"
        ],
        "Qual a diferença entre justify-content e align-items?": [
            "justify-content trabalha no eixo principal (horizontal em row, vertical em column) enquanto align-items trabalha no eixo transversal (vertical em row, horizontal em column). Por exemplo, em flex-direction: row, justify-content alinha horizontalmente e align-items verticalmente."
        ],
        "Como usar o flex-grow e flex-shrink?": [
            "flex-grow define quanto um item deve crescer em relação aos outros (0 não cresce, 1+ cresce proporcionalmente). flex-shrink define quanto um item deve encolher (0 não encolhe, 1+ encolhe proporcionalmente). Exemplo: flex: 1 1 auto (grow shrink basis)."
        ]
    },
    textocortado: {
        "Como criar efeito de texto cortado?": [
            "Use text-stroke para criar efeito de texto cortado. Exemplo: text-stroke: 1px 1px 1px #000;"
        ],
        "Como criar efeito de texto cortado com borda?": [
            "Use text-stroke com bordas para criar efeito de texto cortado. Exemplo: text-stroke: 1px 1px 1px #000; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;"
        ],
        "Como criar efeito de texto cortado com borda interna?": [
            "Use text-stroke com bordas internas para criar efeito de texto cortado. Exemplo: text-stroke: 1px 1px 1px #000; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;"
        ]
    },
    gridresponsivo: {
        "Como criar uma grade responsiva?": [
            "Use 'grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))' para criar colunas que se ajustam automaticamente ao espaço disponível. O 'auto-fit' com 'minmax()' permite que as colunas se adaptem ao tamanho da tela."
        ],
        "Como criar uma grade responsiva com espaçamento?": [
            "Use 'grid-gap' para definir o espaçamento entre as células da grade. Pode usar um valor (gap: 20px) para espaçamento igual ou dois valores (gap: 20px 10px) para espaçamento vertical e horizontal diferentes."
        ],
        "Como criar uma grade responsiva com áreas nomeadas?": [
            "Use 'grid-template-areas' para criar áreas nomeadas no grid. Defina as áreas usando strings como 'header header', 'nav main' e use 'grid-area' nos elementos filhos para associá-los às áreas. Exemplo: grid-area: header;"
        ]
    },
    grid: {
        "Qual a diferença entre Flexbox e Grid?": [
            "Flexbox é unidimensional (trabalha em uma direção por vez - linha OU coluna) enquanto Grid é bidimensional (trabalha com linhas E colunas simultaneamente). Flexbox é ideal para componentes, Grid para layouts completos."
        ],
        "Como criar uma grade responsiva?": [
            "Use 'grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))' para criar colunas que se ajustam automaticamente ao espaço disponível. O 'auto-fit' com 'minmax()' permite que as colunas se adaptem ao tamanho da tela."
        ],
        "Como funciona o grid-template-areas?": [
            "grid-template-areas permite criar layouts nomeando áreas do grid. Defina as áreas usando strings como 'header header', 'nav main' e use grid-area nos elementos filhos para associá-los às áreas. Exemplo: grid-area: header;"
        ],
        "Como alinhar itens no Grid?": [
            "Use justify-items e align-items para alinhar itens dentro de suas células (start, end, center, stretch). Para alinhar o grid inteiro, use justify-content e align-content. Para itens individuais, use justify-self e align-self."
        ],
        "O que é e como usar o grid gap?": [
            "grid-gap (ou gap) define o espaçamento entre linhas e colunas do grid. Pode usar um valor (gap: 20px) para espaçamento igual ou dois valores (gap: 20px 10px) para espaçamento vertical e horizontal diferentes."
        ]
    },
    gradiente: {
        "Como criar gradientes personalizados?": [
            "Gradientes podem ser lineares (linear-gradient) ou radiais (radial-gradient). A sintaxe básica é: background: linear-gradient(direção, cor1, cor2). Você pode especificar ângulos (45deg) e múltiplas cores com pontos de parada (color-stops)."
        ],
        "Como criar um gradiente com mais de duas cores?": [
            "Use múltiplos color-stops: 'linear-gradient(45deg, #ff0000 0%, #00ff00 50%, #0000ff 100%)'. Você pode especificar a posição de cada cor em porcentagem ou pixels."
        ],
        "Como fazer um gradiente circular?": [
            "Use radial-gradient(). Exemplo: background: radial-gradient(circle, #ff0000, #0000ff). Você pode especificar a posição (at center, at top left), forma (circle, ellipse) e tamanho (closest-side, farthest-corner)."
        ],
        "Como criar um gradiente repetido?": [
            "Use repeating-linear-gradient() ou repeating-radial-gradient(). Defina o padrão que deseja repetir com color-stops. Exemplo: repeating-linear-gradient(45deg, red 0px, red 10px, blue 10px, blue 20px)."
        ],
        "Como criar um gradiente com transparência?": [
            "Use valores rgba() ou hsla() para definir cores com transparência. Exemplo: linear-gradient(to right, rgba(255,0,0,1), rgba(255,0,0,0)). Isso é útil para criar efeitos de fade."
        ]
    },
    sombras: {
        "Como criar sombras em elementos?": [
            "Use box-shadow com valores para offset-x, offset-y, blur-radius, spread-radius e cor. Exemplo: box-shadow: 2px 2px 5px rgba(0,0,0,0.3). Pode adicionar inset para sombras internas."
        ],
        "Como criar múltiplas sombras?": [
            "Separe cada sombra com vírgula. Exemplo: box-shadow: 2px 2px 5px black, -2px -2px 5px red. A ordem importa: a primeira sombra fica por cima das seguintes."
        ],
        "Como criar sombra em texto?": [
            "Use text-shadow com valores para offset-x, offset-y, blur-radius e cor. Exemplo: text-shadow: 2px 2px 4px rgba(0,0,0,0.5). Pode combinar múltiplas sombras para efeitos mais complexos."
        ],
        "Como criar efeito de brilho com sombras?": [
            "Combine múltiplas sombras com cores claras e blur alto. Exemplo: box-shadow: 0 0 10px white, 0 0 20px yellow, 0 0 30px orange. Útil para efeitos de neon ou destaque."
        ],
        "Como criar sombra interna?": [
            "Adicione a palavra-chave inset ao box-shadow. Exemplo: box-shadow: inset 0 0 10px rgba(0,0,0,0.5). Pode combinar com sombras externas separando por vírgula."
        ]
    },
    posicionamento: {
        "Como funciona o position absolute?": [
            "position: absolute posiciona um elemento em relação ao seu ancestral posicionado mais próximo (com position diferente de static). Use top, right, bottom e left para definir a posição. Se não houver ancestral posicionado, o elemento será posicionado em relação ao body."
        ],
        "Qual a diferença entre position fixed e sticky?": [
            "fixed mantém o elemento fixo na viewport, independente da rolagem. sticky alterna entre relative e fixed: comporta-se como relative até atingir um limite definido, então se torna fixed. Útil para headers que 'grudam' ao rolar."
        ],
        "Como criar um elemento flutuante?": [
            "Use position: fixed com coordenadas (top, right, bottom, left) para manter o elemento visível independente da rolagem. Exemplo: position: fixed; bottom: 20px; right: 20px;"
        ],
        "Como empilhar elementos com z-index?": [
            "z-index controla a ordem de empilhamento de elementos posicionados. Valores maiores ficam na frente. Só funciona em elementos com position diferente de static. Exemplo: z-index: 100;"
        ]
    },
    multicoluna: {
        "Como criar colunas de texto?": [
            "Use column-count para definir o número de colunas ou column-width para largura ideal. Exemplo: column-count: 3; ou column-width: 200px;"
        ],
        "Como adicionar linha entre colunas?": [
            "Use column-rule para adicionar uma linha divisória entre colunas. Exemplo: column-rule: 1px solid #ccc; Você pode definir espessura, estilo e cor."
        ],
        "Como fazer um elemento ocupar todas as colunas?": [
            "Use column-span: all no elemento que deve atravessar todas as colunas. Útil para títulos ou destaques que precisam quebrar o fluxo das colunas."
        ]
    },
    keyframes: {
        "Como criar uma animação básica?": [
            "Defina os keyframes com @keyframes nome_animacao { } e use porcentagens ou from/to para estados. Aplique com animation: nome_animacao duração timing-function. Exemplo: animation: pulse 2s ease infinite;"
        ],
        "Como fazer animação em loop?": [
            "Use animation-iteration-count: infinite para loop infinito ou um número específico de repetições. Combine com animation-direction para controlar a direção do loop."
        ],
        "Como pausar uma animação?": [
            "Use animation-play-state: paused para pausar e running para retomar. Pode ser controlado com JavaScript ou :hover. Exemplo: elemento:hover { animation-play-state: paused; }"
        ]
    },
    transicoes: {
        "Como criar transições suaves?": [
            "Use transition: propriedade duração timing-function delay. Exemplo: transition: all 0.3s ease; Especifique propriedades individuais ou use 'all' para todas."
        ],
        "Como criar transições com delay?": [
            "Adicione um valor de delay após a duração: transition: transform 0.3s ease 0.1s; O último valor (0.1s) é o delay antes da transição começar."
        ],
        "Quais propriedades podem ser animadas?": [
            "A maioria das propriedades numéricas podem ser animadas: cores, dimensões, transformações, opacidade. Algumas propriedades como display não podem ser animadas."
        ]
    },
    transform: {
        "Como rotacionar elementos?": [
            "Use transform: rotate(45deg) para rotação 2D. Para 3D, use rotateX(), rotateY(), rotateZ() ou rotate3d(). Exemplo: transform: rotateY(180deg);"
        ],
        "Como criar efeito de escala?": [
            "Use transform: scale() para redimensionar. scale(2) dobra o tamanho, scale(0.5) reduz pela metade. Pode usar scaleX() e scaleY() para direções específicas."
        ],
        "Como combinar múltiplas transformações?": [
            "Liste as transformações em sequência: transform: translate(50px) rotate(45deg) scale(1.2); A ordem importa: cada transformação é aplicada na sequência definida."
        ]
    },
    glassmorphism: {
        "Como criar efeito de vidro?": [
            "Combine background-color com transparência (rgba) e backdrop-filter: blur(). Exemplo: background: rgba(255,255,255,0.2); backdrop-filter: blur(10px);"
        ],
        "Como melhorar a legibilidade em fundos glassmorphism?": [
            "Adicione uma sombra suave e ajuste a opacidade do fundo. Use box-shadow e border com transparência. Exemplo: box-shadow: 0 4px 30px rgba(0,0,0,0.1);"
        ]
    },
    neomorphism: {
        "Como criar efeito neomórfico?": [
            "Use box-shadow com sombras claras e escuras: box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff; Use cores baseadas no background."
        ],
        "Como criar botões neomórficos?": [
            "Combine sombras normais e inset para efeito pressionado: box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;"
        ]
    },
    mascaras: {
        "Como criar uma máscara básica?": [
            "Use mask-image com um gradiente ou imagem. Exemplo: mask-image: linear-gradient(to right, black 50%, transparent 50%); As áreas pretas da máscara mostram o conteúdo, as transparentes o ocultam."
        ],
        "Como usar SVG como máscara?": [
            "Defina um SVG com mask-image: url(#mask-id). O SVG deve ter áreas pretas para mostrar o conteúdo e transparentes para ocultá-lo. Útil para formas complexas."
        ],
        "Como animar máscaras CSS?": [
            "Anime as propriedades da máscara como position, size ou o próprio gradiente. Exemplo: @keyframes maskAnimation { from { mask-position: 0% } to { mask-position: 100% } }"
        ]
    },
    cores: {
        "Como criar uma paleta de cores personalizada?": [
            "Use CSS variables para definir cores base e alterar com :root { --cor-principal: #ff0000; } .elemento { background-color: var(--cor-principal); }"
        ],
        "Como criar uma paleta de cores com base em uma imagem?": [
            "Use color-mixing com filter: hue-rotate() e brightness(). Exemplo: background: linear-gradient(to right, red, yellow); filter: hue-rotate(90deg) brightness(1.5);"
        ]
    },
    gridareas: {
        "Como criar áreas de grid?": [
            "Use grid-template-areas para definir áreas nomeadas. Exemplo: grid-template-areas: 'header header' 'nav main' 'footer footer';"
        ],
        "Como associar elementos a áreas de grid?": [
            "Use grid-area no elemento filho para associar a uma área nomeada. Exemplo: grid-area: header;"
        ],
        "Como criar áreas de grid responsivas?": [
            "Use @container para definir regras responsivas. Exemplo: @container (min-width: 400px) { .elemento { grid-area: header; } }"
        ]
    },
    filtros: {
        "Como combinar múltiplos filtros?": [
            "Liste os filtros em sequência: filter: blur(5px) brightness(150%) contrast(120%). A ordem pode afetar o resultado final."
        ],
        "Como criar efeito de desfoque?": [
            "Use filter: blur(valor). Quanto maior o valor, mais desfocado. Exemplo: filter: blur(5px). Combine com hover para efeitos interativos."
        ],
        "Como ajustar cores com filtros?": [
            "Use hue-rotate() para mudar cores, saturate() para saturação e brightness() para brilho. Exemplo: filter: hue-rotate(90deg) saturate(150%) brightness(120%)."
        ],
        "Como criar efeito de escala de cinza?": [
            "Use filter: grayscale(). O valor vai de 0 a 1 ou 0% a 100%. Exemplo: filter: grayscale(100%) para preto e branco total."
        ]
    },
    misturacores: {
        "Como funciona mix-blend-mode?": [
            "mix-blend-mode define como um elemento se mistura com o fundo. Valores comuns: multiply, screen, overlay. Exemplo: mix-blend-mode: multiply para cores mais escuras."
        ],
        "Como criar sobreposições de cor?": [
            "Use background-blend-mode para misturar múltiplos fundos ou mix-blend-mode para elementos sobrepostos. Exemplo: background-blend-mode: overlay com múltiplas imagens/cores."
        ],
        "Qual a diferença entre mix-blend-mode e background-blend-mode?": [
            "mix-blend-mode afeta como o elemento inteiro se mistura com o que está abaixo, enquanto background-blend-mode mistura apenas os fundos dentro do próprio elemento."
        ]
    },
    animacaosprite: {
        "Como criar uma animação sprite básica?": [
            "Use uma imagem com frames sequenciais, defina o tamanho do container para um frame e anime background-position com steps(). Exemplo: animation: moveSprite 1s steps(8) infinite;"
        ],
        "Como controlar a velocidade da animação sprite?": [
            "Ajuste animation-duration para velocidade geral e steps() para suavidade. Mais steps significa movimento mais suave, menos steps movimento mais abrupto."
        ],
        "Como fazer sprite animation responsiva?": [
            "Use porcentagens ou unidades relativas para dimensões e posições. Calcule posições com calc() baseado no tamanho do container."
        ]
    },
    sequenciaanimacao: {
        "Como criar uma sequência de animações?": [
            "Use animation-delay para criar uma sequência de animações. Defina delays para cada animação para controlar o tempo de início de cada uma. Exemplo: animation-delay: 0s, 0.5s, 1s;"
        ],
        "Como animar elementos em sequência?": [
            "Use animation-delay para criar uma sequência de animações. Defina delays para cada animação para controlar o tempo de início de cada uma. Exemplo: animation-delay: 0s, 0.5s, 1s;"
        ],
        "Como animar elementos em sequência com delay?": [
            "Use animation-delay para criar uma sequência de animações. Defina delays para cada animação para controlar o tempo de início de cada uma. Exemplo: animation-delay: 0s, 0.5s, 1s;"
        ]
    },
    animacao3D: {
        "Como criar um card 3D flip?": [
            "Use transform-style: preserve-3d no container e rotateY(180deg) para o flip. Adicione backface-visibility: hidden para ocultar o verso. Exemplo: transform: rotateY(180deg);"
        ],
        "Como ajustar a perspectiva 3D?": [
            "Use perspective no container pai. Valores menores (500-1000px) criam efeito mais dramático, maiores são mais sutis. Exemplo: perspective: 1000px;"
        ],
        "Como animar transformações 3D?": [
            "Combine transform com animation ou transition. Use transform-origin para controlar o ponto de origem. Exemplo: transform: rotate3d(1, 1, 1, 45deg);"
        ]
    },
    containerqueries: {
        "Como usar container queries?": [
            "Defina container-type no elemento pai e use @container para regras responsivas. Exemplo: @container (min-width: 400px) { .elemento { /* estilos */ } }"
        ],
        "Qual a diferença entre container queries e media queries?": [
            "Container queries respondem ao tamanho do container pai, media queries à viewport. Container queries são ideais para componentes reutilizáveis em diferentes contextos."
        ],
        "Como definir múltiplos breakpoints em container queries?": [
            "Use múltiplas regras @container com diferentes condições. Pode combinar min-width, max-width, aspect-ratio etc. Exemplo: @container (min-width: 300px) and (max-width: 600px)"
        ]
    },
    fontvariations: {
        "Como usar fontes variáveis?": [
            "Use font-variation-settings com eixos suportados pela fonte. Exemplo: font-variation-settings: 'wght' 500, 'wdth' 80. Cada fonte tem seus próprios eixos."
        ],
        "Como animar fontes variáveis?": [
            "Adicione transition à propriedade font-variation-settings. Pode animar no hover ou com keyframes. Exemplo: transition: font-variation-settings 0.3s ease;"
        ],
        "Quais são os eixos comuns em fontes variáveis?": [
            "'wght' para peso, 'wdth' para largura, 'slnt' para inclinação, 'ital' para itálico. Consulte a documentação da fonte para eixos específicos."
        ]
    },
    textstroke: {
        "Como criar contorno em texto?": [
            "Use -webkit-text-stroke: largura cor. Exemplo: -webkit-text-stroke: 2px black. Combine com color: transparent para texto vazado."
        ],
        "Como criar efeito de texto com duplo contorno?": [
            "Combine -webkit-text-stroke com text-shadow. Exemplo: -webkit-text-stroke: 2px black; text-shadow: 3px 3px 0 red;"
        ],
        "Como animar contorno de texto?": [
            "Anime -webkit-text-stroke-width ou -webkit-text-stroke-color. Exemplo: transition: -webkit-text-stroke-width 0.3s;"
        ]
    },
    scrollsnap: {
        "Como implementar scroll snap em uma galeria?": [
            "Use scroll-snap-type no container (x mandatory para horizontal, y mandatory para vertical) e scroll-snap-align: start/center/end nos itens. Exemplo: .container { scroll-snap-type: x mandatory; } .item { scroll-snap-align: start; }"
        ],
        "Como ajustar o comportamento do snap?": [
            "Use scroll-snap-type com mandatory (snap forçado) ou proximity (snap quando próximo). Ajuste scroll-padding para espaço adicional e scroll-margin para pontos específicos de snap."
        ],
        "Como criar um carrossel com scroll snap?": [
            "Combine scroll-snap-type com flex ou grid para layout, defina largura dos itens em 100% e use scroll-snap-align. Adicione scroll-behavior: smooth para transição suave."
        ]
    },
    scrollbehavior: {
        "Como criar rolagem suave para âncoras?": [
            "Adicione scroll-behavior: smooth ao html ou elemento específico. Links de âncora rolarão suavemente. Exemplo: html { scroll-behavior: smooth; }"
        ],
        "Como prevenir propagação do scroll?": [
            "Use overscroll-behavior: contain para prevenir que o scroll se propague para elementos pais. Útil em modais e elementos com scroll independente."
        ],
        "Como criar animações baseadas no scroll?": [
            "Use scroll-timeline para criar animações que respondem à posição da rolagem. Combine com @keyframes para efeitos complexos baseados no scroll."
        ]
    }
};

// Função para obter perguntas específicas do elemento atual
function getPerguntasElemento(elementoTipo) {
    return qaData[elementoTipo] || null;
}

// Exportar a função para uso global
window.getPerguntasElemento = getPerguntasElemento;