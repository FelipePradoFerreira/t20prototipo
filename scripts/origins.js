// scripts/pages/origens.js

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('origens-container');
    if (!container) {
        console.warn('⚠️ Container de origens não encontrado.');
        return;
    }

    if (typeof origensData === 'undefined') {
        console.error('❌ Dados das origens não carregados!');
        container.innerHTML = `
            <div class="filter-empty-state">
                <p style="color: var(--text-muted);">Erro ao carregar dados das origens.</p>
            </div>
        `;
        return;
    }

    console.log(`📚 ${origensData.length} origens carregadas`);

    const filter = new FilterSystem({
        containerId: 'origens-container',
        searchInputId: 'search-input',
        filterContainerId: 'filter-bar',
        layout: 'compact',
        items: origensData,
        filterConfig: {},
        renderItem: function(item) {
            return `
                <div class="filter-item origem-item">
                    <h3>${item.nome}</h3>
                    <p class="origem-descricao">${item.descricao}</p>
                    
                    <div class="origem-divider"></div>
                    
                    <div class="origem-itens">
                        <strong style="color: var(--gold);">Itens</strong>
                        <p>${item.itens}</p>
                    </div>
                    
                    <div class="origem-beneficios-lista">
                        <strong style="color: var(--gold);">Benefícios</strong>
                        <p><strong style="color: var(--silver);">Perícias:</strong> ${item.beneficios.pericias}</p>
                        <p><strong style="color: var(--silver);">Poderes:</strong> ${item.beneficios.poderes}</p>
                    </div>
                    
                    <div class="origem-divider"></div>
                    
                    <div class="origem-poder-unico">
                        <strong style="color: var(--gold);">${item.poderUnico.nome}</strong>
                        <p>${item.poderUnico.descricao}</p>
                    </div>
                </div>
            `;
        },
        getSearchableText: function(item) {
            const nomePoder = item.poderUnico?.nome || '';
            const descPoder = item.poderUnico?.descricao || '';
            
            const text = `${item.nome} ${item.descricao} ${item.itens} ${item.beneficios.pericias} ${item.beneficios.poderes} ${nomePoder} ${descPoder}`;
            
            console.log(`📝 Texto para "${item.nome}":`, text);
            console.log(`📝 Poder único: "${nomePoder}" - "${descPoder}"`);
            
            return text;
        },
        onUpdate: function(filteredItems) {
            console.log(`🔍 ${filteredItems.length} origens encontradas`);
        }
    });

    window.origensFilter = filter;
    console.log('✅ Sistema de filtro de origens inicializado!');
});