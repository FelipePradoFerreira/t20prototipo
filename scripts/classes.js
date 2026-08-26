// scripts/classes.js

/**
 * Dados das classes
 */
const classesData = {
    arcanista: {
        nome: 'Arcanista',
        descricao: 'Os arcanistas são mestres das artes mágicas, capazes de lançar feitiços poderosos e manipular a energia arcana. Eles são estudiosos e pesquisadores, dedicados ao conhecimento e à dominação das forças místicas.',
        caracteristicas: [
            { label: 'PV por Nível', value: 'Um arcanista começa com 8 pontos de vida (+ Constituição) e ganha 2 PV (+ Constituição) por nível.' },
            { label: 'PM por Nível', value: '6 PM por nível.' },
            { label: 'Perícias', value: 'Misticismo (Int) e Vontade (Sab), mais 2 a sua escolha entre Conhecimento (Int), Diplomacia (Car), Enganação (Car), Guerra (Int), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Nobreza (Int), Ofício (Int) e Percepção (Sab).' },
            { label: 'Proficiências', value: 'Nenhuma.' }
        ],
        imagens: [{ imagem: '/t20prototipo/imgs/banner/Humano.jpg', autor: 'ArtistaExemplo', autorLink: 'https://www.artstation.com/artistaexemplo' }],
        habilidades: [
            { nome: 'Nível 1 - Caminho do Arcanista', descricao: `A magia é um poder incrível, capaz de alterar a realidade. Esse poder tem fontes distintas e cada uma opera conforme suas próprias regras. Escolha uma das opções a seguir. Uma vez feita, essa escolha não pode ser mudada.` },
            { bullet: '&emsp;•' , nome: 'Bruxo', descricao: 'Você lança magias através de um foco — uma varinha, cajado, chapéu... Para lançar uma magia, você precisa empunhar o foco com uma mão (e gesticular com a outra) ou fazer um teste de Misticismo (CD 20 + o custo em PM da magia; se falhar, a magia não funciona, mas você gasta os PM mesmo assim). O foco tem RD 10 e PV iguais à metade dos seus, independentemente de seu material ou forma. Se for danificado, é totalmente restaurado na próxima vez que você recuperar seus PM. Se for destruído (reduzido a 0 PV), você fica atordoado por uma rodada. Você pode recuperar um foco destruído ou perdido com uma semana de trabalho e T$ 100. Seu atributo-chave para magias é Inteligência.' },
            { bullet: '&emsp;•' , nome: 'Feiticeiro', descricao: 'Você lança magias através de um poder inato que corre em seu sangue. Escolha uma linhagem como origem de seus poderes (veja a página 39). Você recebe a herança básica da linhagem escolhida. Você não depende de nenhum item ou estudo, mas sua capacidade de aprender magias é limitada — você aprende uma magia nova a cada nível ímpar (3º, 5º, 7º etc.), em vez de a cada nível. Seu atributo-chave para magias é Carisma.' },
            { bullet: '&emsp;•' , nome: 'Mago', descricao: 'Você lança magias através de estudo e memorização de fórmulas arcanas. Você só pode lançar magias memorizadas; suas outras magias não podem ser lançadas, mesmo que você tenha pontos de mana para tal. Para memorizar magias, você precisa estudar seu grimório por uma hora. Quando faz isso, escolhe metade das magias que conhece (por exemplo, se conhece 7 magias, escolhe 3).Essas serão suas magias memorizadas. Você pode memorizar magias uma vez por dia. Caso não possa estudar (por não ter tempo, por ter perdido o grimório...), não poderá trocar suas magias memorizadas. Um grimório tem as mesmas estatísticas de um foco (veja acima) e pode ser recuperado da mesma forma. Você começa com uma magia adicional (para um total de 4) e, sempre que ganha acesso a um novo círculo de magias, aprende uma magia adicional daquele círculo. Seu atributo-chave para magias é Inteligência.' },
            { nome: 'Nível 1 - Magias', descricao: `Você pode lançar magias arcanas de 1º círculo. A cada quatro níveis, pode lançar magias de um círculo maior (2º círculo no 5º nível, 3º círculo no 9º nível e assim por diante).
                                        <br>
                                        Você começa com três magias de 1º círculo. A cada nível, aprende uma magia de qualquer círculo que possa lançar.
                                        <br>
                                        Seu atributo-chave para lançar magias é definido pelo seu Caminho (veja acima) e você soma seu atributo-chave no seu total de PM. Veja o Capítulo 4 para as regras de magia.` },
            { nome: 'Nível 2 - Poder de Arcanista', descricao: 'No 2º nível, e a cada nível seguinte, você escolhe um dos poderes da lista de poderes de arcanista.' },
            { nome: 'Nível 20 - Alta Arcana', descricao: 'No 20º nível, seu domínio das artes arcanas é total. O custo em PM de suas magias arcanas é reduzido à metade (após aplicar aprimoramentos e quaisquer outros efeitos que reduzam custo).' }
        ],
        progressao: [
            { nivel: '1°', habilidades: 'Caminho do Arcanista, magias (1° circulo)' },
            { nivel: '2°', habilidades: 'Poder de Arcanista' },
            { nivel: '3°', habilidades: 'Poder de Arcanista' },
            { nivel: '4°', habilidades: 'Poder de Arcanista' },
            { nivel: '5°', habilidades: 'Magias (2° circulo) ,poder de Arcanista' },
            { nivel: '6°', habilidades: 'Poder de Arcanista' },
            { nivel: '7°', habilidades: 'Poder de Arcanista' },
            { nivel: '8°', habilidades: 'Poder de Arcanista' },
            { nivel: '9°', habilidades: 'Magias (3° circulo) ,poder de Arcanista' },
            { nivel: '10°', habilidades: 'Poder de Arcanista' },
            { nivel: '11°', habilidades: 'Poder de Arcanista' },
            { nivel: '12°', habilidades: 'Poder de Arcanista' },
            { nivel: '13°', habilidades: 'Magias (4º círculo), poder de arcanista' },
            { nivel: '14°', habilidades: 'Poder de Arcanista' },
            { nivel: '15°', habilidades: 'Poder de Arcanista' },
            { nivel: '16°', habilidades: 'Poder de Arcanista' },
            { nivel: '17°', habilidades: 'Magias (5º círculo), poder de arcanista' },
            { nivel: '18°', habilidades: 'Poder de Arcanista' },
            { nivel: '19°', habilidades: 'Poder de Arcanista' },
            { nivel: '20°', habilidades: 'Alta arcana, poder de arcanista' }
        ]
    },
    druida: {
        nome: 'Druida',
        descricao: 'Os druidas são mestres da natureza, capazes de se transformar em animais e manipular elementos naturais. Eles são guardiões da floresta e defendem o equilíbrio entre o mundo natural e o mundo civilizado.',
        caracteristicas: [
            { label: 'PV por Nível', value: '1d8' },
            { label: 'PM por Nível', value: '6' },
            { label: 'Perícias', value: 'Atletismo, Luta, Percepção, Sobrevivência' },
            { label: 'Proficiências', value: 'Armas Marciais, Armaduras Médias, Escudos' }
        ],
        imagens: [{ imagem: '/t20prototipo/imgs/banner/Barghest.jpg', autor: 'ArtistaExemplo', autorLink: 'https://www.artstation.com/artistaexemplo' }],
        habilidades: [
            { nome: 'Fúria', descricao: 'Você entra em um estado de fúria que concede +2 em ataques corpo a corpo e +2 em dano, mas reduz sua Defesa em -2.' },
            { nome: 'Instinto Selvagem', descricao: 'Você recebe +2 em testes de Percepção e Sobrevivência.' },
            { nome: 'Resistência Primordial', descricao: 'Você recebe resistência a dano perfurante e cortante enquanto estiver em fúria.' }
        ],
        progressao: [
            { nivel: 1, habilidades: 'Poder de Arcanista' },
            { nivel: 2, habilidades: 'Poder de Arcanista' },
            { nivel: 3, habilidades: 'Poder de Arcanista' },
            { nivel: 4, habilidades: 'Poder de Arcanista' },
            { nivel: 5, habilidades: 'Poder de Arcanista' },
            { nivel: 6, habilidades: 'Poder de Arcanista' },
            { nivel: 7, habilidades: 'Poder de Arcanista' },
            { nivel: 8, habilidades: 'Poder de Arcanista' },
            { nivel: 9, habilidades: 'Poder de Arcanista' },
            { nivel: 10, habilidades: 'Poder de Arcanista' },
            { nivel: 11, habilidades: 'Poder de Arcanista' },
            { nivel: 12, habilidades: 'Poder de Arcanista' },
            { nivel: 13, habilidades: 'Poder de Arcanista' },
            { nivel: 14, habilidades: 'Poder de Arcanista' },
            { nivel: 15, habilidades: 'Poder de Arcanista' },
            { nivel: 16, habilidades: 'Poder de Arcanista' },
            { nivel: 17, habilidades: 'Poder de Arcanista' },
            { nivel: 18, habilidades: 'Poder de Arcanista' },
            { nivel: 19, habilidades: 'Poder de Arcanista' },
            { nivel: 20, habilidades: 'Poder de Arcanista' }
        ]
    }
    // ... outras classes com a mesma estrutura
};

