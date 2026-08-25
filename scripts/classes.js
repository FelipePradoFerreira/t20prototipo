// scripts/classes.js

/**
 * Dados das classes
 */
const classesData = {
    barbaro: {
        nome: 'Bárbaro',
        descricao: 'Os bárbaros são guerreiros que canalizam sua fúria primordial para destruir inimigos. Rejeitando a civilização e suas regras, eles confiam em sua força bruta e instintos selvagens para sobreviver.',
        modificadores: 'Força (Principal) • PV: 1d12 • Perícias: 4',
        imagens: [{ imagem: '/t20prototipo/imgs/banner/Temporario.jpg', autor: 'ArtistaExemplo', autorLink: 'https://www.artstation.com/artistaexemplo' }],
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
        modificadores: 'Carisma (Principal) • PV: 1d8 • Perícias: 6',
        imagens: [{ imagem: '/imgs/banner/bardo-banner.jpg', autor: 'ArtistaExemplo2', autorLink: 'https://www.deviantart.com/artistaexemplo2' }],
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
        modificadores: 'Sabedoria (Principal) • PV: 1d8 • Perícias: 4',
        imagens: [{ imagem: '/imgs/banner/clerigo-banner.jpg', autor: 'ArtistaExemplo3', autorLink: 'https://www.artstation.com/artistaexemplo3' }],
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
        modificadores: 'Sabedoria (Principal) • PV: 1d8 • Perícias: 4',
        imagens: [{ imagem: '/imgs/banner/druida-banner.jpg', autor: 'ArtistaExemplo4', autorLink: 'https://www.artstation.com/artistaexemplo4' }],
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
        modificadores: 'Força ou Destreza (Principal) • PV: 1d10 • Perícias: 4',
        imagens: [{ imagem: '/imgs/banner/guerreiro-banner.jpg', autor: 'ArtistaExemplo5', autorLink: 'https://www.artstation.com/artistaexemplo5' }],
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
        modificadores: 'Destreza (Principal) • PV: 1d6 • Perícias: 6',
        imagens: [{ imagem: '/imgs/banner/ladino-banner.jpg', autor: 'ArtistaExemplo6', autorLink: 'https://www.artstation.com/artistaexemplo6' }],
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
        modificadores: 'Inteligência (Principal) • PV: 1d6 • Perícias: 4',
        imagens: [{ imagem: '/imgs/banner/mago-banner.jpg', autor: 'ArtistaExemplo7', autorLink: 'https://www.artstation.com/artistaexemplo7' }],
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
        modificadores: 'Carisma (Principal) • PV: 1d10 • Perícias: 4',
        imagens: [{ imagem: '/imgs/banner/paladino-banner.jpg', autor: 'ArtistaExemplo8', autorLink: 'https://www.artstation.com/artistaexemplo8' }],
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
        modificadores: 'Destreza (Principal) • PV: 1d8 • Perícias: 6',
        imagens: [{ imagem: '/imgs/banner/cassador-banner.jpg', autor: 'ArtistaExemplo9', autorLink: 'https://www.artstation.com/artistaexemplo9' }],
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

// Configuração específica da página de classes
const classeKeys = Object.keys(classesData);
let currentClasseIndex = 0;
let isUpdating = false;

// ============================================
// FUNÇÃO PARA EXIBIR CLASSE (ESPECÍFICA)
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

        // Atualiza modificadores
        const modificadoresBox = document.getElementById('classe-modificadores-box');
        if (modificadoresBox) {
            modificadoresBox.innerHTML = `<p><strong style="color: var(--gold);">Modificadores:</strong> ${classe.modificadores}</p>`;
        }

        // Atualiza habilidades
        const habilidadesEl = document.getElementById('classe-habilidades');
        if (habilidadesEl && classe.habilidades) {
            habilidadesEl.innerHTML = classe.habilidades.map(hab => `
                <div class="raca-habilidade-item">
                    <span class="bullet">✦</span>
                    <span><strong>${hab.nome}:</strong> ${hab.descricao}</span>
                </div>
            `).join('');
        }

        // Atualiza poderes
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

        // Destaca o card ativo
        document.querySelectorAll('.classe-card').forEach(card => {
            card.style.borderColor = 'rgba(58, 74, 90, 0.3)';
            card.style.boxShadow = 'none';
            if (card.dataset.classe === classeId) {
                card.style.borderColor = 'var(--gold)';
                card.style.boxShadow = '0 8px 40px rgba(201, 168, 76, 0.15)';
            }
        });

        // Atualiza índice atual
        currentClasseIndex = classeKeys.indexOf(classeId);

        // Atualiza descrição do detalhe
        const detalheDesc = document.getElementById('classe-detalhe-desc');
        if (detalheDesc) {
            detalheDesc.textContent = `Veja abaixo os detalhes da classe ${classe.nome}.`;
        }

        console.log(`✅ Classe "${classe.nome}" exibida com sucesso!`);

    } finally {
        isUpdating = false;
    }
}

// ============================================
// INICIALIZAÇÃO DA PÁGINA DE CLASSES
// ============================================
function initClasses() {
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

    // === EXIBE A PRIMEIRA CLASSE ===
    setTimeout(() => {
        exibirClasse('barbaro');
    }, 100);
}

// Inicializa quando o DOM carregar
document.addEventListener('DOMContentLoaded', initClasses);