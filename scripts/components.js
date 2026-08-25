// scripts/components.js

/**
 * Componentes reutilizáveis para o site
 */

// ============================================
// HEADER COMPONENT
// ============================================
function createHeader() {
    return `
        <header class="nordic-header">
            <div class="header-container">
                <div class="logo-container">
                    <div class="logo-text">T20</div>
                    <div class="logo-subtitle">Guia do Aventureiro</div>
                </div>
                <nav class="main-nav">
                    <ul>
                        <li><a href="/t20prototipo/index.html" class="nav-link">Início</a></li>
                        <li><a href="/t20prototipo/pages/races.html" class="nav-link">Raças</a></li>
                        <li><a href="/t20prototipo/pages/classes.html" class="nav-link">Classes</a></li>
                        <li><a href="/t20prototipo/pages/test.html" class="nav-link">Testes</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `;
}

// ============================================
// FOOTER COMPONENT
// ============================================
function createFooter() {
    return `
        <footer class="nordic-footer">
            <div class="container">
                <div class="footer-content">
                    <p>Guia T20 - Um projeto para a comunidade de Tormenta 20</p>
                    <p class="footer-small">Baseado no sistema Tormenta 20 © Jambô Editora</p>
                </div>
            </div>
        </footer>
    `;
}

// ============================================
// FUNÇÃO PARA INSERIR COMPONENTES
// ============================================
function loadComponents() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = createHeader();
    }

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = createFooter();
    }

    highlightActiveNav();
}

