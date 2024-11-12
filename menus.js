const menuData = {
        layout: {
            titulo: "Layout",
            subcategorias: {
                flexbox: {
                    nome: "Flexbox",
                    explanation: `
                        <h4>O que é Flexbox?</h4>
                        <p>Flexbox é um modelo de layout unidimensional que permite distribuir espaço e alinhar itens em um container de forma dinâmica.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>display: flex</code> - Ativa o layout flexbox</li>
                            <li><code>justify-content</code> - Alinha itens horizontalmente</li>
                            <li><code>align-items</code> - Alinha itens verticalmente</li>
                            <li><code>gap</code> - Define espaçamento entre os itens</li>
                        </ul>

                        <h4>Como Modificar</h4>
                        <p>Experimente alterar:</p>
                        <ul>
                            <li>Mude <code>justify-content</code> para: space-between, space-around, flex-start</li>
                            <li>Altere <code>align-items</code> para: flex-start, flex-end, stretch</li>
                            <li>Modifique <code>flex-direction</code> para: column</li>
                            <li>Ajuste o <code>gap</code> para diferentes valores</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Menus de navegação</li>
                            <li>Cartões em linha</li>
                            <li>Centralizações simples</li>
                            <li>Layouts responsivos</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    padding: 20px;
    background: linear-gradient(135deg, #764ba2, #667eea);
    border-radius: 10px;
    min-height: 200px;
}

.elemento-teste::before,
.elemento-teste::after,
.elemento-teste span:before {
    content: "Item Flex";
    padding: 15px 25px;
    background: rgba(255,255,255,0.2);
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    backdrop-filter: blur(5px);
    color: white;
    transition: transform 0.3s ease;
}

.elemento-teste > *:hover {
    transform: scale(1.05);
}`
                },
                grid: {
                    nome: "Grid",
                    explanation: `
                        <h4>O que é Grid?</h4>
                        <p>CSS Grid é um sistema de layout bidimensional que permite criar layouts complexos com linhas e colunas.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>display: grid</code> - Ativa o layout grid</li>
                            <li><code>grid-template-columns</code> - Define colunas</li>
                            <li><code>grid-template-rows</code> - Define linhas</li>
                            <li><code>gap</code> - Espaçamento entre células</li>
                        </ul>

                        <h4>Como Modificar</h4>
                        <p>Experimente alterar:</p>
                        <ul>
                            <li>Número de colunas: <code>grid-template-columns: repeat(3, 1fr)</code></li>
                            <li>Tamanho das células: <code>minmax(100px, 1fr)</code></li>
                            <li>Áreas do grid: <code>grid-template-areas</code></li>
                            <li>Alinhamento: <code>justify-items</code> e <code>align-items</code></li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Layouts de página completos</li>
                            <li>Galerias de imagens</li>
                            <li>Dashboards</li>
                            <li>Grids responsivos</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 100px;
    gap: 15px;
    padding: 20px;
    background: linear-gradient(45deg, #764ba2, #667eea);
    border-radius: 10px;
}

.elemento-teste::before,
.elemento-teste::after,
.elemento-teste span:before,
.elemento-teste span:after {
    content: "Item Grid";
    background: rgba(255,255,255,0.2);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    backdrop-filter: blur(5px);
    transition: transform 0.3s ease;
}

.elemento-teste > *:hover {
    transform: scale(0.95);
}`
                },
                posicionamento: {
                    nome: "Posicionamento",
                    explanation: `
                        <h4>O que é Posicionamento CSS?</h4>
                        <p>O posicionamento CSS controla como os elementos são posicionados na página em relação a outros elementos.</p>

                        <h4>Tipos de Posicionamento</h4>
                        <ul>
                            <li><code>position: static</code> - Posicionamento padrão</li>
                            <li><code>position: relative</code> - Relativo à posição original</li>
                            <li><code>position: absolute</code> - Relativo ao ancestral posicionado</li>
                            <li><code>position: fixed</code> - Fixo na viewport</li>
                            <li><code>position: sticky</code> - Alterna entre relative e fixed</li>
                        </ul>

                        <h4>Propriedades de Posicionamento</h4>
                        <ul>
                            <li><code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> - Define deslocamento</li>
                            <li><code>z-index</code> - Controla sobreposição</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Menus fixos</li>
                            <li>Modais e popups</li>
                            <li>Elementos sobrepostos</li>
                            <li>Headers que grudam no topo</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    position: relative;
    height: 250px;
    background: linear-gradient(135deg, #764ba2, #667eea);
    border-radius: 10px;
    padding: 20px;
    overflow: hidden;
}

.elemento-teste::before {
    content: "Elemento Fixo";
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255,255,255,0.2);
    padding: 10px 20px;
    border-radius: 8px;
    color: white;
    backdrop-filter: blur(5px);
    animation: flutuar 3s ease-in-out infinite;
}

.elemento-teste::after {
    content: "Elemento Absoluto";
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: rgba(255,255,255,0.3);
    padding: 10px 20px;
    border-radius: 8px;
    color: white;
    backdrop-filter: blur(5px);
    animation: pulsar 2s ease-in-out infinite;
}

@keyframes flutuar {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

@keyframes pulsar {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}`
                },
                multicoluna: {
                    nome: "Multi-Coluna",
                    explanation: `
                        <h4>O que é Multi-Coluna?</h4>
                        <p>CSS Multi-Coluna permite dividir o conteúdo em múltiplas colunas, similar a layouts de jornais e revistas.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>column-count</code> - Número de colunas</li>
                            <li><code>column-width</code> - Largura ideal das colunas</li>
                            <li><code>column-gap</code> - Espaço entre colunas</li>
                            <li><code>column-rule</code> - Linha divisória entre colunas</li>
                        </ul>

                        <h4>Recursos Adicionais</h4>
                        <ul>
                            <li><code>column-span</code> - Permite que elementos ocupem todas as colunas</li>
                            <li><code>break-inside</code> - Controla quebras de conteúdo</li>
                            <li><code>column-fill</code> - Como o conteúdo é distribuído</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Artigos longos</li>
                            <li>Layouts tipo revista</li>
                            <li>Galerias de texto</li>
                            <li>Conteúdo editorial</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    column-count: 3;
    column-gap: 25px;
    column-rule: 2px dashed rgba(118,75,162,0.3);
    padding: 20px;
    text-align: justify;
    background: white;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.elemento-teste::before {
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.";
    color: #764ba2;
    font-size: 0.95em;
    line-height: 1.6;
}

.elemento-teste p:first-child {
    column-span: all;
    text-align: center;
    color: #764ba2;
    font-size: 1.2em;
    margin-bottom: 20px;
}`
                },
                gridareas: {
                    nome: "Grid Areas",
                    explanation: `
                        <h4>O que são Grid Areas?</h4>
                        <p>Grid Areas permitem nomear áreas do grid e criar layouts complexos de forma mais intuitiva usando nomes descritivos.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>grid-template-areas</code> - Define o layout usando nomes</li>
                            <li><code>grid-area</code> - Associa um elemento a uma área nomeada</li>
                        </ul>

                        <h4>Como Usar</h4>
                        <ul>
                            <li>Defina áreas usando strings com nomes: "header header"</li>
                            <li>Use ponto (.) para células vazias</li>
                            <li>Cada linha deve ter o mesmo número de colunas</li>
                            <li>Áreas devem formar retângulos</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Layouts de página completos</li>
                            <li>Dashboards</li>
                            <li>Interfaces de aplicativos</li>
                            <li>Layouts responsivos complexos</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar content content"
        "footer footer footer";
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 15px;
    padding: 20px;
    background: linear-gradient(135deg, #764ba2, #667eea);
    border-radius: 10px;
    min-height: 300px;
}

.elemento-teste::before {
    content: "Header";
    grid-area: header;
    background: rgba(255,255,255,0.2);
    padding: 20px;
    border-radius: 8px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    backdrop-filter: blur(5px);
}

.elemento-teste::after {
    content: "Sidebar";
    grid-area: sidebar;
    background: rgba(255,255,255,0.15);
    padding: 20px;
    border-radius: 8px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
}

.elemento-teste span::before {
    content: "Content";
    grid-area: content;
    background: rgba(255,255,255,0.25);
    padding: 20px;
    border-radius: 8px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
}

.elemento-teste span::after {
    content: "Footer";
    grid-area: footer;
    background: rgba(255,255,255,0.2);
    padding: 20px;
    border-radius: 8px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
}`
                }
            }
        },
        estilizacao: {
            titulo: "Estilização",
            subcategorias: {
                cores: {
                    nome: "Cores",
                    explanation: `
                        <h4>Cores no CSS</h4>
                        <p>CSS oferece várias formas de definir cores para elementos.</p>

                        <h4>Formatos de Cor</h4>
                        <ul>
                            <li><code>Nomes</code> - red, blue, green</li>
                            <li><code>Hexadecimal</code> - #FF0000, #0000FF</li>
                            <li><code>RGB</code> - rgb(255, 0, 0)</li>
                            <li><code>RGBA</code> - rgba(255, 0, 0, 0.5)</li>
                            <li><code>HSL</code> - hsl(0, 100%, 50%)</li>
                        </ul>

                        <h4>Propriedades Comuns</h4>
                        <ul>
                            <li><code>color</code> - Cor do texto</li>
                            <li><code>background-color</code> - Cor de fundo</li>
                            <li><code>border-color</code> - Cor da borda</li>
                        </ul>

                        <h4>Dicas</h4>
                        <ul>
                            <li>Use RGBA para transparência</li>
                            <li>HSL para ajustes intuitivos</li>
                            <li>Variáveis CSS para temas</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    background: linear-gradient(135deg, #764ba2, #667eea);
    color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.elemento-teste::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, 
        rgba(255,255,255,0.2) 0%,
        rgba(255,255,255,0.1) 30%,
        transparent 70%);
    animation: girar 10s linear infinite;
}

@keyframes girar {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`
                },
                gradiente: {
                    nome: "Gradientes",
                    explanation: `
                        <h4>Gradientes CSS</h4>
                        <p>Gradientes criam transições suaves entre duas ou mais cores.</p>

                        <h4>Tipos de Gradiente</h4>
                        <ul>
                            <li><code>linear-gradient()</code> - Em linha reta</li>
                            <li><code>radial-gradient()</code> - Em círculo/elipse</li>
                            <li><code>conic-gradient()</code> - Em formato cônico</li>
                        </ul>

                        <h4>Propriedades</h4>
                        <ul>
                            <li>Direção: <code>to right</code>, <code>45deg</code></li>
                            <li>Color stops: <code>color 20%</code></li>
                            <li>Repetição: <code>repeating-linear-gradient()</code></li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Fundos decorativos</li>
                            <li>Botões estilizados</li>
                            <li>Efeitos de sobreposição</li>
                            <li>Barras de progresso</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    background: linear-gradient(45deg, #ff6b6b, #feca57);
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
}`
                },
                sombras: {
                    nome: "Sombras",
                    explanation: `
                        <h4>O que são Sombras CSS?</h4>
                        <p>Sombras adicionam profundidade e dimensão aos elementos usando box-shadow para elementos e text-shadow para textos.</p>

                        <h4>Tipos de Sombra</h4>
                        <ul>
                            <li><code>box-shadow</code> - Sombra em elementos</li>
                            <li><code>text-shadow</code> - Sombra em textos</li>
                            <li>Sombras internas vs externas</li>
                            <li>Múltiplas sombras</li>
                        </ul>

                        <h4>Propriedades</h4>
                        <ul>
                            <li>Deslocamento X e Y</li>
                            <li>Desfoque (blur)</li>
                            <li>Espalhamento (spread)</li>
                            <li>Cor da sombra</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Cartões e elementos flutuantes</li>
                            <li>Botões e interações</li>
                            <li>Texto destacado</li>
                            <li>Efeitos de profundidade</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    background: white;
    color: #764ba2;
    padding: 20px;
    box-shadow: 
        0 5px 15px rgba(0,0,0,0.2),
        0 0 0 10px rgba(118,75,162,0.1);
    text-align: center;
    border-radius: 8px;
}`
                },
                bordas: {
                    nome: "Bordas",
                    explanation: `
                        <h4>Bordas no CSS</h4>
                        <p>Bordas definem os limites dos elementos e podem ser estilizadas de diversas formas.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>border-width</code> - Espessura da borda</li>
                            <li><code>border-style</code> - Estilo (solid, dashed, etc)</li>
                            <li><code>border-color</code> - Cor da borda</li>
                            <li><code>border-radius</code> - Cantos arredondados</li>
                        </ul>

                        <h4>Estilos Avançados</h4>
                        <ul>
                            <li>Bordas por lado (top, right, bottom, left)</li>
                            <li>Bordas com imagens</li>
                            <li>Bordas duplas ou múltiplas</li>
                            <li>Bordas gradiente</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Delimitação de elementos</li>
                            <li>Botões e controles</li>
                            <li>Frames e molduras</li>
                            <li>Efeitos decorativos</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    background: white;
    color: #764ba2;
    padding: 20px;
    border: 2px solid #764ba2;
    border-radius: 15px;
    text-align: center;
    position: relative;
}

.elemento-teste::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px dashed #764ba2;
    border-radius: 20px;
    z-index: -1;
}`
                },
                transparencia: {
                    nome: "Transparência",
                    explanation: `
                        <h4>Transparência no CSS</h4>
                        <p>A transparência permite criar elementos semi-transparentes e efeitos de sobreposição.</p>

                        <h4>Métodos de Transparência</h4>
                        <ul>
                            <li><code>opacity</code> - Transparência do elemento inteiro</li>
                            <li><code>rgba()</code> - Cor com canal alfa</li>
                            <li><code>hsla()</code> - HSL com canal alfa</li>
                            <li><code>transparent</code> - Totalmente transparente</li>
                        </ul>

                        <h4>Considerações</h4>
                        <ul>
                            <li>Opacity afeta todo o elemento e seus filhos</li>
                            <li>RGBA/HSLA afeta apenas a propriedade específica</li>
                            <li>Impacto na legibilidade</li>
                            <li>Performance em camadas</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Overlays e modais</li>
                            <li>Efeitos de hover</li>
                            <li>Fundos semi-transparentes</li>
                            <li>Elementos de interface suaves</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    background: rgba(118,75,162,0.7);
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    backdrop-filter: blur(5px);
}`
                },
                mascaras: {
                    nome: "Máscaras CSS",
                    explanation: `
                        <h4>O que são Máscaras CSS?</h4>
                        <p>Máscaras CSS permitem ocultar partes de elementos usando imagens ou gradientes como máscaras.</p>

                        <h4>Propriedades</h4>
                        <ul>
                            <li><code>mask-image</code> - Define a imagem da máscara</li>
                            <li><code>mask-size</code> - Tamanho da máscara</li>
                            <li><code>mask-position</code> - Posição da máscara</li>
                            <li><code>mask-repeat</code> - Repetição da máscara</li>
                        </ul>

                        <h4>Tipos de Máscara</h4>
                        <ul>
                            <li>Imagens PNG com transparência</li>
                            <li>Gradientes CSS</li>
                            <li>SVG como máscara</li>
                            <li>Múltiplas máscaras</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Efeitos de fade</li>
                            <li>Formas complexas</li>
                            <li>Transições suaves</li>
                            <li>Elementos decorativos</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    -webkit-mask-image: linear-gradient(45deg, black 50%, transparent 50%);
    mask-image: linear-gradient(45deg, black 50%, transparent 50%);
    background: linear-gradient(45deg, #ff6b6b, #feca57);
    padding: 40px;
    color: white;
    text-align: center;
}`
                },
                filtros: {
                    nome: "Filtros",
                    explanation: `
                        <h4>Filtros CSS</h4>
                        <p>Filtros aplicam efeitos visuais a elementos, similar a editores de imagem.</p>

                        <h4>Tipos de Filtro</h4>
                        <ul>
                            <li><code>blur()</code> - Desfoque</li>
                            <li><code>brightness()</code> - Brilho</li>
                            <li><code>contrast()</code> - Contraste</li>
                            <li><code>grayscale()</code> - Escala de cinza</li>
                            <li><code>hue-rotate()</code> - Rotação de matiz</li>
                        </ul>

                        <h4>Recursos Avançados</h4>
                        <ul>
                            <li>Múltiplos filtros</li>
                            <li>Animação de filtros</li>
                            <li>Filtros em fundos</li>
                            <li>Performance</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Efeitos em imagens</li>
                            <li>Interações de hover</li>
                            <li>Estados desabilitados</li>
                            <li>Efeitos artísticos</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    filter: hue-rotate(90deg) contrast(150%) brightness(110%);
    background: linear-gradient(45deg, #ff6b6b, #feca57);
    padding: 20px;
    color: white;
    text-align: center;
    transition: filter 0.3s ease;
}

.elemento-teste:hover {
    filter: hue-rotate(180deg) contrast(200%) brightness(120%);
}`
                },
                misturacores: {
                    nome: "Mistura de Cores",
                    explanation: `
                        <h4>Mistura de Cores CSS</h4>
                        <p>Mix-blend-mode e background-blend-mode permitem misturar cores e camadas de forma criativa.</p>

                        <h4>Modos de Mistura</h4>
                        <ul>
                            <li><code>multiply</code> - Multiplicação de cores</li>
                            <li><code>screen</code> - Efeito de tela</li>
                            <li><code>overlay</code> - Sobreposição</li>
                            <li><code>color-dodge</code> - Esquiva de cor</li>
                        </ul>

                        <h4>Propriedades</h4>
                        <ul>
                            <li><code>mix-blend-mode</code> - Para elementos</li>
                            <li><code>background-blend-mode</code> - Para fundos</li>
                            <li>Isolamento de mistura</li>
                            <li>Composição de camadas</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Efeitos fotográficos</li>
                            <li>Sobreposições criativas</li>
                            <li>Texturas dinâmicas</li>
                            <li>Arte digital</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    background: #764ba2;
    mix-blend-mode: screen;
    padding: 20px;
    color: white;
    text-align: center;
}

.elemento-teste::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #feca57;
    mix-blend-mode: multiply;
    pointer-events: none;
}`
                }
            }
        },
        animacoes: {
            titulo: "Animações",
            subcategorias: {
                keyframes: {
                    nome: "@keyframes",
                    explanation: `
                        <h4>O que são @keyframes?</h4>
                        <p>@keyframes permitem criar animações personalizadas definindo estados em diferentes pontos do tempo.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>animation-name</code> - Nome da animação</li>
                            <li><code>animation-duration</code> - Duração</li>
                            <li><code>animation-timing-function</code> - Curva de aceleração</li>
                            <li><code>animation-iteration-count</code> - Número de repetições</li>
                        </ul>

                        <h4>Pontos-Chave</h4>
                        <ul>
                            <li>Use porcentagens (0% a 100%) ou from/to</li>
                            <li>Defina múltiplos estados intermediários</li>
                            <li>Combine múltiplas animações</li>
                            <li>Controle direção e preenchimento</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Transições complexas</li>
                            <li>Animações de carregamento</li>
                            <li>Efeitos de interface</li>
                            <li>Animações de estado</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    background: linear-gradient(45deg, #764ba2, #667eea);
    padding: 20px;
    border-radius: 10px;
    animation: pulsar 2s ease-in-out infinite;
}

@keyframes pulsar {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.05);
        opacity: 0.8;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}`
                },
                transicoes: {
                    nome: "Transições",
                    explanation: `
                        <h4>O que são Transições CSS?</h4>
                        <p>Transições permitem animar suavemente mudanças de valores de propriedades CSS.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>transition-property</code> - Propriedade a animar</li>
                            <li><code>transition-duration</code> - Duração</li>
                            <li><code>transition-timing-function</code> - Curva de tempo</li>
                            <li><code>transition-delay</code> - Atraso inicial</li>
                        </ul>

                        <h4>Funções de Tempo</h4>
                        <ul>
                            <li>ease, linear, ease-in, ease-out</li>
                            <li>cubic-bezier() para curvas personalizadas</li>
                            <li>steps() para transições em etapas</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Hover effects</li>
                            <li>Mudanças de estado</li>
                            <li>Feedback visual</li>
                            <li>Micro-interações</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    background: #764ba2;
    color: white;
    padding: 20px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
}

.elemento-teste:hover {
    background: #667eea;
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}`
                },
                transform: {
                    nome: "Transformações",
                    explanation: `
                        <h4>O que são Transformações CSS?</h4>
                        <p>Transform permite modificar a posição, tamanho e forma dos elementos sem afetar o layout.</p>

                        <h4>Tipos de Transformação</h4>
                        <ul>
                            <li><code>translate()</code> - Move o elemento</li>
                            <li><code>scale()</code> - Redimensiona</li>
                            <li><code>rotate()</code> - Gira</li>
                            <li><code>skew()</code> - Inclina</li>
                        </ul>

                        <h4>Transformações 3D</h4>
                        <ul>
                            <li>perspective para profundidade</li>
                            <li>rotateX, rotateY, rotateZ</li>
                            <li>translate3d e scale3d</li>
                            <li>transform-style: preserve-3d</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Animações suaves</li>
                            <li>Efeitos de hover</li>
                            <li>Layouts 3D</li>
                            <li>Transições de interface</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    background: linear-gradient(45deg, #764ba2, #667eea);
    color: white;
    padding: 20px;
    border-radius: 10px;
    transition: transform 0.5s ease;
}

.elemento-teste:hover {
    transform: perspective(1000px) 
               rotateY(15deg) 
               rotateX(5deg) 
               translateZ(20px);
}`
                },
                animacaosprite: {
                    nome: "Sprite Animation",
                    explanation: `
                        <h4>O que é Animação Sprite?</h4>
                        <p>Sprite animation usa uma única imagem contendo vários frames para criar animações.</p>

                        <h4>Técnicas Principais</h4>
                        <ul>
                            <li><code>steps()</code> para movimento frame a frame</li>
                            <li>background-position para posicionamento</li>
                            <li>Controle de timing e velocidade</li>
                            <li>Otimização de performance</li>
                        </ul>

                        <h4>Implementação</h4>
                        <ul>
                            <li>Organize frames em uma linha/coluna</li>
                            <li>Calcule tamanho de cada frame</li>
                            <li>Use animation-timing-function: steps()</li>
                            <li>Controle direção e repetição</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Personagens de jogos</li>
                            <li>Ícones animados</li>
                            <li>Indicadores de loading</li>
                            <li>Animações complexas</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    width: 100px;
    height: 100px;
    background: url('sprite.png');
    animation: sprite-animation 1s steps(8) infinite;
}

@keyframes sprite-animation {
    from { background-position: 0 0; }
    to { background-position: -800px 0; } /* 8 frames * 100px */
}

/* Simulação visual já que não temos sprite */
.elemento-teste::before {
    content: '🏃‍♂️';
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    animation: correr 0.5s steps(4) infinite;
}

@keyframes correr {
    0% { transform: translateX(-10px); }
    100% { transform: translateX(10px); }
}`
                },
                animacao3D: {
                    nome: "Animação 3D",
                    explanation: `
                        <h4>O que são Animações 3D?</h4>
                        <p>Animações 3D combinam transformações e perspectiva para criar efeitos tridimensionais.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>perspective</code> - Profundidade da cena</li>
                            <li><code>transform-style</code> - Preservação 3D</li>
                            <li><code>backface-visibility</code> - Visibilidade do verso</li>
                            <li>Transformações 3D (rotate3d, translate3d)</li>
                        </ul>

                        <h4>Técnicas Avançadas</h4>
                        <ul>
                            <li>Composição de transformações</li>
                            <li>Perspectiva individual vs. grupo</li>
                            <li>Animações em múltiplos eixos</li>
                            <li>Efeitos de profundidade</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Carrosséis 3D</li>
                            <li>Flip cards</li>
                            <li>Navegação espacial</li>
                            <li>Efeitos imersivos</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    background: linear-gradient(45deg, #764ba2, #667eea);
    color: white;
    padding: 20px;
    border-radius: 10px;
    perspective: 1000px;
    transform-style: preserve-3d;
    position: relative;
    min-height: 200px;
    transition: transform 0.5s ease;
}

.elemento-teste::before {
    content: "Frente";
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.1);
    border-radius: inherit;
}

.elemento-teste::after {
    content: "Verso";
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.2);
    transform: rotateY(180deg);
    border-radius: inherit;
}

.elemento-teste:hover {
    transform: rotateY(180deg);
}`
                },
                sequenciaanimacao: {
                    nome: "Sequência de Animações",
                    explanation: `
                        <h4>O que são Sequências de Animação?</h4>
                        <p>Múltiplas animações combinadas para criar efeitos complexos e coordenados.</p>

                        <h4>Propriedades</h4>
                        <ul>
                            <li><code>animation</code> com múltiplos valores</li>
                            <li><code>animation-delay</code> para timing</li>
                            <li>Controle individual de cada animação</li>
                            <li>Sincronização de sequências</li>
                        </ul>

                        <h4>Técnicas</h4>
                        <ul>
                            <li>Encadeamento de animações</li>
                            <li>Loops parciais e completos</li>
                            <li>Alternância de direção</li>
                            <li>Estados intermediários</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Animações complexas</li>
                            <li>Transições elaboradas</li>
                            <li>Storytelling visual</li>
                            <li>Efeitos de partículas</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    background: linear-gradient(45deg, #764ba2, #667eea);
    color: white;
    padding: 20px;
    border-radius: 10px;
    animation: 
        aparecer 0.5s ease-out,
        flutuar 2s ease-in-out infinite 0.5s,
        brilhar 3s linear infinite;
}

@keyframes aparecer {
    from { 
        opacity: 0;
        transform: translateY(20px);
    }
    to { 
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes flutuar {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

@keyframes brilhar {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.2); }
}`
                }
            }
        },
        efeitos: {
            titulo: "Efeitos Especiais",
            subcategorias: {
                glassmorphism: {
                    nome: "Glassmorphism",
                    explanation: `
                        <h4>O que é Glassmorphism?</h4>
                        <p>Efeito visual que simula vidro fosco ou translúcido com blur e transparência.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>backdrop-filter: blur()</code> - Desfoque do fundo</li>
                            <li><code>background: rgba()</code> - Transparência</li>
                            <li><code>border</code> - Bordas sutis</li>
                            <li><code>box-shadow</code> - Sombras suaves</li>
                        </ul>

                        <h4>Considerações</h4>
                        <ul>
                            <li>Performance do backdrop-filter</li>
                            <li>Contraste e legibilidade</li>
                            <li>Compatibilidade com navegadores</li>
                            <li>Fundos complexos</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Cartões e modais</li>
                            <li>Menus de navegação</li>
                            <li>Overlays</li>
                            <li>Interfaces modernas</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    color: white;
    position: relative;
    overflow: hidden;
}

.elemento-teste::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle,
        rgba(255,255,255,0.1) 0%,
        transparent 70%
    );
    animation: girar 10s linear infinite;
}

.elemento-teste::after {
    content: "Glassmorphism";
    position: relative;
    z-index: 1;
    display: block;
    text-align: center;
    font-size: 1.5em;
    text-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

@keyframes girar {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}`
                },
                neomorphism: {
                    nome: "Neomorphism",
                    explanation: `
                        <h4>O que é Neomorphism?</h4>
                        <p>Estilo de design que simula extrusão suave usando sombras para criar efeito 3D sutil.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>box-shadow</code> - Sombras duplas</li>
                            <li><code>background</code> - Cor base</li>
                            <li><code>border-radius</code> - Cantos suaves</li>
                            <li>Gradientes sutis</li>
                        </ul>

                        <h4>Técnicas</h4>
                        <ul>
                            <li>Sombras claras e escuras</li>
                            <li>Profundidade controlada</li>
                            <li>Estados interativos</li>
                            <li>Consistência de luz</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Botões e controles</li>
                            <li>Painéis de controle</li>
                            <li>Elementos interativos</li>
                            <li>Interfaces minimalistas</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    background: #e0e5ec;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 
        8px 8px 15px #a3b1c6,
        -8px -8px 15px #ffffff;
    color: #764ba2;
    transition: all 0.3s ease;
}

.elemento-teste:hover {
    box-shadow: 
        inset 8px 8px 15px #a3b1c6,
        inset -8px -8px 15px #ffffff;
}`
                },
                textocortado: {
                    nome: "Texto Cortado",
                    explanation: `
                        <h4>O que é Texto Cortado?</h4>
                        <p>Técnica que usa background-clip para criar efeitos de preenchimento em texto.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>background-clip: text</code> - Corte do fundo</li>
                            <li><code>-webkit-text-fill-color</code> - Cor do texto</li>
                            <li><code>background</code> - Imagem ou gradiente</li>
                            <li>Efeitos de texto</li>
                        </ul>

                        <h4>Técnicas Avançadas</h4>
                        <ul>
                            <li>Gradientes animados</li>
                            <li>Padrões e texturas</li>
                            <li>Máscaras de texto</li>
                            <li>Efeitos de movimento</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Títulos chamativos</li>
                            <li>Logos e marcas</li>
                            <li>Efeitos decorativos</li>
                            <li>Texto estilizado</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    font-size: 3em;
    font-weight: bold;
    background: linear-gradient(
        45deg,
        #764ba2,
        #667eea,
        #764ba2
    );
    background-size: 200% auto;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: texto-gradiente 3s linear infinite;
    text-align: center;
    padding: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.elemento-teste::before {
    content: "Texto Cortado";
}

@keyframes texto-gradiente {
    to {
        background-position: 200% center;
    }
}`
                }
            }
        },
        responsividade: {
            titulo: "Responsividade",
            subcategorias: {
                gridresponsivo: {
                    nome: "Grid Responsivo",
                    explanation: `
                        <h4>O que é Grid Responsivo?</h4>
                        <p>Layout em grade que se adapta automaticamente ao tamanho da tela.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>grid-template-columns</code> com auto-fit/auto-fill</li>
                            <li><code>minmax()</code> para tamanhos flexíveis</li>
                            <li><code>gap</code> para espaçamento</li>
                            <li>Unidades responsivas (fr, %)</li>
                        </ul>

                        <h4>Técnicas</h4>
                        <ul>
                            <li>Colunas automáticas</li>
                            <li>Áreas adaptativas</li>
                            <li>Fallbacks para navegadores antigos</li>
                            <li>Breakpoints dinâmicos</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Galerias de imagens</li>
                            <li>Cards responsivos</li>
                            <li>Layouts de blog</li>
                            <li>Grids de produtos</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
    background: linear-gradient(135deg, #764ba2, #667eea);
    border-radius: 10px;
}

.elemento-teste::before,
.elemento-teste::after,
.elemento-teste span::before {
    content: "Slide";
    flex: 0 0 100%;
    height: 200px;
    scroll-snap-align: start;
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5em;
    backdrop-filter: blur(5px);
}

/* Esconde a barra de rolagem mantendo a funcionalidade */
.elemento-teste {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.elemento-teste::-webkit-scrollbar {
    display: none;
}`
                },
                containerqueries: {
                    nome: "Container Queries",
                    explanation: `
                        <h4>O que são Container Queries?</h4>
                        <p>Permitem que elementos respondam ao tamanho de seu container, não apenas da viewport.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>container-type</code> - Tipo de containment</li>
                            <li><code>container-name</code> - Nome do container</li>
                            <li><code>@container</code> - Regras de consulta</li>
                            <li>Queries de tamanho e estilo</li>
                        </ul>

                        <h4>Vantagens</h4>
                        <ul>
                            <li>Componentes verdadeiramente responsivos</li>
                            <li>Reutilização de componentes</li>
                            <li>Layout contextual</li>
                            <li>Design modular</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Componentes adaptáveis</li>
                            <li>Layouts dinâmicos</li>
                            <li>Cards responsivos</li>
                            <li>Widgets flexíveis</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    container-type: inline-size;
    container-name: card;
    background: linear-gradient(45deg, #764ba2, #667eea);
    border-radius: 10px;
    padding: 20px;
    color: white;
    text-align: center;
    min-width: 200px;
    max-width: 100%;
    margin: 0 auto;
}

.elemento-teste::before {
    content: "Layout Pequeno";
    display: block;
    font-size: 1.2em;
    margin-bottom: 10px;
}

@container card (min-width: 400px) {
    .elemento-teste::before {
        content: "Layout Médio";
        font-size: 1.5em;
    }
    
    .elemento-teste {
        padding: 30px;
    }
}

@container card (min-width: 600px) {
    .elemento-teste::before {
        content: "Layout Grande";
        font-size: 1.8em;
    }
    
    .elemento-teste {
        padding: 40px;
    }
}`
                }
            }
        },
        tipografia: {
            titulo: "Tipografia",
            subcategorias: {
                fontvariations: {
                    nome: "Variações de Fonte",
                    explanation: `
                        <h4>Variações de Fonte CSS</h4>
                        <p>Font-variation-settings permite controlar eixos variáveis em fontes variáveis modernas.</p>

                        <h4>Eixos Comuns</h4>
                        <ul>
                            <li><code>'wght'</code> - Peso da fonte</li>
                            <li><code>'wdth'</code> - Largura</li>
                            <li><code>'slnt'</code> - Inclinação</li>
                            <li><code>'ital'</code> - Itálico</li>
                        </ul>

                        <h4>Recursos</h4>
                        <ul>
                            <li>Animação suave entre valores</li>
                            <li>Personalização precisa</li>
                            <li>Economia de arquivos</li>
                            <li>Performance otimizada</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Tipografia responsiva</li>
                            <li>Animações de texto</li>
                            <li>Interfaces adaptativas</li>
                            <li>Design expressivo</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    font-variation-settings: 
        'wght' 700,
        'wdth' 80,
        'slnt' -10;
    font-size: 2em;
    color: #764ba2;
    text-align: center;
    padding: 20px;
    transition: font-variation-settings 0.3s ease;
}

.elemento-teste:hover {
    font-variation-settings: 
        'wght' 900,
        'wdth' 100,
        'slnt' 0;
}`
                },
                textstroke: {
                    nome: "Contorno de Texto",
                    explanation: `
                        <h4>Contorno de Texto CSS</h4>
                        <p>Text-stroke permite adicionar contornos em textos para efeitos visuais únicos.</p>

                        <h4>Propriedades</h4>
                        <ul>
                            <li><code>-webkit-text-stroke-width</code> - Largura do contorno</li>
                            <li><code>-webkit-text-stroke-color</code> - Cor do contorno</li>
                            <li><code>-webkit-text-stroke</code> - Atalho</li>
                            <li>Compatibilidade com navegadores</li>
                        </ul>

                        <h4>Técnicas</h4>
                        <ul>
                            <li>Contornos duplos com sombras</li>
                            <li>Texto vazado</li>
                            <li>Efeitos de profundidade</li>
                            <li>Combinação com gradientes</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Títulos chamativos</li>
                            <li>Texto sobre imagens</li>
                            <li>Efeitos decorativos</li>
                            <li>Design de logotipos</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    -webkit-text-stroke: 2px #764ba2;
    color: transparent;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    padding: 20px;
    text-shadow: 
        3px 3px 0 #feca57,
        6px 6px 0 rgba(0,0,0,0.2);
}`
                }
            }
        },
        scroll: {
            titulo: "Scroll",
            subcategorias: {
                scrollsnap: {
                    nome: "Scroll Snap",
                    explanation: `
                        <h4>O que é Scroll Snap?</h4>
                        <p>CSS Scroll Snap permite criar experiências de rolagem precisas e controladas, fazendo com que o scroll "grude" em determinados pontos.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>scroll-snap-type</code> - Define o comportamento do snap</li>
                            <li><code>scroll-snap-align</code> - Alinhamento dos pontos de snap</li>
                            <li><code>scroll-padding</code> - Espaço adicional ao rolar</li>
                            <li><code>scroll-margin</code> - Margem para os pontos de snap</li>
                        </ul>

                        <h4>Técnicas</h4>
                        <ul>
                            <li>Carrosséis suaves</li>
                            <li>Galerias de página inteira</li>
                            <li>Navegação por seções</li>
                            <li>Slides responsivos</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Apresentações</li>
                            <li>Galerias de fotos</li>
                            <li>Landing pages</li>
                            <li>Navegação por cards</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    scroll-snap-type: x mandatory;
    overflow-x: scroll;
    display: flex;
    gap: 20px;
    padding: 20px;
    background: linear-gradient(135deg, #764ba2, #667eea);
    border-radius: 10px;
}

.elemento-teste::before,
.elemento-teste::after,
.elemento-teste span::before {
    content: "Slide";
    flex: 0 0 100%;
    height: 200px;
    scroll-snap-align: start;
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5em;
    backdrop-filter: blur(5px);
}

/* Esconde a barra de rolagem mantendo a funcionalidade */
.elemento-teste {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.elemento-teste::-webkit-scrollbar {
    display: none;
}`
                },
                scrollbehavior: {
                    nome: "Scroll Behavior",
                    explanation: `
                        <h4>O que é Scroll Behavior?</h4>
                        <p>Define como o navegador deve animar a rolagem entre elementos ou pontos específicos da página.</p>

                        <h4>Propriedades Principais</h4>
                        <ul>
                            <li><code>scroll-behavior</code> - Suaviza a rolagem</li>
                            <li><code>overscroll-behavior</code> - Controla o comportamento de overflow</li>
                            <li><code>scroll-timeline</code> - Animações baseadas na rolagem</li>
                            <li><code>scroll-margin</code> - Ajusta o ponto de parada</li>
                        </ul>

                        <h4>Técnicas</h4>
                        <ul>
                            <li>Rolagem suave</li>
                            <li>Animações no scroll</li>
                            <li>Navegação âncora</li>
                            <li>Efeitos parallax</li>
                        </ul>

                        <h4>Casos de Uso</h4>
                        <ul>
                            <li>Navegação one-page</li>
                            <li>Menus de ancoragem</li>
                            <li>Animações por scroll</li>
                            <li>UX aprimorada</li>
                        </ul>
                    `,
                    exemplo: `.elemento-teste {
    scroll-behavior: smooth;
    height: 300px;
    overflow-y: scroll;
    background: linear-gradient(135deg, #764ba2, #667eea);
    border-radius: 10px;
    padding: 20px;
}

.elemento-teste::before,
.elemento-teste::after,
.elemento-teste span::before {
    content: "Seção";
    display: block;
    height: 200px;
    margin-bottom: 20px;
    background: rgba(255,255,255,0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5em;
    backdrop-filter: blur(5px);
    transition: transform 0.3s ease;
}

.elemento-teste > *:hover {
    transform: scale(1.02);
}

/* Estiliza a barra de rolagem */
.elemento-teste::-webkit-scrollbar {
    width: 12px;
}

.elemento-teste::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.1);
    border-radius: 6px;
}

.elemento-teste::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.2);
    border-radius: 6px;
    backdrop-filter: blur(5px);
}

.elemento-teste::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255,0.3);
}`
                }
            }
        },
        gerarMenuHTML: function() {
                return Object.entries(this).map(([key, categoria]) => {
                            if (typeof categoria === 'function') return '';

                            return `
                <div class="categoria">
                    <h3 class="categoria-titulo">${categoria.titulo}</h3>
                    <div class="subcategoria">
                        <ul>
                            ${Object.entries(categoria.subcategorias)
                                .map(([subKey, sub]) => `
                                    <li onclick="menuData.carregarExemplo('${subKey}')">${sub.nome}</li>
                                `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }).join('');
    },
    
    carregarExemplo: function(tipo) {
        for (const categoria of Object.values(this)) {
            if (typeof categoria === 'function') continue;
            
            const subcategorias = categoria.subcategorias;
            if (subcategorias && subcategorias[tipo]) {
                const subcategoria = subcategorias[tipo];

                // console.log(subcategoria);
                
                // Atualiza o editor
                const editor = document.getElementById('cssEditor');
                if (editor && subcategoria.exemplo) {
                    editor.value = subcategoria.exemplo;
                    atualizarCSS();
                } else {
                    editor.value = 'Sem exemplo';
                    atualizarCSS();
                }
                
                // Fecha o container de explicação se estiver aberto
                const container = document.querySelector('.explicacao-container');
                if (container.classList.contains('mostrar')) {
                    container.classList.remove('mostrar');
                }
                
                return;
            }
        }
    }
};
// Exportar as funções para uso global
window.menuData = menuData;
window.gerarMenuHTML = function() {
    return menuData.gerarMenuHTML();
};
window.carregarExemplo = function(tipo) {
    return menuData.carregarExemplo(tipo);
};