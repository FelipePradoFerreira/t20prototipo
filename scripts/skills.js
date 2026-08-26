// scripts/pericias.js

/**
 * Dados das Perícias
 */
const periciasData = {
    'Acrobacia': {
        nome: 'Acrobacia',
        atributo: 'Destreza',
        somenteTreinada: true,
        penalidadeArmadura: true,
        descricao: 'Acrobacia mede sua capacidade de realizar manobras ágeis, como equilibrar-se, saltar, cair de forma segura e escapar de amarras.',
        proezas: [
            { nome: 'Equilíbrio', descricao: 'Atravessar superfícies estreitas ou instáveis. O teste se torna mais difícil em superfícies mais estreitas ou escorregadias.' },
            { nome: 'Queda Suave', descricao: 'Cair de uma altura sem sofrer dano total. Um teste bem-sucedido reduz o dano da queda pela metade.' },
            { nome: 'Escapar', descricao: 'Libertar-se de amarras, cordas ou agarramentos. O teste é oposto à Força do oponente ou à CD da amarra.' },
            { nome: 'Equilíbrio', descricao: 'Atravessar superfícies estreitas ou instáveis. O teste se torna mais difícil em superfícies mais estreitas ou escorregadias.' },
            { nome: 'Queda Suave', descricao: 'Cair de uma altura sem sofrer dano total. Um teste bem-sucedido reduz o dano da queda pela metade.' },
            { nome: 'Escapar', descricao: 'Libertar-se de amarras, cordas ou agarramentos. O teste é oposto à Força do oponente ou à CD da amarra.' },
            { nome: 'Equilíbrio', descricao: 'Atravessar superfícies estreitas ou instáveis. O teste se torna mais difícil em superfícies mais estreitas ou escorregadias.' },
            { nome: 'Queda Suave', descricao: 'Cair de uma altura sem sofrer dano total. Um teste bem-sucedido reduz o dano da queda pela metade.' },
            { nome: 'Escapar', descricao: 'Libertar-se de amarras, cordas ou agarramentos. O teste é oposto à Força do oponente ou à CD da amarra.' }
        ]
    },
    'Adestramento': {
        nome: 'Adestramento',
        atributo: 'Carisma',
        somenteTreinada: false,
        penalidadeArmadura: false,
        descricao: 'Adestramento representa sua capacidade de lidar com animais, treiná-los e fazê-los executar comandos.',
        proezas: [
            { nome: 'Domar', descricao: 'Tornar um animal selvagem dócil ou amigável. Requer tempo e paciência.' },
            { nome: 'Comandar', descricao: 'Fazer um animal treinado executar um comando simples como "atacar" ou "ficar".' },
            { nome: 'Montaria', descricao: 'Controlar uma montaria em situações difíceis, como durante um combate ou terreno perigoso.' }
        ]
    },
    'Atletismo': {
        nome: 'Atletismo',
        atributo: 'Força',
        somenteTreinada: false,
        penalidadeArmadura: true,
        descricao: 'Atletismo cobre atividades físicas exigentes como escalar, nadar, correr longas distâncias e saltar.',
        proezas: [
            { nome: 'Escalar', descricao: 'Subir superfícies verticais ou inclinadas. A CD varia conforme a dificuldade da superfície.' },
            { nome: 'Nadar', descricao: 'Manter-se à tona e mover-se na água. A CD aumenta em águas turbulentas.' },
            { nome: 'Salto em Distância', descricao: 'Saltar horizontalmente para superar um obstáculo ou lacuna. O alcance é determinado pelo teste.' }
        ]
    },
    'Atuação': {
        nome: 'Atuação',
        atributo: 'Carisma',
        somenteTreinada: false,
        penalidadeArmadura: false,
        descricao: 'Atuação cobre sua habilidade de se apresentar em público, seja cantando, dançando, representando ou contando histórias.',
        proezas: [
            { nome: 'Atuar', descricao: 'Realizar uma apresentação para entreter uma plateia. O sucesso depende da qualidade da performance.' },
            { nome: 'Disfarce', descricao: 'Fingir ser outra pessoa ou assumir uma identidade falsa. O teste é oposto à Percepção dos observadores.' },
            { nome: 'Mimetismo', descricao: 'Imitar vozes, sotaques ou sons. Um teste bem-sucedido pode enganar até mesmo ouvintes atentos.' }
        ]
    },
    'Cavalgar': {
        nome: 'Cavalgar',
        atributo: 'Destreza',
        somenteTreinada: false,
        penalidadeArmadura: true,
        descricao: 'Cavalgar é a habilidade de montar e controlar criaturas montadas, como cavalos, grifos ou outras bestas.',
        proezas: [
            { nome: 'Montar', descricao: 'Controlar uma montaria em movimento normal. Ações simples como virar ou parar não exigem teste.' },
            { nome: 'Carga Montada', descricao: 'Realizar um ataque montado com precisão. O teste pode ser necessário em situações caóticas.' },
            { nome: 'Permanecer Montado', descricao: 'Manter-se na montaria após um impacto ou quando a criatura se assusta. O teste evita ser derrubado.' }
        ]
    },
    'Conhecimento': {
        nome: 'Conhecimento',
        atributo: 'Inteligência',
        somenteTreinada: true,
        penalidadeArmadura: false,
        descricao: 'Conhecimento reflete o quanto seu personagem sabe sobre diversos assuntos acadêmicos, históricos e culturais.',
        proezas: [
            { nome: 'Conhecimento (Arcana)', descricao: 'Saber sobre magia, criaturas mágicas, planos e itens arcanos.' },
            { nome: 'Conhecimento (História)', descricao: 'Conhecer eventos históricos, linhagens nobres e tradições antigas.' },
            { nome: 'Conhecimento (Religião)', descricao: 'Entender sobre divindades, mitos, rituais e organizações religiosas.' },
            { nome: 'Conhecimento (Natureza)', descricao: 'Saber sobre fauna, flora, geografia e fenômenos naturais.' }
        ]
    },
    'Cura': {
        nome: 'Cura',
        atributo: 'Sabedoria',
        somenteTreinada: true,
        penalidadeArmadura: false,
        descricao: 'Cura é a habilidade de tratar ferimentos, doenças e envenenamentos usando conhecimentos médicos e ervas.',
        proezas: [
            { nome: 'Tratar Ferimentos', descricao: 'Estancar sangramento e curar ferimentos. O teste restaura PV do alvo.' },
            { nome: 'Diagnosticar', descricao: 'Identificar a natureza de uma doença, veneno ou condição médica.' },
            { nome: 'Primeiros Socorros', descricao: 'Estabilizar um personagem moribundo, impedindo que ele morra.' }
        ]
    },
    'Diplomacia': {
        nome: 'Diplomacia',
        atributo: 'Carisma',
        somenteTreinada: false,
        penalidadeArmadura: false,
        descricao: 'Diplomacia é a arte da negociação, da etiqueta e da comunicação eficaz em situações sociais.',
        proezas: [
            { nome: 'Persuadir', descricao: 'Convencer alguém a fazer algo ou acreditar em algo. O teste é oposto à Vontade do alvo.' },
            { nome: 'Negociar', descricao: 'Barganhar preços, termos ou acordos. Um teste bem-sucedido pode render melhores condições.' },
            { nome: 'Etiqueta', descricao: 'Saber se comportar em ambientes formais ou cortesãos. Evita ofensas e gera boa impressão.' }
        ]
    },
    'Enganação': {
        nome: 'Enganação',
        atributo: 'Carisma',
        somenteTreinada: false,
        penalidadeArmadura: false,
        descricao: 'Enganação é a habilidade de mentir, blefar, disfarçar e manipular informações para enganar os outros.',
        proezas: [
            { nome: 'Mentir', descricao: 'Contar uma mentira convincente. O teste é oposto à Percepção do ouvinte.' },
            { nome: 'Blefar', descricao: 'Fingir ter mais poder, recursos ou informações do que realmente possui.' },
            { nome: 'Disfarce', descricao: 'Alterar sua aparência ou se passar por outra pessoa. O teste é oposto à Percepção.' }
        ]
    },
    'Teste1': {
        nome: 'Teste1',
        atributo: 'Carisma',
        somenteTreinada: false,
        penalidadeArmadura: false,
        descricao: 'Teste1 é uma habilidade de teste.',
        proezas: [
            { nome: 'Mentir', descricao: 'Contar uma mentira convincente. O teste é oposto à Percepção do ouvinte.' },
            { nome: 'Blefar', descricao: 'Fingir ter mais poder, recursos ou informações do que realmente possui.' },
            { nome: 'Disfarce', descricao: 'Alterar sua aparência ou se passar por outra pessoa. O teste é oposto à Percepção.' }
        ]
    }
    ,
    'Teste2': {
        nome: 'Teste2',
        atributo: 'Carisma',
        somenteTreinada: false,
        penalidadeArmadura: false,
        descricao: 'Teste2 é uma habilidade de teste.',
        proezas: [
            { nome: 'Mentir', descricao: 'Contar uma mentira convincente. O teste é oposto à Percepção do ouvinte.' },
            { nome: 'Blefar', descricao: 'Fingir ter mais poder, recursos ou informações do que realmente possui.' },
            { nome: 'Disfarce', descricao: 'Alterar sua aparência ou se passar por outra pessoa. O teste é oposto à Percepção.' }
        ]
    }
};