function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkFile = linkHref.split('/').pop();
        if (linkFile === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// CAROUSEL DE ATRIBUTOS (GENÉRICO)
// ============================================
let atributosIndex = 0;
const atributosTotal = 6;
let atributosPerView = 3;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

function getAtributosPerView() {
    const width = window.innerWidth;
    if (width < 768) return 1;
    if (width < 1024) return 2;
    return 3;
}

function updateAtributosCarousel(animate = true) {
    const track = document.getElementById('atributos-track');
    const prevBtn = document.getElementById('atributos-prev');
    const nextBtn = document.getElementById('atributos-next');
    const container = document.getElementById('atributos-carousel');

    if (!track) return;

    atributosPerView = getAtributosPerView();
    const maxIndex = atributosTotal - atributosPerView;

    if (atributosIndex > maxIndex) atributosIndex = maxIndex;
    if (atributosIndex < 0) atributosIndex = 0;

    const slides = track.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    
    const slideWidth = slides[0].offsetWidth;
    const gap = 1.5 * 16;
    const offset = atributosIndex * (slideWidth + gap);
    
    if (animate) {
        track.style.transition = 'transform 0.5s ease';
    } else {
        track.style.transition = 'none';
    }
    track.style.transform = `translateX(-${offset}px)`;

    if (prevBtn) prevBtn.disabled = atributosIndex === 0;
    if (nextBtn) nextBtn.disabled = atributosIndex >= maxIndex;

    if (container) {
        container.classList.toggle('show-left', atributosIndex > 0);
        container.classList.toggle('show-right', atributosIndex < maxIndex);
    }
}

function nextAtributos() {
    const maxIndex = atributosTotal - getAtributosPerView();
    if (atributosIndex < maxIndex) {
        atributosIndex++;
        updateAtributosCarousel(true);
    }
}

function prevAtributos() {
    if (atributosIndex > 0) {
        atributosIndex--;
        updateAtributosCarousel(true);
    }
}

// ============================================
// DRAG PARA CAROUSEL DE ATRIBUTOS
// ============================================
let dragStartX = 0;
let isClick = true;

function initAtributosDrag() {
    const track = document.getElementById('atributos-track');
    const container = document.getElementById('atributos-carousel');
    if (!track || !container) return;

    track.addEventListener('touchstart', dragStart, { passive: true });
    track.addEventListener('touchmove', dragMove, { passive: true });
    track.addEventListener('touchend', dragEnd, { passive: true });

    track.addEventListener('mousedown', dragStart);
    track.addEventListener('mousemove', dragMove);
    track.addEventListener('mouseup', dragEnd);
    track.addEventListener('mouseleave', dragEnd);
}

function dragStart(e) {
    const track = document.getElementById('atributos-track');
    if (!track) return;
    
    isDragging = true;
    isClick = true;
    dragStartX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    
    const transform = track.style.transform;
    const match = transform.match(/translateX\(-([\d.]+)px\)/);
    prevTranslate = match ? parseFloat(match[1]) : 0;
    
    track.style.transition = 'none';
    if (animationID) {
        cancelAnimationFrame(animationID);
        animationID = 0;
    }
}

function dragMove(e) {
    if (!isDragging) return;
    e.preventDefault();
    
    const track = document.getElementById('atributos-track');
    if (!track) return;
    
    const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const diff = (dragStartX - currentX) * 0.8;
    
    if (Math.abs(diff) > 5) {
        isClick = false;
    }
    
    currentTranslate = prevTranslate + diff;
    track.style.transform = `translateX(-${currentTranslate}px)`;
}

function dragEnd(e) {
    if (!isDragging) return;
    
    isDragging = false;
    const track = document.getElementById('atributos-track');
    if (!track) return;
    
    if (isClick) {
        track.style.transition = 'transform 0.5s ease';
        updateAtributosCarousel(true);
        currentTranslate = 0;
        prevTranslate = 0;
        return;
    }
    
    track.style.transition = 'transform 0.5s ease';
    
    const slides = track.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    
    const slideWidth = slides[0].offsetWidth;
    const gap = 1.5 * 16;
    const slideTotal = slideWidth + gap;
    
    const maxIndex = atributosTotal - getAtributosPerView();
    let targetIndex = Math.round(currentTranslate / slideTotal);
    targetIndex = Math.max(0, Math.min(targetIndex, maxIndex));
    
    atributosIndex = targetIndex;
    updateAtributosCarousel(true);
    
    currentTranslate = 0;
    prevTranslate = 0;
}

// ============================================
// FUNÇÕES PARA CAROUSEL DE IMAGENS (GENÉRICO)
// ============================================
function initImageCarousel(config) {
    const {
        trackId,
        prevBtnId,
        nextBtnId,
        dotsId,
        containerId,
        creditoLinkId,
        items,
        currentIndex,
        onImageChange
    } = config;

    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const dotsContainer = document.getElementById(dotsId);
    const container = document.getElementById(containerId);
    const creditoLink = document.getElementById(creditoLinkId);

    if (!track || !prevBtn || !nextBtn) {
        console.error('Carousel: elementos não encontrados');
        return;
    }

    // Armazena o índice atual internamente
    let internalIndex = currentIndex.value || 0;

    // Função para atualizar o carousel
    function updateCarousel(index) {
        const totalItems = items.length;
        if (totalItems === 0) return;
        
        // Limita o índice
        if (index >= totalItems) index = 0;
        if (index < 0) index = totalItems - 1;
        
        internalIndex = index;
        if (currentIndex) currentIndex.value = index;

        // Atualiza track com a imagem correta
        const currentItem = items[index];
        track.innerHTML = `
            <div class="carousel-slide">
                <img src="${currentItem.imagem}" alt="${currentItem.nome}" />
            </div>
        `;

        // Reseta a posição do track
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        // Força reflow
        track.offsetHeight;
        track.style.transition = 'transform 0.5s ease';

        // Atualiza dots
        if (dotsContainer) {
            dotsContainer.innerHTML = items.map((_, i) => `
                <span class="carousel-dot ${i === index ? 'active' : ''}" data-index="${i}"></span>
            `).join('');
            dotsContainer.style.display = 'flex';
        }

        // Atualiza crédito
        if (creditoLink) {
            creditoLink.textContent = currentItem.autor || 'Artista';
            creditoLink.href = currentItem.autorLink || '#';
        }

        // Atualiza degrades
        if (container) {
            container.classList.add('show-left');
            container.classList.add('show-right');
        }

        // Callback - chama a função para trocar a raça/classe
        if (onImageChange && typeof onImageChange === 'function') {
            onImageChange(index);
        }
    }

    // Navegação
    function nextImage() {
        const totalItems = items.length;
        if (totalItems <= 1) return;
        const newIndex = (internalIndex + 1) % totalItems;
        updateCarousel(newIndex);
    }

    function prevImage() {
        const totalItems = items.length;
        if (totalItems <= 1) return;
        const newIndex = (internalIndex - 1 + totalItems) % totalItems;
        updateCarousel(newIndex);
    }

    function goToImage(index) {
        const totalItems = items.length;
        if (totalItems <= 1) return;
        if (index >= 0 && index < totalItems) {
            updateCarousel(index);
        }
    }

    // Eventos
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        prevImage();
    });
    
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        nextImage();
    });

    if (dotsContainer) {
        dotsContainer.addEventListener('click', function(e) {
            const dot = e.target.closest('.carousel-dot');
            if (dot) {
                const index = parseInt(dot.dataset.index);
                if (!isNaN(index)) goToImage(index);
            }
        });
    }

    // Inicializa
    updateCarousel(internalIndex);

    return { nextImage, prevImage, goToImage, updateCarousel };
}