// Configuração específica da página de classes
const classeKeys = Object.keys(classesData);
let currentClasseIndex = 0;
let isUpdating = false;

// ============================================
// FUNÇÃO PARA EXIBIR CLASSE
// ============================================
function exibirClasse(classeId) {
    if (isUpdating) return;
    isUpdating = true;
    
    try {
        const classe = classesData[classeId];
        if (!classe) return;

        // Atualiza título
        const tituloEl = document.getElementById('classe-titulo');
        if (tituloEl) tituloEl.textContent = `── ₪ ${classe.nome} ₪ ──`;

        // Atualiza descrição
        const descricaoEl = document.getElementById('classe-descricao');
        if (descricaoEl) descricaoEl.textContent = classe.descricao;

        // === CARACTERÍSTICAS BÁSICAS ===
        const caracteristicasContainer = document.getElementById('classe-caracteristicas-content');
        if (caracteristicasContainer && classe.caracteristicas) {
            caracteristicasContainer.innerHTML = `
                <div class="classe-caracteristicas-grid">
                    ${classe.caracteristicas.map(car => `
                        <div class="caracteristica-item">
                            <span class="label">${car.label}.</span>
                            <span class="value">${car.value}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // === TABELA DE PROGRESSÃO ===
        const tabelaCorpo = document.getElementById('classe-tabela-corpo');
        if (tabelaCorpo && classe.progressao) {
            tabelaCorpo.innerHTML = classe.progressao.map(item => `
                <tr>
                    <td class="col-center col-gold">${item.nivel}</td>
                    <td>${item.habilidades}</td>
                </tr>
            `).join('');
        }

        // Atualiza habilidades
        const habilidadesEl = document.getElementById('classe-habilidades');
        if (habilidadesEl && classe.habilidades) {
            habilidadesEl.innerHTML = classe.habilidades.map(hab => `
                <div class="raca-habilidade-item">
                    <span class="bullet">${hab.bullet || '✦'}</span>
                    <span><strong>${hab.nome}.</strong> ${hab.descricao}</span>
                </div>
            `).join('');
        }

        // === ATUALIZA DROPDOWN ===
        document.querySelectorAll('.classe-dropdown-item').forEach(item => {
            item.classList.toggle('active', item.dataset.classe === classeId);
        });

        // Atualiza índice atual
        currentClasseIndex = classeKeys.indexOf(classeId);

        // Atualiza descrição do detalhe
        const detalheDesc = document.getElementById('classe-detalhe-desc');
        if (detalheDesc) {
            detalheDesc.textContent = `Veja abaixo os detalhes da classe ${classe.nome}.`;
        }

        // === ATUALIZA O FILTRO DE PODERES PARA A CLASSE ATUAL ===
        updatePoderesFilterForClass(classeId);

        // Fecha dropdown
        const content = document.getElementById('classe-dropdown-content');
        const seta = document.getElementById('classe-dropdown-seta');
        if (content) content.classList.remove('open');
        if (seta) seta.classList.remove('open');

        console.log(`✅ Classe "${classe.nome}" exibida com sucesso!`);

    } finally {
        isUpdating = false;
    }
}

// ============================================
// ATUALIZAR FILTRO DE PODERES POR CLASSE
// ============================================
function updatePoderesFilterForClass(classeId) {
    console.log(`🔄 Atualizando filtro para classe: ${classeId}`);
    
    const filter = window.poderesFilter;
    if (!filter) {
        console.warn('⚠️ Filtro de poderes não inicializado.');
        return;
    }

    const classe = classesData[classeId];
    if (!classe) {
        console.warn(`⚠️ Classe "${classeId}" não encontrada.`);
        return;
    }

    // Nome da classe com primeira letra maiúscula
    const className = classeId.charAt(0).toUpperCase() + classeId.slice(1);
    console.log(`📌 Classe selecionada: ${className}`);

    // Combina todos os poderes
    const allPowers = [...classPowers, ...combatPowers, ...fatePowers];
    
    // Filtra: 
    // 1. Poderes da classe atual (item.classe === className)
    // 2. Poderes gerais (itens SEM a propriedade 'classe' - Combate, Destino, etc.)
    let filteredPowers = allPowers.filter(item => {
        // Se o item tem 'classe', verifica se é a classe atual
        if (item.classe) {
            return item.classe === className;
        }
        // Se NÃO tem 'classe', é um poder geral - mostra sempre
        return true;
    });

    console.log(`📊 ${filteredPowers.length} poderes encontrados para ${className} (incluindo poderes gerais)`);

    // Atualiza os dados do filtro
    filter.updateItems(filteredPowers);

    // Marca apenas o checkbox da classe atual e mantém os gerais visíveis
    document.querySelectorAll('[data-filter="checkbox"][data-group="classe"]').forEach(cb => {
        const isCurrent = cb.value === className;
        cb.checked = isCurrent;
        // Desabilita apenas os checkboxes de outras classes (não os gerais)
        cb.disabled = !isCurrent;
        const label = cb.closest('.filter-checkbox-option');
        if (label) {
            label.style.opacity = isCurrent ? '1' : '0.4';
            label.style.cursor = isCurrent ? 'pointer' : 'not-allowed';
        }
    });

    // Limpa tags selecionadas
    document.querySelectorAll('[data-filter="tag"]:checked').forEach(cb => {
        cb.checked = false;
    });

    filter.applyFilters();
    console.log(`✅ Filtro atualizado para a classe: ${className}`);
}

// ============================================
// INICIALIZAÇÃO DA PÁGINA DE CLASSES
// ============================================
function initClasses() {
    // === POPULA DROPDOWN ===
    const dropdownContent = document.getElementById('classe-dropdown-content');
    if (dropdownContent) {
        dropdownContent.innerHTML = classeKeys.map(key => {
            const classe = classesData[key];
            return `
                <div class="raca-dropdown-item classe-dropdown-item" data-classe="${key}">
                    <span>${classe.nome}</span>
                    <span class="tag tag-silver">${classe.caracteristicas ? classe.caracteristicas[0].value : ''}</span>
                </div>
            `;
        }).join('');

        dropdownContent.querySelectorAll('.classe-dropdown-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                const classeId = this.dataset.classe;
                if (classeId) {
                    const index = classeKeys.indexOf(classeId);
                    if (index !== -1 && window.classeImageCarousel) {
                        window.classeImageCarousel.goToImage(index);
                    }
                    exibirClasse(classeId);
                }
            });
        });
    }

    // === INICIALIZA DROPDOWN ===
    const dropdownHeader = document.getElementById('classe-dropdown-header');
    if (dropdownHeader) {
        dropdownHeader.addEventListener('click', function() {
            const content = document.getElementById('classe-dropdown-content');
            const seta = document.getElementById('classe-dropdown-seta');
            if (content) {
                content.classList.toggle('open');
                if (seta) seta.classList.toggle('open');
            }
        });
    }

    // === EVENTOS DOS CARDS DE CLASSE ===
    document.querySelectorAll('.classe-card').forEach(card => {
        card.addEventListener('click', function() {
            const classeId = this.dataset.classe;
            if (classeId) {
                const index = classeKeys.indexOf(classeId);
                if (index !== -1 && window.classeImageCarousel) {
                    window.classeImageCarousel.goToImage(index);
                }
                exibirClasse(classeId);
            }
        });

        card.addEventListener('mouseenter', function() {
            if (this.dataset.classe !== classeKeys[currentClasseIndex]) {
                this.style.borderColor = 'rgba(201, 168, 76, 0.3)';
            }
        });

        card.addEventListener('mouseleave', function() {
            if (this.dataset.classe !== classeKeys[currentClasseIndex]) {
                this.style.borderColor = 'rgba(58, 74, 90, 0.3)';
            }
        });
    });

    // === INICIALIZA CAROUSEL DE IMAGENS ===
    const imageCarousel = initImageCarousel({
        trackId: 'classe-imagem-track',
        prevBtnId: 'classe-imagem-prev',
        nextBtnId: 'classe-imagem-next',
        dotsId: 'classe-imagem-dots',
        containerId: 'classe-imagem-carousel',
        creditoLinkId: 'classe-credito-link',
        items: classeKeys.map(key => ({
            nome: classesData[key].nome,
            imagem: classesData[key].imagens[0].imagem,
            autor: classesData[key].imagens[0].autor,
            autorLink: classesData[key].imagens[0].autorLink
        })),
        currentIndex: { value: 0 },
        onImageChange: function(index) {
            const classeId = classeKeys[index];
            if (classeId && !isUpdating) {
                exibirClasse(classeId);
            }
        }
    });

    window.classeImageCarousel = imageCarousel;

    // ============================================
    // INICIALIZA O FILTRO DE PODERES AQUI
    // ============================================
    initPoderesFilter();

    // === EXIBE A PRIMEIRA CLASSE ===
    setTimeout(() => {
        const primeiraClasse = classeKeys[0] || 'arcanista';
        exibirClasse(primeiraClasse);
    }, 200);
}