// ============================================
// INICIALIZAÇÃO DA SEÇÃO DE PERÍCIAS
// ============================================
function initPericias() {
    const tabelaCorpo = document.getElementById('pericias-tabela-corpo');
    const conteudoWrapper = document.getElementById('pericias-conteudo');

    if (!tabelaCorpo || !conteudoWrapper) {
        console.warn('⚠️ Elementos de perícias não encontrados.');
        return;
    }

    // Popula a tabela
    const periciasKeys = Object.keys(periciasData);
    
    tabelaCorpo.innerHTML = periciasKeys.map(key => {
        const p = periciasData[key];
        return `
            <tr data-pericia="${key}" class="pericia-linha">
                <td><span class="highlight-gold">${p.nome}</span></td>
                <td class="col-center">${p.atributo}</td>
                <td class="col-center">${p.somenteTreinada ? '<span class="tag-sm tag-gold">Sim</span>' : '<span class="tag-sm tag-silver">Não</span>'}</td>
                <td class="col-center">${p.penalidadeArmadura ? '<span class="tag-sm tag-blue">Sim</span>' : '<span class="tag-sm tag-none">Não</span>'}</td>
            </tr>
        `;
    }).join('');

    // Evento de clique nas linhas
    document.querySelectorAll('.pericia-linha').forEach(linha => {
        linha.addEventListener('click', function() {
            const periciaKey = this.dataset.pericia;
            if (periciaKey) {
                exibirPericia(periciaKey);
                
                // Destaca a linha ativa
                document.querySelectorAll('.pericia-linha').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });

        // Efeito hover
        linha.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'rgba(201, 168, 76, 0.03)';
            }
        });

        linha.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'transparent';
            }
        });
    });

    // Exibe a primeira perícia por padrão
    if (periciasKeys.length > 0) {
        const primeiraLinha = document.querySelector('.pericia-linha');
        if (primeiraLinha) {
            primeiraLinha.classList.add('active');
            exibirPericia(periciasKeys[0]);
        }
    }
}

