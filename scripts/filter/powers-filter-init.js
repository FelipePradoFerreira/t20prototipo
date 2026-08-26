// scripts/pages/poderes.js

/**
 * Inicialização do Sistema de Filtro de Poderes
 * Deve ser carregado APÓS filter-system.js e os dados dos poderes
 */

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('poderes-container');
    if (!container) {
        console.warn('⚠️ Container de poderes não encontrado. Página não é a de poderes?');
        return;
    }

    // Verifica se os dados existem
    if (typeof classPowers === 'undefined' || typeof combatPowers === 'undefined' || typeof fatePowers === 'undefined') {
        console.error('❌ Dados dos poderes não carregados!');
        container.innerHTML = `
            <div class="filter-empty-state">
                <p style="color: var(--text-muted);">Erro ao carregar dados dos poderes.</p>
            </div>
        `;
        return;
    }

    // Combina todos os poderes
    const todosPoderes = [...classPowers, ...combatPowers, ...fatePowers];

    console.log(`📚 ${todosPoderes.length} poderes carregados`);

    // Inicializa o sistema de filtro
    const filter = new FilterSystem({
        containerId: 'poderes-container',
        searchInputId: 'search-input',
        filterContainerId: 'filter-bar',
        items: todosPoderes,
        filterConfig: {
            tags: ['Arcanista', 'Bardo', 'Combate', 'Destino', 'Fúria', 'Dano', 'Suporte', 'Cura', 'Movimento', 'Controle', 'Classe'],
            checkboxes: [
                { label: 'Poder de Classe', value: 'Classe', group: 'tipo' },
                { label: 'Poder de Combate', value: 'Combate', group: 'tipo' },
                { label: 'Poder de Destino', value: 'Destino', group: 'tipo' }
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
            if (group === 'tipo') return item.tipo || '';
            return item[group] || '';
        },
        onUpdate: function(filteredItems) {
            console.log(`🔍 ${filteredItems.length} poderes encontrados`);
        }
    });

    // Armazena a instância globalmente para debug
    window.poderesFilter = filter;

    console.log('✅ Sistema de filtro de poderes inicializado!');
});