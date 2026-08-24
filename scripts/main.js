// scripts/main.js

/**
 * main.js - Scripts principais para o Guia T20
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ============================================
    // 1. Animações de entrada (efeito de fade-in)
    // ============================================
    const animateElements = document.querySelectorAll('.feature-card, .construction-card, .hero-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // ============================================
    // 2. Navegação suave (scroll suave para links internos)
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // 3. Atualização da barra de progresso (simulação)
    // ============================================
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        const targetWidth = parseInt(progressFill.style.width, 10) || 35;
        let currentWidth = 0;
        const interval = setInterval(() => {
            if (currentWidth < targetWidth) {
                currentWidth += 1;
                progressFill.style.width = currentWidth + '%';
            } else {
                clearInterval(interval);
            }
        }, 30);
    }

    // ============================================
    // 4. Efeito de brilho nos links do header (hover)
    // ============================================
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(201, 168, 76, 0.3)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });

    // ============================================
    // 5. Mensagem no console (boas-vindas para devs)
    // ============================================
    console.log('%c⚔ Guia T20 - Forje seu destino ⚔', 'font-size: 16px; color: #c9a84c; font-weight: bold;');
    console.log('%cSite em construção - Mais páginas em breve!', 'font-size: 12px; color: #b8c4d0;');

    // ============================================
    // 6. Função de busca simples (placeholder para futuras implementações)
    // ============================================
    window.searchContent = function(query) {
        if (!query || query.trim() === '') return;
        console.log(`🔍 Buscando por: "${query}"`);
        // Aqui futuramente implementaremos a lógica de busca real
    };

    // ============================================
    // 7. Carregamento dinâmico de conteúdo (placeholder)
    // ============================================
    window.loadPage = function(pageName) {
        console.log(`📄 Carregando página: ${pageName}`);
        // Futuramente usaremos fetch ou similar para carregar páginas dinâmicas
    };

    console.log('✅ Guia T20 inicializado com sucesso!');
});