function initPoderesFilter() {
    const container = document.getElementById('poderes-container');
    if (!container) {
        console.warn('⚠️ Container de poderes não encontrado.');
        return;
    }

    const todosPoderes = [...classPowers, ...combatPowers, ...fatePowers];

    const filter = new FilterSystem({
        nomecategoria: 'Poderes Gerais',
        containerId: 'poderes-container',
        searchInputId: 'search-input',
        filterContainerId: 'filter-bar',
        layout: 'inline',
        items: todosPoderes,
        filterConfig: {
            // Tags visíveis (APENAS poderes gerais)
            tags: ['Combate', 'Destino'],
            dropdownLabel: 'Poderes Gerais',
            // Classes (invisíveis, mas funcionais)
            classes: ['Arcanista', 'Druida', 'Bárbaro', 'Bardo', 'Clérigo', 'Guerreiro', 'Ladino', 'Mago', 'Paladino', 'Caçador'],
            // Checkboxes (classes ficam invisíveis)
            checkboxes: [
                { label: 'Arcanista', value: 'Arcanista', group: 'classe' },
                { label: 'Druida', value: 'Druida', group: 'classe' }
            ]
        },
        renderItem: function(item) {
            return `
                <div class="filter-item">
                    <span class="filter-item-meta">
                        ${item.tipo || ''} 
                        ${item.classe ? '• ' + item.classe : ''} 
                        ${item.nivel ? '• Nível ' + item.nivel : ''}
                    </span>
                    <h3>${item.nome}</h3>
                    <p>${item.descricao}</p>
                    ${item.requisito ? `<span class="filter-item-meta" style="color: var(--gold);">Requisito: ${item.requisito}</span>` : ''}
                    <div class="filter-item-tags">
                        ${item.tags.map(t => `<span class="tag tag-${t.toLowerCase()}">${t}</span>`).join('')}
                    </div>
                </div>
            `;
        },
        getSearchableText: function(item) {
            return `${item.nome} ${item.descricao} ${(item.tags || []).join(' ')} ${item.classe || ''} ${item.tipo || ''}`;
        },
        getCheckboxValue: function(item, group) {
            if (group === 'classe') return item.classe || '';
            if (group === 'tipo') return item.tipo || '';
            return item[group] || '';
        },
        onUpdate: function(filteredItems) {
            console.log(`🔍 ${filteredItems.length} poderes encontrados`);
        }
    });

    window.poderesFilter = filter;
    console.log('✅ Sistema de filtro de poderes inicializado!');
}

// Inicializa quando o DOM carregar
document.addEventListener('DOMContentLoaded', initClasses);