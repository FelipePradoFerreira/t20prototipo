// scripts/classes.js

/**
 * Dados das classes
 */
const classesData = {
    barbaro: {
        nome: 'Bárbaro',
        descricao: 'Os bárbaros são guerreiros que canalizam sua fúria primordial para destruir inimigos. Rejeitando a civilização e suas regras, eles confiam em sua força bruta e instintos selvagens para sobreviver.',
        atributo: 'Força',
        pv: '1d12',
        pericias: '4',
        imagens: ['/imgs/banner/Humano.jpg'],
        autor: 'ArtistaExemplo',
        autorLink: 'https://www.artstation.com/artistaexemplo',
        habilidades: [
            { nome: 'Fúria', descricao: 'Você entra em um estado de fúria que concede +2 em ataques corpo a corpo e +2 em dano, mas reduz sua Defesa em -2.' },
            { nome: 'Instinto Selvagem', descricao: 'Você recebe +2 em testes de Percepção e Sobrevivência.' },
            { nome: 'Resistência Primordial', descricao: 'Você recebe resistência a dano perfurante e cortante enquanto estiver em fúria.' }
        ],
        poderes: [
            { nome: 'Fúria Devastadora', descricao: 'Seu bônus de dano em fúria aumenta para +4.' },
            { nome: 'Ímpeto Selvagem', descricao: 'Você pode se mover mais 3m em seu turno enquanto está em fúria.' },
            { nome: 'Grito de Guerra', descricao: 'Uma vez por combate, você pode soltar um grito que causa medo em inimigos em alcance curto.' }
        ]
    },
    bardo: {
        nome: 'Bardo',
        descricao: 'Os bardos são artistas e músicos que canalizam magia através de sua arte. Inspirando aliados e confundindo inimigos, eles são mestres da versatilidade e da persuasão.',
        atributo: 'Carisma',
        pv: '1d8',
        pericias: '6',
        imagens: ['/imgs/banner/bardo-banner.jpg'],
        autor: 'ArtistaExemplo2',
        autorLink: 'https://www.deviantart.com/artistaexemplo2',
        habilidades: [
            { nome: 'Inspiração', descricao: 'Você pode inspirar aliados, concedendo +1 em testes de perícia ou ataque por 1 rodada.' },
            { nome: 'Música Arcana', descricao: 'Você pode lançar magias usando sua música como foco arcano.' },
            { nome: 'Persuasão', descricao: 'Você recebe +2 em testes de Diplomacia e Enganação.' }
        ],
        poderes: [
            { nome: 'Inspiração Poderosa', descricao: 'Seu bônus de inspiração aumenta para +2.' },
            { nome: 'Canção de Cura', descricao: 'Uma vez por dia, você pode curar aliados em alcance médio com sua música.' }
        ]
    },
    clerigo: {
        nome: 'Clérigo',
        descricao: 'Os clérigos são servos divinos que canalizam o poder de sua divindade. Curandeiros, protetores e guerreiros sagrados, eles são a espada e o escudo da fé.',
        atributo: 'Sabedoria',
        pv: '1d8',
        pericias: '4',
        imagens: ['/imgs/banner/clerigo-banner.jpg'],
        autor: 'ArtistaExemplo3',
        autorLink: 'https://www.artstation.com/artistaexemplo3',
        habilidades: [
            { nome: 'Cura Divina', descricao: 'Você pode canalizar energia divina para curar aliados em alcance curto.' },
            { nome: 'Magia Divina', descricao: 'Você pode lançar magias divinas de sua divindade.' },
            { nome: 'Proteção Sagrada', descricao: 'Você recebe +1 na Defesa enquanto estiver usando armadura pesada.' }
        ],
        poderes: []
    },
    druida: {
        nome: 'Druida',
        descricao: 'Os druidas são guardiões da natureza que canalizam as forças da terra e dos animais. Transformando-se em bestas e controlando os elementos, eles protegem o equilíbrio natural.',
        atributo: 'Sabedoria',
        pv: '1d8',
        pericias: '4',
        imagens: ['/imgs/banner/druida-banner.jpg'],
        autor: 'ArtistaExemplo4',
        autorLink: 'https://www.artstation.com/artistaexemplo4',
        habilidades: [
            { nome: 'Forma Animal', descricao: 'Você pode se transformar em um animal por até 1 hora por nível.' },
            { nome: 'Magia Natural', descricao: 'Você pode lançar magias da natureza como se fossem divinas.' },
            { nome: 'Sentidos da Natureza', descricao: 'Você recebe +2 em Percepção e Sobrevivência em ambientes naturais.' }
        ],
        poderes: [
            { nome: 'Forma Bestial', descricao: 'Em forma animal, você recebe +2 em ataques e dano corpo a corpo.' },
            { nome: 'Comunhão com a Natureza', descricao: 'Você pode se comunicar com animais e plantas.' }
        ]
    },
    guerreiro: {
        nome: 'Guerreiro',
        descricao: 'Os guerreiros são mestres das armas e armaduras. Especialistas em combate tático, eles são a linha de frente de qualquer grupo, protegendo aliados e destruindo inimigos.',
        atributo: 'Força ou Destreza',
        pv: '1d10',
        pericias: '4',
        imagens: ['/imgs/banner/guerreiro-banner.jpg'],
        autor: 'ArtistaExemplo5',
        autorLink: 'https://www.artstation.com/artistaexemplo5',
        habilidades: [
            { nome: 'Perícia Marcial', descricao: 'Você recebe +2 em testes de Luta e Pontaria.' },
            { nome: 'Postura Defensiva', descricao: 'Você pode usar uma ação para aumentar sua Defesa em +2 até o próximo turno.' },
            { nome: 'Ataque Poderoso', descricao: 'Você pode gastar 2 PM para aumentar o dano de um ataque em +4.' }
        ],
        poderes: []
    },
    ladino: {
        nome: 'Ladino',
        descricao: 'Os ladinos são especialistas em furtividade, precisão e versatilidade. Mestres das sombras e das armas leves, eles se destacam em missões de infiltração e eliminação.',
        atributo: 'Destreza',
        pv: '1d6',
        pericias: '6',
        imagens: ['/imgs/banner/ladino-banner.jpg'],
        autor: 'ArtistaExemplo6',
        autorLink: 'https://www.artstation.com/artistaexemplo6',
        habilidades: [
            { nome: 'Ataque Furtivo', descricao: 'Você causa dano adicional quando ataca um inimigo desprevenido.' },
            { nome: 'Especialista', descricao: 'Você recebe +2 em Furtividade e Ladinagem.' },
            { nome: 'Esquiva', descricao: 'Você recebe +2 na Defesa contra ataques corpo a corpo.' }
        ],
        poderes: [
            { nome: 'Ataque Preciso', descricao: 'Seu Ataque Furtivo causa +1d6 de dano.' },
            { nome: 'Sombra Escura', descricao: 'Em ambientes com pouca luz, você recebe +2 em Furtividade.' }
        ]
    },
    mago: {
        nome: 'Mago',
        descricao: 'Os magos são estudiosos das artes arcanas, capazes de moldar a realidade com sua magia. Frágeis mas poderosos, eles controlam as forças do universo.',
        atributo: 'Inteligência',
        pv: '1d6',
        pericias: '4',
        imagens: ['/imgs/banner/mago-banner.jpg'],
        autor: 'ArtistaExemplo7',
        autorLink: 'https://www.artstation.com/artistaexemplo7',
        habilidades: [
            { nome: 'Conhecimento Arcano', descricao: 'Você recebe +2 em testes de Conhecimento e Misticismo.' },
            { nome: 'Magia Arcana', descricao: 'Você pode lançar magias arcanas de até 4º círculo.' },
            { nome: 'Poder Arcano', descricao: 'Você recebe 2 PM adicionais por nível.' }
        ],
        poderes: []
    },
    paladino: {
        nome: 'Paladino',
        descricao: 'Os paladinos são cavaleiros sagrados que unem fé e combate. Protetores dos inocentes e destruidores do mal, eles são a personificação da justiça divina.',
        atributo: 'Carisma',
        pv: '1d10',
        pericias: '4',
        imagens: ['/imgs/banner/paladino-banner.jpg'],
        autor: 'ArtistaExemplo8',
        autorLink: 'https://www.artstation.com/artistaexemplo8',
        habilidades: [
            { nome: 'Mão Sagrada', descricao: 'Você pode curar aliados com um toque, gastando 1 PM para curar 1d8 de PV.' },
            { nome: 'Aura Protetora', descricao: 'Aliados em alcance curto recebem +1 na Defesa.' },
            { nome: 'Julgamento Divino', descricao: 'Uma vez por dia, você pode declarar um julgamento que concede bônus contra um inimigo.' }
        ],
        poderes: [
            { nome: 'Aura Poderosa', descricao: 'Seu bônus de Aura Protetora aumenta para +2.' },
            { nome: 'Golpe Sagrado', descricao: 'Seus ataques contra criaturas malignas causam +1d6 de dano.' }
        ]
    },
    cassador: {
        nome: 'Caçador',
        descricao: 'Os caçadores são especialistas em rastrear e abater inimigos com precisão letal. Mestres do arco e da sobrevivência, eles são predadores natos.',
        atributo: 'Destreza',
        pv: '1d8',
        pericias: '6',
        imagens: ['/imgs/banner/cassador-banner.jpg'],
        autor: 'ArtistaExemplo9',
        autorLink: 'https://www.artstation.com/artistaexemplo9',
        habilidades: [
            { nome: 'Rastreamento', descricao: 'Você recebe +2 em Sobrevivência e Percepção.' },
            { nome: 'Tiro Preciso', descricao: 'Você recebe +2 em Pontaria com armas de distância.' },
            { nome: 'Marca do Caçador', descricao: 'Você pode marcar um inimigo, recebendo +1 em ataques contra ele.' }
        ],
        poderes: [
            { nome: 'Tiro Letal', descricao: 'Seu dano com armas de distância aumenta em +2.' },
            { nome: 'Passos Silenciosos', descricao: 'Você recebe +2 em Furtividade em ambientes naturais.' }
        ]
    }
};

