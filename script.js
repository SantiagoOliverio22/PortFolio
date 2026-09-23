document.addEventListener("DOMContentLoaded", () => {
     
    // TARJETAS DE PROYECTOS
    const tarjetas = document.querySelectorAll('.tarjet');

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            
            tarjeta.classList.toggle('expandida');
            
            
            tarjetas.forEach(otraTarjeta => {
                if (otraTarjeta !== tarjeta) {
                    otraTarjeta.classList.remove('expandida');
                }
            });
            

        })
    });

    // BOTON PARA SUBIR
    const btnArriba = document.getElementById('volver-arriba');
    if (btnArriba) {
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btnArriba.classList.add('mostrar');
            } else {
                btnArriba.classList.remove('mostrar');
            }
        });

        btnArriba.addEventListener('click', () => {
            lenis.scrollTo(0);
        });
    }

    // APARICION DE TEXTOS
    const observadorScroll = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('mostrar-scroll');
            } 
        });
    }, {
        threshold: 0.15 
    });
    const elementosParaAnimar = document.querySelectorAll('.oculto-scroll');

    elementosParaAnimar.forEach((elemento) => {
        observadorScroll.observe(elemento);
    });

    // DESPLAZAMIENTO
    const lenis = new Lenis({
        duration: 1.2, 
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        smooth: true
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    document.querySelectorAll('nav a[href^="#"]').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault(); 
            const destino = this.getAttribute('href'); 
            lenis.scrollTo(destino);
        });
    });

    // SECRETO
    const fotoSecreta = document.getElementById('foto-secreta');
    const fotoSecreta2 = document.getElementById('foto-secreta2');
    const mensajeSecreto = document.getElementById('mensaje-secreto');
    let contadorClics = 0;
    let contadorClics2 = 0;

    if (fotoSecreta && mensajeSecreto) {
        fotoSecreta.addEventListener('click', () => {
            contadorClics++;
            
            if (contadorClics === 10) {
              
                mensajeSecreto.classList.add('flotante-activo');
                
                setTimeout(() => {
                    mensajeSecreto.classList.remove('flotante-activo');
                    contadorClics = 0; 
                }, 4000);
            }
        });
    }
    if (fotoSecreta2 && mensajeSecreto) {
        fotoSecreta2.addEventListener('click', () => {
            contadorClics2++;
            
            if (contadorClics2 === 10) {
              
                mensajeSecreto.classList.add('flotante-activo');
                
                setTimeout(() => {
                    mensajeSecreto.classList.remove('flotante-activo');
                    contadorClics2 = 0; 
                }, 4000);
            }
        });
    }


    // TESTIMONIOS
    const btnVerMas = document.getElementById('boton-VerMas');
    const testimoniosExtra = document.getElementById('testimonios-extra');
    if (btnVerMas && testimoniosExtra) {
        btnVerMas.addEventListener('click', () => {
            testimoniosExtra.classList.toggle('mostrar-mas');
            testimoniosExtra.classList.toggle('oculto');
            
            if (testimoniosExtra.classList.contains('mostrar-mas')) {
                btnVerMas.textContent = 'Ver menos';
            } else {
                btnVerMas.textContent = 'Ver más';
            }
        });
    }


    // AÑO AUTOMÁTICO
    const elementoAnio = document.getElementById('fecha');
    
    if (elementoAnio) {
        const fechaActual = new Date().getFullYear();
        elementoAnio.textContent = fechaActual;
    }

    // MODO CLARO OSCURO
    const btnTema = document.getElementById('btn-tema');
    const iconoTema = btnTema.querySelector('i');
    const hojaEstilos = document.getElementById('hojaEstilos');
    const videoFondo = document.getElementById('video-fondo');
    const sourceVideo = document.getElementById('source-video');
    const favicon = document.getElementById('favicon');

    if (btnTema && hojaEstilos) {
        btnTema.addEventListener('click', () => {
            if (hojaEstilos.getAttribute('href') === 'style.css') {
                hojaEstilos.setAttribute('href', 'styleClaro.css');
                iconoTema.classList.remove('bx-sun');
                iconoTema.classList.add('bx-moon');
                btnTema.style.color = '#FF2A40'; 
                sourceVideo.src = 'FondoClaro.mp4';
                favicon.href = 'imagenes/maletin.png';
                
            } else {
                hojaEstilos.setAttribute('href', 'style.css');
                iconoTema.classList.remove('bx-moon');
                iconoTema.classList.add('bx-sun');
                btnTema.style.color = '#00BFFF';
                sourceVideo.src = 'Fondo.mp4';
                favicon.href = 'imagenes/laptop.png';
            }
            
            videoFondo.load();
        });
    }
});