// ============================================
// EXIBIR PERÍCIA SELECIONADA
// ============================================
function exibirPericia(key) {
    const pericia = periciasData[key];
    const wrapper = document.getElementById('pericias-conteudo');
    
    if (!pericia || !wrapper) return;

    // Tags para meta-informações
    const metaTags = [];
    if (pericia.somenteTreinada) metaTags.push('Somente Treinada');
    if (pericia.penalidadeArmadura) metaTags.push('Penalidade de Armadura');
    const metaText = metaTags.length > 0 ? `${metaTags.join(' • ')}` : '';

    wrapper.innerHTML = `
        <div class="pericia-header">
            <h3>${pericia.nome}</h3>
            <div class="pericia-meta">
                ${pericia.atributo} <span;">•</span> ${metaText}
            </div>
        </div>
        
        <div class="pericia-descricao">
            ${pericia.descricao}
        </div>
        
        <div class="pericia-divider"></div>
        
        <div class="pericia-proezas">
            <h4>✦ Proezas</h4>
            ${pericia.proezas.map(p => `
                <div class="pericia-proeza-item">
                    <strong>${p.nome}.</strong> ${p.descricao}
                </div>
            `).join('')}
        </div>
    `;
}

// Inicializa quando o DOM carregar
document.addEventListener('DOMContentLoaded', initPericias);