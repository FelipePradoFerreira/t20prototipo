// scripts/racas.js

// ====================================================================================================================================
// DADOS DAS RAÇAS
// ====================================================================================================================================
const racasData = {
    humano: {
        nome: 'Humano',
        descricao: 'Os humanos são a raça mais comum e adaptável de Arton. Sua versatilidade e determinação os tornam capazes de se destacar em qualquer caminho que escolherem.',
        modificadores: '+1 em três atributos diferentes',
        imagens: ['/t20prototipo/imgs/banner/Humano.jpg'],
        autor: 'ArtistaExemplo',
        autorLink: 'https://www.artstation.com/artistaexemplo',
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
    Barghest: {
        nome: 'Barghest',
        descricao: 'Os Barghests são criaturas misteriosas e poderosas, conhecidas por sua lealdade e força. Vivem em ambientes selvagens e são respeitadas por sua sabedoria e habilidades de combate.',
        modificadores: 'Con +2, Sab +1, Des –1',
        imagens: ['/t20prototipo/imgs/banner/Barghest.jpg'],
        autor: 'ArtistaExemplo2',
        autorLink: 'https://www.deviantart.com/artistaexemplo2',
        habilidades: [
            { nome: 'Resistência Barghest', descricao: 'Você tem resistência a veneno e +2 em testes de Fortitude contra venenos.' },
            { nome: 'Visão no Escuro', descricao: 'Você enxerga no escuro como se fosse luz plena até 30m.' },
            { nome: 'Estabilidade', descricao: 'Você recebe +2 em testes para resistir a empurrões e derrubamentos.' }
        ],
        poderes: [] // Barghest não tem poderes de raça
    }
};

// ====================================================================================================================================
// CONFIGURAÇÕES
// ====================================================================================================================================
const racaKeys = Object.keys(racasData);
let currentRacaIndex = 0;
let currentImageIndex = 0;

// ============================================
// FUNÇÃO PARA EXIBIR RAÇA
// ============================================
function exibirRaca(racaId) {
    const raca = racasData[racaId];
    if (!raca) return;

    currentRacaIndex = racaKeys.indexOf(racaId);
    currentImageIndex = 0;

    const tituloEl = document.getElementById('raca-titulo');
    if (tituloEl) tituloEl.textContent = `── ₪ ${raca.nome} ₪ ──`;

    const track = document.getElementById('imagem-track');
    const dotsContainer = document.getElementById('imagem-dots');
    const prevBtn = document.getElementById('imagem-prev');
    const nextBtn = document.getElementById('imagem-next');

    if (track) {
        track.innerHTML = raca.imagens.map(img => `
            <div class="carousel-slide">
                <img src="${img}" alt="${raca.nome}" />
            </div>
        `).join('');
    }

    if (dotsContainer) {
        dotsContainer.innerHTML = racaKeys.map((key, i) => `
            <span class="carousel-dot ${i === currentRacaIndex ? 'active' : ''}" data-index="${i}"></span>
        `).join('');
        dotsContainer.style.display = 'flex';
    }

    const creditoLink = document.getElementById('credito-link');
    if (creditoLink) {
        creditoLink.textContent = raca.autor || 'Artista';
        creditoLink.href = raca.autorLink || '#';
    }

    document.querySelectorAll('.raca-dropdown-item').forEach(item => {
        item.classList.toggle('active', item.dataset.raca === racaId);
    });

    const descricaoEl = document.getElementById('raca-descricao');
    const modificadoresEl = document.getElementById('raca-modificadores');
    const habilidadesEl = document.getElementById('raca-habilidades');

    if (descricaoEl) descricaoEl.textContent = raca.descricao;
    if (modificadoresEl) modificadoresEl.textContent = raca.modificadores;

    if (habilidadesEl) {
        habilidadesEl.innerHTML = raca.habilidades.map(hab => `
            <div class="raca-habilidade-item">
                <span class="bullet">✦</span>
                <span><strong>${hab.nome}:</strong> ${hab.descricao}</span>
            </div>
        `).join('');
    }

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

    const imagemContainer = document.getElementById('raca-imagem-carousel');
    if (imagemContainer) {
        imagemContainer.classList.add('show-left');
        imagemContainer.classList.add('show-right');
    }

    if (track) {
        track.innerHTML = raca.imagens.map(img => `
            <div class="carousel-slide">
                <img src="${img}" alt="${raca.nome}" />
            </div>
        `).join('');
        track.style.transform = 'translateX(0)';
    }

    closeDropdown();
}

function closeDropdown() {
    const content = document.getElementById('dropdown-content');
    const seta = document.getElementById('dropdown-seta');
    if (content) content.classList.remove('open');
    if (seta) seta.classList.remove('open');
}

// ============================================
// FUNÇÕES DO CAROUSEL DE IMAGENS
// ============================================

function nextImage() {
    if (currentRacaIndex < racaKeys.length - 1) {
        currentRacaIndex++;
    } else {
        currentRacaIndex = 0;
    }
    exibirRaca(racaKeys[currentRacaIndex]);
}

function prevImage() {
    if (currentRacaIndex > 0) {
        currentRacaIndex--;
    } else {
        currentRacaIndex = racaKeys.length - 1;
    }
    exibirRaca(racaKeys[currentRacaIndex]);
}

function goToImage(index) {
    if (index >= 0 && index < racaKeys.length) {
        currentRacaIndex = index;
        exibirRaca(racaKeys[index]);
    }
}

// ============================================
// FUNÇÕES DO DROPDOWN
// ============================================
function toggleDropdown() {
    const content = document.getElementById('dropdown-content');
    const seta = document.getElementById('dropdown-seta');
    if (content) {
        content.classList.toggle('open');
        if (seta) seta.classList.toggle('open');
    }
}

// ============================================
// FUNÇÕES DO CAROUSEL DE ATRIBUTOS (SEM DOTS)
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

    // Log para debug
    console.log(`Atributos - perView: ${atributosPerView}, maxIndex: ${maxIndex}, index: ${atributosIndex}`);
}

