/* ==========================================================================
   EXSA | OFFICIAL HUB — LÓGICA JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.photo-stack img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function updateStack() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'next', 'prev');
            if (index === currentIndex) {
                slide.classList.add('active');
                slide.setAttribute('aria-hidden', 'false');
            } else if (index === (currentIndex + 1) % slides.length) {
                slide.classList.add('next');
                slide.setAttribute('aria-hidden', 'true');
            } else {
                slide.classList.add('prev');
                slide.setAttribute('aria-hidden', 'true');
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateStack();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateStack();
        });
    }

    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            if (slide.classList.contains('next')) {
                currentIndex = (currentIndex + 1) % slides.length;
                updateStack();
            } else if (slide.classList.contains('prev')) {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateStack();
            }
        });
    });

    if (slides.length) updateStack();
});

/* Copia el alias de Mercado Pago al portapapeles */
function copiarAlias() {
    const alias = 'exsaoficial.mp';
    navigator.clipboard.writeText(alias).then(() => {
        alert(`¡Alias "${alias}" copiado al portapapeles! Ya podés pegarlo en tu app de Mercado Pago.`);
    }).catch(() => {
        alert(`No se pudo copiar automáticamente. El alias es: ${alias}`);
    });
}

/* Easter egg del logo */
function easterEgg() {
    alert('Gracias por estar aqui, te amo <3');
}