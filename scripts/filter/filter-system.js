// scripts/filters/filter-system.js

/**
 * Sistema de Pesquisa com Filtro - Modular e Genérico
 * 
 * Uso:
 * const filter = new FilterSystem({
 *     containerId: 'poderes-container',
 *     searchInputId: 'search-input',
 *     filterContainerId: 'filter-options',
 *     layout: 'inline', // 'default' | 'inline' | 'compact'
 *     items: dados,
 *     renderItem: function(item) { return html; },
 *     filterConfig: { ... }
 * });
 */

class FilterSystem {
    constructor(config) {
        this.items = config.items || [];
        this.filteredItems = [...this.items];
        this.container = document.getElementById(config.containerId);
        this.searchInput = document.getElementById(config.searchInputId);
        this.filterContainer = document.getElementById(config.filterContainerId);
        this.renderItem = config.renderItem || this.defaultRender;
        this.filterConfig = config.filterConfig || {};
        this.layout = config.layout || 'default'; // 'default' | 'inline' | 'compact'
        this.activeFilters = {
            search: '',
            tags: [],
            checkboxes: {}
        };
        this.onUpdate = config.onUpdate || null;

        this.init();
    }

    init() {
        this.render();
        if (this.filterContainer) {
            this.buildFilters();
        }
    }

// ============================================
// CONSTRUÇÃO DOS FILTROS (COM SUPORTE A LAYOUTS)
// ============================================
buildFilters() {
    const config = this.filterConfig;
    let html = '';

    // ============================================
    // LAYOUT PADRÃO (FILTROS EM COLUNA)
    // ============================================
    if (this.layout === 'default') {
        // Tags (Dropdown)
        if (config.tags && config.tags.length > 0) {
            html += `
                <div class="filter-group">
                    <label class="filter-label">Tags</label>
                    <div class="filter-tags-dropdown">
                        <button class="filter-dropdown-btn" id="tags-dropdown-btn">
                            Selecionar Tags <span class="filter-arrow">▼</span>
                        </button>
                        <div class="filter-dropdown-content" id="tags-dropdown-content">
                            ${config.tags.map(tag => `
                                <label class="filter-tag-option">
                                    <input type="checkbox" value="${tag}" data-filter="tag">
                                    <span class="tag tag-${tag}">${tag}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        // Checkboxes
        if (config.checkboxes && config.checkboxes.length > 0) {
            html += `
                <div class="filter-group">
                    <label class="filter-label">Categorias</label>
                    <div class="filter-checkboxes">
                        ${config.checkboxes.map(cb => `
                            <label class="filter-checkbox-option">
                                <input type="checkbox" value="${cb.value}" data-filter="checkbox" data-group="${cb.group || 'default'}">
                                ${cb.label}
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Busca
        html += `
            <div class="filter-group filter-search-group">
                <label class="filter-label">Buscar</label>
                <input type="text" class="filter-search-input" id="search-input" placeholder="Digite para buscar..." />
            </div>
        `;

        // Ações
        html += `
            <div class="filter-group filter-actions">
                <button class="filter-clear-btn" id="filter-clear-btn">Limpar Filtros</button>
                
            </div>
        `;
    }

    // ============================================
    // LAYOUT INLINE (BARRA ÚNICA: BUSCA | DROPDOWN | LIMPAR)
    // ============================================
    else if (this.layout === 'inline') {
        // Busca
        html += `
            <div class="filter-search-group">
                <input type="text" class="filter-search-input" id="search-input" placeholder="Buscar poder..." />
            </div>
        `;

        // Dropdown de Categorias (Poderes Gerais) - CORRIGIDO
        const tagsGerais = config.tags ? config.tags.filter(tag => 
            !config.classes || !config.classes.includes(tag)
        ) : [];

        if (tagsGerais.length > 0) {
            html += `
                <div class="filter-tags-dropdown">
                    <button class="filter-dropdown-btn" id="tags-dropdown-btn">
                        ${config.dropdownLabel || 'Categorias'} <span class="filter-arrow">▼</span>
                    </button>
                    <div class="filter-dropdown-content" id="tags-dropdown-content">
                        ${tagsGerais.map(tag => `
                            <label class="filter-tag-option">
                                <input type="checkbox" value="${tag}" data-filter="checkbox" data-group="tipo">
                                <span class="tag tag-${tag}">${tag}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // Botão Limpar
        html += `
            <div class="filter-actions">
                <button class="filter-clear-btn" id="filter-clear-btn">Limpar</button>
            </div>
        `;

        // CHECKBOXES DE CLASSE (INVISÍVEIS, mas funcionais)
        if (config.checkboxes && config.checkboxes.length > 0) {
            html += `
                <div class="filter-checkboxes-hidden" style="display: none;">
                    ${config.checkboxes.map(cb => `
                        <label class="filter-checkbox-option">
                            <input type="checkbox" value="${cb.value}" data-filter="checkbox" data-group="${cb.group || 'default'}">
                            ${cb.label}
                        </label>
                    `).join('')}
                </div>
            `;
        }

        
    }

    // ============================================
    // LAYOUT COMPACTO (APENAS BUSCA E LIMPAR)
    // ============================================
    else if (this.layout === 'compact') {
        html += `
            <div class="filter-search-group">
                <input type="text" class="filter-search-input" id="search-input" placeholder="Buscar..." />
            </div>
            <div class="filter-actions">
                <button class="filter-clear-btn" id="filter-clear-btn">Limpar</button>
            </div>
            <div class="filter-results-count-wrapper">
                <span class="filter-results-count" id="filter-results-count">${this.filteredItems.length} resultados</span>
            </div>
        `;
    }

    if (this.filterContainer) {
        this.filterContainer.className = `filter-bar layout-${this.layout}`;
        this.filterContainer.innerHTML = html;
        this.bindFilterEvents();
    }
}

bindFilterEvents() {
    // Dropdown de Tags
    const dropdownBtn = document.getElementById('tags-dropdown-btn');
    const dropdownContent = document.getElementById('tags-dropdown-content');
    
    if (dropdownBtn && dropdownContent) {
        // Abre/fecha ao clicar no botão
        dropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownContent.classList.toggle('open');
        });

        // Impede que cliques dentro do conteúdo fechem o dropdown
        dropdownContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // Fecha apenas ao clicar fora
        document.addEventListener('click', function(e) {
            const isClickInside = dropdownBtn.contains(e.target) || dropdownContent.contains(e.target);
            if (!isClickInside) {
                dropdownContent.classList.remove('open');
            }
        });
    }

    // Checkboxes (data-filter="checkbox")
    document.querySelectorAll('[data-filter="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => this.applyFilters());
    });

    // Checkboxes (data-filter="tag" - legado)
    document.querySelectorAll('[data-filter="tag"]').forEach(cb => {
        cb.addEventListener('change', () => this.applyFilters());
    });

    // Input de Busca
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', () => this.applyFilters());
    }

