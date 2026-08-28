// scripts/pages/origens.js

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('origens-container');
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('filter-clear-btn');
    const countEl = document.getElementById('filter-results-count');

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

    // ============================================
    // FUNÇÃO PARA RENDERIZAR AS ORIGENS
    // ============================================
    function renderOrigens(items) {
        if (!container) return;

        if (items.length === 0) {
            container.innerHTML = `
                <div class="filter-empty-state">
                    <span style="font-size: 2rem; display: block; margin-bottom: 0.5rem;">🔍</span>
                    <p style="color: var(--text-muted);">Nenhuma origem encontrada.</p>
                    <p style="color: var(--text-muted); font-size: 0.85rem;">Tente ajustar seus termos de busca.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = items.map(item => `
            <div class="filter-item origem-item">
                <h3>${item.nome}</h3>
                <p class="origem-descricao">${item.descricao}</p>
                
                <div class="origem-divider"></div>
                
                <div class="origem-itens">
                    <strong style="color: var(--gold);">✦ Itens</strong>
                    <p>${item.itens}</p>
                </div>
                
                <div class="origem-beneficios-lista">
                    <strong style="color: var(--gold);">✦ Benefícios</strong>
                    <p><strong style="color: var(--silver);">Perícias:</strong> ${item.beneficios.pericias}</p>
                    <p><strong style="color: var(--silver);">Poderes:</strong> ${item.beneficios.poderes}</p>
                </div>
                
                <div class="origem-divider"></div>
                
                <div class="origem-poder-unico">
                    <strong style="color: var(--gold); display: block; text-align: center;">${item.poderUnico.nome}</strong>
                    <p style="text-align: center;">${item.poderUnico.descricao}</p>
                </div>
            </div>
        `).join('');

        // Atualiza contador
        if (countEl) {
            countEl.textContent = `${items.length} resultados`;
        }
    }

    // ============================================
    // FUNÇÃO PARA FILTRAR AS ORIGENS
    // ============================================
    function filterOrigens() {
        const searchValue = searchInput ? searchInput.value.toLowerCase().trim() : '';

        console.log('🔍 Buscando por:', `"${searchValue}"`);

        if (!searchValue) {
            // Se não tem busca, mostra todas
            renderOrigens(origensData);
            console.log(`📊 ${origensData.length} origens exibidas`);
            return;
        }

        // Filtra as origens
        const filtered = origensData.filter(item => {
            // Cria um texto com TODOS os campos que queremos buscar
            const searchableText = [
                item.nome,
                item.descricao,
                item.itens,
                item.beneficios.pericias,
                item.beneficios.poderes,
                item.poderUnico.nome,
                item.poderUnico.descricao
            ].join(' ').toLowerCase();

            const match = searchableText.includes(searchValue);
            
            // Log para debug
            if (match) {
                console.log(`✅ Match encontrado em "${item.nome}"`);
            }
            
            return match;
        });

        console.log(`📊 ${filtered.length} origens encontradas`);
        renderOrigens(filtered);
    }

    // ============================================
    // CONFIGURA OS EVENTOS
    // ============================================
    if (searchInput) {
        searchInput.addEventListener('input', filterOrigens);
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (searchInput) searchInput.value = '';
            filterOrigens();
        });
    }

    // ============================================
    // INICIALIZA EXIBINDO TODAS AS ORIGENS
    // ============================================
    renderOrigens(origensData);
    console.log('✅ Sistema de filtro de origens inicializado!');
});