// ====================================================================================================================================
// CONFIGURAÇÕES
// ====================================================================================================================================
const classeKeys = Object.keys(classesData);
let currentClasseIndex = 0;
let currentImageIndex = 0;

// ============================================
// FUNÇÃO PARA EXIBIR CLASSE
// ============================================
function exibirClasse(classeId) {
    const classe = classesData[classeId];
    if (!classe) return;

    // Atualiza índice atual
    currentClasseIndex = classeKeys.indexOf(classeId);
    currentImageIndex = 0;

    // === TÍTULO ===
    const tituloEl = document.getElementById('classe-titulo');
    if (tituloEl) tituloEl.textContent = `── ₪ ${classe.nome} ₪ ──`;

    // === CARDS: Destacar card ativo ===
    document.querySelectorAll('.classe-card').forEach(card => {
        card.style.borderColor = 'rgba(58, 74, 90, 0.3)';
        card.style.boxShadow = 'none';
        if (card.dataset.classe === classeId) {
            card.style.borderColor = 'var(--gold)';
            card.style.boxShadow = '0 8px 40px rgba(201, 168, 76, 0.15)';
        }
    });

    // === IMAGENS (Carousel) ===
    const track = document.getElementById('classe-imagem-track');
    const dotsContainer = document.getElementById('classe-imagem-dots');
    const prevBtn = document.getElementById('classe-imagem-prev');
    const nextBtn = document.getElementById('classe-imagem-next');

    if (track) {
        track.innerHTML = classe.imagens.map(img => `
            <div class="carousel-slide">
                <img src="${img}" alt="${classe.nome}" />
            </div>
        `).join('');
    }

    // Dots - número de classes
    if (dotsContainer) {
        dotsContainer.innerHTML = classeKeys.map((key, i) => `
            <span class="carousel-dot ${i === currentClasseIndex ? 'active' : ''}" data-index="${i}"></span>
        `).join('');
        dotsContainer.style.display = 'flex';
    }

    // === CRÉDITO DO AUTOR ===
    const creditoLink = document.getElementById('classe-credito-link');
    if (creditoLink) {
        creditoLink.textContent = classe.autor || 'Artista';
        creditoLink.href = classe.autorLink || '#';
    }

    // === INFORMAÇÕES BÁSICAS ===
    const descricaoEl = document.getElementById('classe-descricao');
    const atributoEl = document.getElementById('classe-atributo');
    const pvEl = document.getElementById('classe-pv');
    const periciasEl = document.getElementById('classe-pericias');
    const habilidadesEl = document.getElementById('classe-habilidades');

    if (descricaoEl) descricaoEl.textContent = classe.descricao;
    if (atributoEl) atributoEl.textContent = classe.atributo;
    if (pvEl) pvEl.textContent = classe.pv;
    if (periciasEl) periciasEl.textContent = classe.pericias;

    // === HABILIDADES ===
    if (habilidadesEl) {
        habilidadesEl.innerHTML = classe.habilidades.map(hab => `
            <div class="raca-habilidade-item">
                <span class="bullet">✦</span>
                <span><strong>${hab.nome}:</strong> ${hab.descricao}</span>
            </div>
        `).join('');
    }

    // === PODERES DA CLASSE ===
    const poderesEl = document.getElementById('classe-poderes');
    const gridEl = document.getElementById('classe-info-grid');
    const poderesCol = document.getElementById('classe-poderes-col');

    if (poderesEl && gridEl && poderesCol) {
        if (classe.poderes && classe.poderes.length > 0) {
            poderesEl.innerHTML = classe.poderes.map(poder => `
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

    // Atualiza degrades do carousel de imagens
    const imagemContainer = document.getElementById('classe-imagem-carousel');
    if (imagemContainer) {
        imagemContainer.classList.add('show-left');
        imagemContainer.classList.add('show-right');
    }

    // Força o reflow para ajustar a altura
    if (track) {
        track.innerHTML = classe.imagens.map(img => `
            <div class="carousel-slide">
                <img src="${img}" alt="${classe.nome}" />
            </div>
        `).join('');
        track.style.transform = 'translateX(0)';
    }

    // Atualiza descrição do detalhe
    const detalheDesc = document.getElementById('classe-detalhe-desc');
    if (detalheDesc) {
        detalheDesc.textContent = `Veja abaixo os detalhes da classe ${classe.nome}.`;
    }

    console.log(`✅ Classe "${classe.nome}" exibida com sucesso!`);
}

// ============================================
// FUNÇÕES DO CAROUSEL DE IMAGENS
// ============================================

function nextClasseImage() {
    if (currentClasseIndex < classeKeys.length - 1) {
        currentClasseIndex++;
    } else {
        currentClasseIndex = 0;
    }
    exibirClasse(classeKeys[currentClasseIndex]);
}

function prevClasseImage() {
    if (currentClasseIndex > 0) {
        currentClasseIndex--;
    } else {
        currentClasseIndex = classeKeys.length - 1;
    }
    exibirClasse(classeKeys[currentClasseIndex]);
}

function goToClasseImage(index) {
    if (index >= 0 && index < classeKeys.length) {
        currentClasseIndex = index;
        exibirClasse(classeKeys[index]);
    }
}

// ============================================
// INICIALIZAÇÃO
// ============================================
function initClasses() {
    // === EVENTOS DOS CARDS DE CLASSE ===
    document.querySelectorAll('.classe-card').forEach(card => {
        card.addEventListener('click', function() {
            const classeId = this.dataset.classe;
            if (classeId) {
                exibirClasse(classeId);
            }
        });

        // Efeito hover
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

    // === EVENTOS DO CAROUSEL DE IMAGENS ===
    const prevBtn = document.getElementById('classe-imagem-prev');
    const nextBtn = document.getElementById('classe-imagem-next');
    if (prevBtn) prevBtn.addEventListener('click', prevClasseImage);
    if (nextBtn) nextBtn.addEventListener('click', nextClasseImage);

    const dotsContainer = document.getElementById('classe-imagem-dots');
    if (dotsContainer) {
        dotsContainer.addEventListener('click', function(e) {
            const dot = e.target.closest('.carousel-dot');
            if (dot) {
                const index = parseInt(dot.dataset.index);
                if (!isNaN(index)) goToClasseImage(index);
            }
        });
    }

    // === EXIBE A PRIMEIRA CLASSE ===
    exibirClasse('barbaro');

    console.log('✅ Página de Classes inicializada com sucesso!');
}

document.addEventListener('DOMContentLoaded', initClasses);