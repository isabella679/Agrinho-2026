// Efeito de scroll suave para os links da navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mensagem de boas-vindas no console (estilo dev)
console.log("Site de Agroecologia carregado com sucesso. 🌱");