// ============================================
// FUNÇÕES PARA DROPDOWN EXPANSÍVEL (GENÉRICO)
// ============================================
function initDropdown(dropdownId, headerId, contentId, setaId) {
    const dropdown = document.getElementById(dropdownId);
    const header = document.getElementById(headerId);
    const content = document.getElementById(contentId);
    const seta = document.getElementById(setaId);

    if (!dropdown || !header || !content) return;

    function toggleDropdown() {
        content.classList.toggle('open');
        if (seta) seta.classList.toggle('open');
    }

    function closeDropdown() {
        content.classList.remove('open');
        if (seta) seta.classList.remove('open');
    }

    header.addEventListener('click', toggleDropdown);

    return { toggleDropdown, closeDropdown };
}

// ============================================
// FUNÇÃO PARA EXIBIR DETALHES (GENÉRICO)
// ============================================
function exibirDetalhes(config) {
    const {
        data,
        itemId,
        tituloId,
        descricaoId,
        modificadoresBoxId,
        habilidadesId,
        poderesId,
        gridId,
        poderesColId,
        cardsSelector,
        onBeforeUpdate,
        onAfterUpdate
    } = config;

    const item = data[itemId];
    if (!item) return;

    if (onBeforeUpdate) onBeforeUpdate(itemId);

    // === TÍTULO ===
    const tituloEl = document.getElementById(tituloId);
    if (tituloEl) tituloEl.textContent = `── ₪ ${item.nome} ₪ ──`;

    // === CARDS: Destacar card ativo ===
    if (cardsSelector) {
        document.querySelectorAll(cardsSelector).forEach(card => {
            card.style.borderColor = 'rgba(58, 74, 90, 0.3)';
            card.style.boxShadow = 'none';
            if (card.dataset.classe === itemId || card.dataset.raca === itemId) {
                card.style.borderColor = 'var(--gold)';
                card.style.boxShadow = '0 8px 40px rgba(201, 168, 76, 0.15)';
            }
        });
    }

    // === INFORMAÇÕES BÁSICAS ===
    const descricaoEl = document.getElementById(descricaoId);
    if (descricaoEl) descricaoEl.textContent = item.descricao;

    // Modificadores (se houver)
    if (modificadoresBoxId) {
        const boxEl = document.getElementById(modificadoresBoxId);
        if (boxEl && item.modificadores) {
            boxEl.innerHTML = `<p><strong style="color: var(--gold);">Modificadores:</strong> ${item.modificadores}</p>`;
        }
    }

    // === HABILIDADES ===
    const habilidadesEl = document.getElementById(habilidadesId);
    if (habilidadesEl && item.habilidades) {
        habilidadesEl.innerHTML = item.habilidades.map(hab => `
            <div class="raca-habilidade-item">
                <span class="bullet">✦</span>
                <span><strong>${hab.nome}:</strong> ${hab.descricao}</span>
            </div>
        `).join('');
    }

    // === PODERES ===
    const poderesEl = document.getElementById(poderesId);
    const gridEl = document.getElementById(gridId);
    const poderesCol = document.getElementById(poderesColId);

    if (poderesEl && gridEl && poderesCol) {
        if (item.poderes && item.poderes.length > 0) {
            poderesEl.innerHTML = item.poderes.map(poder => `
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

    if (onAfterUpdate) onAfterUpdate(itemId);
}

// ============================================
// INICIALIZAÇÃO DOS COMPONENTES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();

    // Inicializa carousel de atributos se existir
    if (document.getElementById('atributos-carousel')) {
        initAtributosDrag();
        setTimeout(() => updateAtributosCarousel(false), 50);
        
        // Eventos dos botões
        const prevBtn = document.getElementById('atributos-prev');
        const nextBtn = document.getElementById('atributos-next');
        if (prevBtn) prevBtn.addEventListener('click', prevAtributos);
        if (nextBtn) nextBtn.addEventListener('click', nextAtributos);

        // Resize
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const newPerView = getAtributosPerView();
                if (newPerView !== atributosPerView) {
                    atributosPerView = newPerView;
                    const maxIndex = atributosTotal - atributosPerView;
                    if (atributosIndex > maxIndex) {
                        atributosIndex = maxIndex;
                    }
                    updateAtributosCarousel(false);
                } else {
                    updateAtributosCarousel(false);
                }
            }, 200);
        });
    }
});