function nextAtributos() {
    const maxIndex = atributosTotal - getAtributosPerView(); // Recalcula na hora
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

let dragStartX = 0;
let isClick = true;

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
    
    const maxIndex = atributosTotal - getAtributosPerView(); // Recalcula na hora
    let targetIndex = Math.round(currentTranslate / slideTotal);
    targetIndex = Math.max(0, Math.min(targetIndex, maxIndex));
    
    atributosIndex = targetIndex;
    updateAtributosCarousel(true);
    
    currentTranslate = 0;
    prevTranslate = 0;
}

// ============================================
// INICIALIZAÇÃO
// ============================================
function initRacas() {
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
                    exibirRaca(racaId);
                }
            });
        });
    }

    const dropdownHeader = document.getElementById('dropdown-header');
    if (dropdownHeader) {
        dropdownHeader.addEventListener('click', toggleDropdown);
    }

    const prevBtn = document.getElementById('imagem-prev');
    const nextBtn = document.getElementById('imagem-next');
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);

    const dotsContainer = document.getElementById('imagem-dots');
    if (dotsContainer) {
        dotsContainer.addEventListener('click', function(e) {
            const dot = e.target.closest('.carousel-dot');
            if (dot) {
                const index = parseInt(dot.dataset.index);
                if (!isNaN(index)) goToImage(index);
            }
        });
    }

    const atributosPrev = document.getElementById('atributos-prev');
    const atributosNext = document.getElementById('atributos-next');
    if (atributosPrev) atributosPrev.addEventListener('click', prevAtributos);
    if (atributosNext) atributosNext.addEventListener('click', nextAtributos);

    initAtributosDrag();

    exibirRaca('humano');

    setTimeout(() => updateAtributosCarousel(false), 50);

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

    console.log('✅ Página de Raças inicializada com sucesso!');
}

document.addEventListener('DOMContentLoaded', initRacas);