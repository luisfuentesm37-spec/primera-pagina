document.addEventListener('DOMContentLoaded', () => {
    const hamburguesa = document.getElementById('hamburguesa');
    const enlaces = document.getElementById('enlaces');
    const nav = document.querySelector('nav');
    const linksMenu = document.querySelectorAll('.enlaces-header a');

    // Abrir / cerrar menú móvil
    hamburguesa.addEventListener('click', () => {
        enlaces.classList.toggle('activo');
        
        // Cambiar ícono entre barras y X
        const icono = hamburguesa.querySelector('i');
        if (enlaces.classList.contains('activo')) {
            icono.classList.remove('fa-bars');
            icono.classList.add('fa-xmark');
        } else {
            icono.classList.remove('fa-xmark');
            icono.classList.add('fa-bars');
        }
    });

    // Cerrar el menú automáticamente al hacer clic en una sección
    linksMenu.forEach(link => {
        link.addEventListener('click', () => {
            enlaces.classList.remove('activo');
            const icono = hamburguesa.querySelector('i');
            icono.classList.remove('fa-xmark');
            icono.classList.add('fa-bars');
        });
    });

    // Sombra en el navbar al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});