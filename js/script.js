// Easy Doctors Landing Pages - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Animações de entrada
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos com animação
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contador animado para estatísticas
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + (target >= 1000 ? 'k+' : '+');
        }, 20);
    }

    // Observar contadores
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stat-number').forEach(counter => {
        counterObserver.observe(counter);
    });

    // Efeito parallax suave no hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image img');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });

    // Adicionar classe ativa aos botões ao hover
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Fechar todas as outras perguntas
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // Se a pergunta clicada não estava ativa, abrir ela
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });

    // Função para capturar parâmetro vendedor da URL atual
    function getVendedorParam() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('vendedor');
    }

    // Função para redirecionar para planos com parâmetro vendedor
    function redirectToPlanos() {
        const vendedor = getVendedorParam();
        let planosUrl = 'https://planos.easydoctors.us/';
        
        if (vendedor) {
            planosUrl += `?vendedor=${vendedor}`;
        }
        
        window.location.href = planosUrl;
    }

    // Configurar todos os botões "QUERO BLINDAR MINHA SAÚDE AGORA"
    document.querySelectorAll('a[href="#"]').forEach(btn => {
        if (btn.textContent.includes('QUERO BLINDAR MINHA SAÚDE AGORA')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                redirectToPlanos();
            });
        }
    });
});