    // Botão Limpar
    const clearBtn = document.getElementById('filter-clear-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => this.clearFilters());
    }
}

    // ============================================
    // APLICAÇÃO DOS FILTROS
    // ============================================
    applyFilters() {
        const searchInput = document.getElementById('search-input');
        const searchValue = searchInput ? searchInput.value.toLowerCase().trim() : '';

        const selectedTags = [];
        document.querySelectorAll('[data-filter="tag"]:checked').forEach(cb => {
            selectedTags.push(cb.value);
        });

        const selectedCheckboxes = {};
        document.querySelectorAll('[data-filter="checkbox"]:checked').forEach(cb => {
            const group = cb.dataset.group || 'default';
            if (!selectedCheckboxes[group]) selectedCheckboxes[group] = [];
            selectedCheckboxes[group].push(cb.value);
        });

        this.activeFilters.search = searchValue;
        this.activeFilters.tags = selectedTags;
        this.activeFilters.checkboxes = selectedCheckboxes;

        this.filteredItems = this.items.filter(item => {
            return this.matchFilters(item, searchValue, selectedTags, selectedCheckboxes);
        });

        this.render();
        this.updateResultsCount();

        if (this.onUpdate) {
            this.onUpdate(this.filteredItems);
        }
    }

    // ============================================
    // LÓGICA DE FILTRAGEM
    // ============================================
