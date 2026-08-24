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
                        <li><a href="/index.html" class="nav-link">Início</a></li>
                        <li><a href="/pages/races.html" class="nav-link">Raças</a></li>
                        <li><a href="/pages/classes.html" class="nav-link">Classes</a></li>
                        <li><a href="/pages/equipments.html" class="nav-link">Equipamentos</a></li>
                        <li><a href="/pages/spells.html" class="nav-link">Magias</a></li>
                        <li><a href="/pages/rules.html" class="nav-link">Regras</a></li>
                        <li><a href="/pages/test.html" class="nav-link">Testes</a></li>
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
    // Insere o header no início do body
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = createHeader();
    }

    // Insere o footer no final do body
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = createFooter();
    }

    // Marca o link ativo na navegação
    highlightActiveNav();
}

// ============================================
// DESTACAR LINK ATIVO
// ============================================
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ============================================
// INICIALIZAR COMPONENTES QUANDO O DOM CARREGAR
// ============================================
document.addEventListener('DOMContentLoaded', loadComponents);