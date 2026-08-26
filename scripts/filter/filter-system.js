// scripts/filters/filter-system.js

/**
 * Sistema de Pesquisa com Filtro - Modular e Genérico
 * 
 * Uso:
 * const filter = new FilterSystem({
 *     containerId: 'poderes-container',
 *     searchInputId: 'search-input',
 *     filterContainerId: 'filter-options',
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
    // CONSTRUÇÃO DOS FILTROS
    // ============================================
    buildFilters() {
        const config = this.filterConfig;
        let html = '';

        // === FILTRO DE TAGS (Dropdown) ===
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

        // === FILTRO DE CHECKBOX (Categorias) ===
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

        // === FILTRO DE TEXTO (Busca) ===
        html += `
            <div class="filter-group filter-search-group">
                <label class="filter-label">Buscar</label>
                <input type="text" class="filter-search-input" id="search-input" placeholder="Digite para buscar..." />
            </div>
        `;

        // === BOTÃO DE LIMPAR ===
        html += `
            <div class="filter-group filter-actions">
                <button class="filter-clear-btn" id="filter-clear-btn">Limpar Filtros</button>
                <span class="filter-results-count" id="filter-results-count">${this.filteredItems.length} resultados</span>
            </div>
        `;

        if (this.filterContainer) {
            this.filterContainer.innerHTML = html;
            this.bindFilterEvents();
        }
    }

    // ============================================
    // EVENTOS DOS FILTROS
    // ============================================
    bindFilterEvents() {
        // Dropdown de Tags
        const dropdownBtn = document.getElementById('tags-dropdown-btn');
        const dropdownContent = document.getElementById('tags-dropdown-content');
        if (dropdownBtn && dropdownContent) {
            dropdownBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdownContent.classList.toggle('open');
            });
            document.addEventListener('click', function() {
                dropdownContent.classList.remove('open');
            });
        }

        // Checkboxes de Tags
        document.querySelectorAll('[data-filter="tag"]').forEach(cb => {
            cb.addEventListener('change', () => this.applyFilters());
        });

        // Checkboxes de Categorias
        document.querySelectorAll('[data-filter="checkbox"]').forEach(cb => {
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
        // Coleta valores dos filtros
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

        // Filtra os itens
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
    // LÓGICA DE FILTRAGEM (SOBRESCREVA PARA PERSONALIZAR)
    // ============================================
    matchFilters(item, searchValue, selectedTags, selectedCheckboxes) {
        // Busca por texto (nome, descrição, etc.)
        if (searchValue) {
            const searchableText = this.getSearchableText(item).toLowerCase();
            if (!searchableText.includes(searchValue)) return false;
        }

        // Filtro por Tags
        if (selectedTags.length > 0) {
            const itemTags = item.tags || [];
            if (!selectedTags.some(tag => itemTags.includes(tag))) return false;
        }

        // Filtro por Checkboxes (categorias)
        for (const [group, values] of Object.entries(selectedCheckboxes)) {
            if (values.length > 0) {
                const itemValue = this.getCheckboxValue(item, group);
                if (!values.includes(itemValue)) return false;
            }
        }

        return true;
    }

    // ============================================
    // MÉTODOS PARA SOBRESCREVER (PERSONALIZAÇÃO)
    // ============================================
    getSearchableText(item) {
        // Sobrescreva para personalizar o que é buscado
        return `${item.nome || ''} ${item.descricao || ''} ${(item.tags || []).join(' ')}`;
    }

    getCheckboxValue(item, group) {
        // Sobrescreva para personalizar a lógica de checkbox
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

        // Desmarca todas as checkboxes
        document.querySelectorAll('[data-filter="tag"]:checked, [data-filter="checkbox"]:checked').forEach(cb => {
            cb.checked = false;
        });

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
        // filterOptions: { tags: [...], checkboxes: {...} }
        
        // Atualiza os checkboxes
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

        // Atualiza as tags (se necessário)
        if (filterOptions.tags) {
            document.querySelectorAll('[data-filter="tag"]').forEach(cb => {
                cb.checked = filterOptions.tags.includes(cb.value);
            });
        }

        // Reaplica os filtros
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