matchFilters(item, searchValue, selectedTags, selectedCheckboxes) {
    // Busca por texto
    if (searchValue) {
        const searchableText = this.getSearchableText(item).toLowerCase();
        if (!searchableText.includes(searchValue)) return false;
    }

    // Filtro por Tags
    if (selectedTags.length > 0) {
        const itemTags = item.tags || [];
        if (!selectedTags.some(tag => itemTags.includes(tag))) return false;
    }

    // ============================================
    // FILTRO POR CHECKBOXES
    // ============================================
    
    // Extrai os filtros
    let classeSelecionada = null;
    let tiposSelecionados = [];
    
    for (const [group, values] of Object.entries(selectedCheckboxes)) {
        if (values.length === 0) continue;
        
        if (group === 'classe') {
            classeSelecionada = values[0];
        } else if (group === 'tipo') {
            tiposSelecionados = values;
        }
    }

    // ============================================
    // REGRA: PODERES DE CLASSE (têm 'classe')
    // ============================================
    if (item.classe) {
        // Se a classe selecionada corresponde, SEMPRE mostra
        if (classeSelecionada && item.classe === classeSelecionada) {
            return true; // ✅ SEMPRE mostra, independente dos tipos marcados
        }
        return false; // ❌ Não é da classe selecionada
    }
    
    // ============================================
    // REGRA: PODERES GERAIS (NÃO têm 'classe')
    // ============================================
    if (!item.classe) {
        // Só mostra se houver tipos selecionados E o tipo do item estiver entre eles
        if (tiposSelecionados.length > 0) {
            return tiposSelecionados.includes(item.tipo || '');
        }
        return false; // Sem tipos selecionados, não mostra gerais
    }

    return true;
}

    // ============================================
    // MÉTODOS PARA SOBRESCREVER (PERSONALIZAÇÃO)
    // ============================================
    getSearchableText(item) {
        return `${item.nome || ''} ${item.descricao || ''} ${(item.tags || []).join(' ')}`;
    }

    getCheckboxValue(item, group) {
        return item[group] || '';
    }

    // ============================================
    // RENDERIZAÇÃO
    // ============================================
    render() {
        if (!this.container) return;
        if (this.filteredItems.length === 0) {
            this.container.innerHTML = `
                <div class="filter-empty-state">
                    <span style="font-size: 2rem; display: block; margin-bottom: 0.5rem;">🔍</span>
                    <p style="color: var(--text-muted);">Nenhum resultado encontrado.</p>
                    <p style="color: var(--text-muted); font-size: 0.85rem;">Tente ajustar seus filtros ou termos de busca.</p>
                </div>
            `;
            return;
        }

        this.container.innerHTML = this.filteredItems.map(item => this.renderItem(item)).join('');
    }

    defaultRender(item) {
        return `
            <div class="filter-item">
                <h3>${item.nome || 'Item'}</h3>
                <p>${item.descricao || ''}</p>
                ${item.tags ? `<div class="filter-item-tags">${item.tags.map(t => `<span class="tag tag-${t}">${t}</span>`).join('')}</div>` : ''}
            </div>
        `;
    }

    // ============================================
    // UTILITÁRIOS
    // ============================================
    updateResultsCount() {
        const countEl = document.getElementById('filter-results-count');
        if (countEl) {
            countEl.textContent = `${this.filteredItems.length} resultados`;
        }
    }

clearFilters() {
    // Limpa input de busca
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    // Desmarca apenas as checkboxes de TIPO (Combate, Destino, etc.)
    // NÃO desmarca as checkboxes de CLASSE
    document.querySelectorAll('[data-filter="checkbox"][data-group="tipo"]:checked').forEach(cb => {
        cb.checked = false;
    });

    // Também limpa tags legado (se houver)
    document.querySelectorAll('[data-filter="tag"]:checked').forEach(cb => {
        cb.checked = false;
    });

    // Reaplica os filtros (mantém a classe selecionada)
    this.applyFilters();
}

    // ============================================
    // ATUALIZAR DADOS
    // ============================================
    updateItems(newItems) {
        this.items = newItems;
        this.filteredItems = [...this.items];
        this.applyFilters();
    }

    // ============================================
    // ATUALIZAR FILTROS EXTERNAMENTE
    // ============================================
    updateFiltersFromOutside(filterOptions) {
        if (filterOptions.checkboxes) {
            document.querySelectorAll('[data-filter="checkbox"]').forEach(cb => {
                const group = cb.dataset.group || 'default';
                if (filterOptions.checkboxes[group] && filterOptions.checkboxes[group].includes(cb.value)) {
                    cb.checked = true;
                } else {
                    cb.checked = false;
                }
            });
        }

        if (filterOptions.tags) {
            document.querySelectorAll('[data-filter="tag"]').forEach(cb => {
                cb.checked = filterOptions.tags.includes(cb.value);
            });
        }

        this.applyFilters();
    }

    // ============================================
    // DESABILITAR/HABILITAR CHECKBOXES POR GRUPO
    // ============================================
    setCheckboxGroupState(group, enabled) {
        document.querySelectorAll(`[data-filter="checkbox"][data-group="${group}"]`).forEach(cb => {
            cb.disabled = !enabled;
            const label = cb.closest('.filter-checkbox-option');
            if (label) {
                label.style.opacity = enabled ? '1' : '0.4';
                label.style.cursor = enabled ? 'pointer' : 'not-allowed';
            }
        });
    }
}