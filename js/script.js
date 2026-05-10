document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const nombre  = document.getElementById('nombre').value.trim();
            const email   = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa todos los campos antes de enviar.');
                return;
            }

            alert(`¡Gracias, ${nombre}! Un especialista te contactará pronto.`);
            form.reset();
        });
    }

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});