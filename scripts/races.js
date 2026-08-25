// scripts/racas.js

/**
 * Dados das raças
 */
const racasData = {
    humano: {
        nome: 'Humano',
        descricao: 'Os humanos são a raça mais comum e adaptável de Arton. Sua versatilidade e determinação os tornam capazes de se destacar em qualquer caminho que escolherem.',
        modificadores: '+1 em três atributos diferentes',
        imagens: [{ imagem: '/t20prototipo/imgs/banner/Humano.jpg', autor: 'ArtistaExemplo', autorLink: 'https://www.artstation.com/artistaexemplo' }],
        habilidades: [
            { nome: 'Adaptável', descricao: 'Você recebe +2 em uma perícia de sua escolha.' },
            { nome: 'Versátil', descricao: 'Você recebe um poder geral adicional no 1º nível.' },
            { nome: 'Determinado', descricao: 'Uma vez por dia, você pode rolar novamente um teste de resistência falho.' }
        ],
        poderes: [
            { nome: 'Espírito Indomável', descricao: 'Você recebe +2 em testes de Vontade contra efeitos de medo e intimidação.' },
            { nome: 'Linhagem Heróica', descricao: 'Uma vez por dia, você pode rolar novamente um teste de perícia falho.' },
            { nome: 'Determinação Humana', descricao: 'Quando você falha em um teste de resistência, pode gastar 2 PM para rolar novamente.' }
        ]
    },
    barghest: {
        nome: 'Barghest',
        descricao: 'Os barghests são criaturas misteriosas e poderosas, conhecidas por sua astúcia e força. Vivem em ambientes sombrios e são temidos por muitos.',
        modificadores: 'Con +2, Sab +1, Des –1',
        imagens: [{ imagem: '/t20prototipo/imgs/banner/Barghest.jpg', autor: 'ArtistaExemplo2', autorLink: 'https://www.deviantart.com/artistaexemplo2' }],
        habilidades: [
            { nome: 'Resistência Barghest', descricao: 'Você tem resistência a veneno e +2 em testes de Fortitude contra venenos.' },
            { nome: 'Visão no Escuro', descricao: 'Você enxerga no escuro como se fosse luz plena até 30m.' },
            { nome: 'Estabilidade', descricao: 'Você recebe +2 em testes para resistir a empurrões e derrubamentos.' }
        ],
        poderes: []
    }
};

// Configuração específica da página de raças
const racaKeys = Object.keys(racasData);
let currentRacaIndex = 0;
let isUpdating = false; // Previne loops

// ============================================
// FUNÇÃO PARA EXIBIR RAÇA (ESPECÍFICA)
// ============================================
function exibirRaca(racaId) {
    if (isUpdating) return;
    isUpdating = true;
    
    try {
        const raca = racasData[racaId];
        if (!raca) return;

        // Atualiza título
        const tituloEl = document.getElementById('raca-titulo');
        if (tituloEl) tituloEl.textContent = `── ₪ ${raca.nome} ₪ ──`;

        // Atualiza descrição
        const descricaoEl = document.getElementById('raca-descricao');
        if (descricaoEl) descricaoEl.textContent = raca.descricao;

        // Atualiza modificadores
        const modificadoresBox = document.getElementById('raca-modificadores-box');
        if (modificadoresBox) {
            modificadoresBox.innerHTML = `<p><strong style="color: var(--gold);">Modificadores:</strong> ${raca.modificadores}</p>`;
        }

        // Atualiza habilidades
        const habilidadesEl = document.getElementById('raca-habilidades');
        if (habilidadesEl && raca.habilidades) {
            habilidadesEl.innerHTML = raca.habilidades.map(hab => `
                <div class="raca-habilidade-item">
                    <span class="bullet">✦</span>
                    <span><strong>${hab.nome}:</strong> ${hab.descricao}</span>
                </div>
            `).join('');
        }

        // Atualiza poderes
        const poderesEl = document.getElementById('raca-poderes');
        const gridEl = document.getElementById('raca-info-grid');
        const poderesCol = document.getElementById('poderes-col');

        if (poderesEl && gridEl && poderesCol) {
            if (raca.poderes && raca.poderes.length > 0) {
                poderesEl.innerHTML = raca.poderes.map(poder => `
                    <div class="raca-poder-item">
                        <span class="poder-nome">✦ ${poder.nome}</span>
                        <span class="poder-descricao">${poder.descricao}</span>
                    </div>
                `).join('');
                gridEl.className = 'raca-info-grid';
                poderesCol.style.display = 'block';
            } else {
                poderesEl.innerHTML = '';
                poderesCol.style.display = 'none';
                gridEl.className = 'raca-info-grid single';
            }
        }

        // Atualiza dropdown
        document.querySelectorAll('.raca-dropdown-item').forEach(item => {
            item.classList.toggle('active', item.dataset.raca === racaId);
        });

        // Atualiza índice atual
        currentRacaIndex = racaKeys.indexOf(racaId);

        // Fecha dropdown
        const content = document.getElementById('dropdown-content');
        const seta = document.getElementById('dropdown-seta');
        if (content) content.classList.remove('open');
        if (seta) seta.classList.remove('open');

        console.log(`✅ Raça "${raca.nome}" exibida com sucesso!`);

    } finally {
        isUpdating = false;
    }
}

// ============================================
// INICIALIZAÇÃO DA PÁGINA DE RAÇAS
// ============================================
function initRacas() {
    // === POPULA DROPDOWN ===
    const dropdownContent = document.getElementById('dropdown-content');
    if (dropdownContent) {
        dropdownContent.innerHTML = racaKeys.map(key => {
            const raca = racasData[key];
            return `
                <div class="raca-dropdown-item" data-raca="${key}">
                    <span>${raca.nome}</span>
                    <span class="tag tag-silver">${raca.modificadores}</span>
                </div>
            `;
        }).join('');

        dropdownContent.querySelectorAll('.raca-dropdown-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                const racaId = this.dataset.raca;
                if (racaId) {
                    // Atualiza o carousel também
                    const index = racaKeys.indexOf(racaId);
                    if (index !== -1 && window.racaImageCarousel) {
                        window.racaImageCarousel.goToImage(index);
                    }
                    exibirRaca(racaId);
                }
            });
        });
    }

    // === INICIALIZA DROPDOWN ===
    const dropdownHeader = document.getElementById('dropdown-header');
    if (dropdownHeader) {
        dropdownHeader.addEventListener('click', function() {
            const content = document.getElementById('dropdown-content');
            const seta = document.getElementById('dropdown-seta');
            if (content) {
                content.classList.toggle('open');
                if (seta) seta.classList.toggle('open');
            }
        });
    }

    // === INICIALIZA CAROUSEL DE IMAGENS ===
    const imageCarousel = initImageCarousel({
        trackId: 'imagem-track',
        prevBtnId: 'imagem-prev',
        nextBtnId: 'imagem-next',
        dotsId: 'imagem-dots',
        containerId: 'raca-imagem-carousel',
        creditoLinkId: 'credito-link',
        items: racaKeys.map(key => ({
            nome: racasData[key].nome,
            imagem: racasData[key].imagens[0].imagem,
            autor: racasData[key].imagens[0].autor,
            autorLink: racasData[key].imagens[0].autorLink
        })),
        currentIndex: { value: 0 },
        onImageChange: function(index) {
            const racaId = racaKeys[index];
            if (racaId) {
                // Evita loop chamando exibirRaca apenas se não estiver atualizando
                if (!isUpdating) {
                    exibirRaca(racaId);
                }
            }
        }
    });

    // Armazena referência para uso no dropdown
    window.racaImageCarousel = imageCarousel;

    // === EXIBE A PRIMEIRA RAÇA ===
    setTimeout(() => {
        exibirRaca('humano');
    }, 100);
}

// Inicializa quando o DOM carregar
document.addEventListener('DOMContentLoaded', initRacas);