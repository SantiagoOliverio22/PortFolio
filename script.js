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


    document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página intente recargarse al enviar

        // Captura de todos los inputs de tu formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const emailUsuario = document.getElementById('email').value;
        const telefonoUsuario = document.getElementById('telefono').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;

        // Detecta qué opción de contacto (radio button) seleccionó el usuario
        const preferencia = document.querySelector('input[name="contacto"]:checked').value;

        // Configura tus datos de recepción (Reemplaza con tus datos reales)
        const miNumeroWhatsApp = "542645519772"; 
        const miCorreo = "santiagooliverio2006@gmail.com"; 

        // Estructura del mensaje que recibirás
        const textoMensaje = `¡Hola Santiago! Soy ${nombre} ${apellido}.\n\nTe contacto por el siguiente asunto: ${asunto}\n\nMensaje:\n${mensaje}\n\nMis datos de contacto:\nEmail: ${emailUsuario}\nTeléfono: ${telefonoUsuario}\nPreferencia elegida: ${preferencia}`;

        // Lógica de redirección según la opción elegida
        if (preferencia === 'whatsapp' || preferencia === 'telefono') {
            const textoCodificado = encodeURIComponent(textoMensaje);
            const urlWhatsApp = `https://wa.me/${miNumeroWhatsApp}?text=${textoCodificado}`;
            window.open(urlWhatsApp, '_blank'); 
        } else if (preferencia === 'email') {
            const asuntoCodificado = encodeURIComponent(`Nuevo contacto en tu Portfolio: ${asunto}`);
            const cuerpoCodificado = encodeURIComponent(textoMensaje);
            const urlMail = `mailto:${miCorreo}?subject=${asuntoCodificado}&body=${cuerpoCodificado}`;
            window.location.href = urlMail; 
        }
    });

    cargarFrase();
    cargarClima();
    cargarDolar();
    cargarCrypto();
    cargarChiste();
    cargarPokemon();

});


// 1. API de Frases (DummyJSON)
async function cargarFrase() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // Requisito 7
    try {
        const response = await fetch('https://dummyjson.com/quotes/random', { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        
        // Requisito 5: Mostrar dos datos (Frase y Autor)
        document.getElementById('texto-frase').textContent = `"${data.quote}"`;
        document.getElementById('autor-frase').textContent = data.author;
        document.getElementById('contenedor-frase').style.opacity = '1';
    } catch (error) {
        // Fallback elegante en caso de error
        document.getElementById('texto-frase').textContent = `"La tecnología es el arte de resolver problemas."`;
        document.getElementById('autor-frase').textContent = "Anónimo";
        document.getElementById('contenedor-frase').style.opacity = '1';
    }
}

// 2. API del Clima (Open-Meteo para San Juan)
async function cargarClima() {
    const div = document.getElementById('resultado-clima');
    div.innerHTML = "<p>Cargando datos...</p>";
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // Requisito 7
    
    try {
        // Coordenadas geográficas de San Juan
        const url = 'https://api.open-meteo.com/v1/forecast?latitude=-31.5375&longitude=-68.5364&current_weather=true';
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        
        // Requisito 5: Mostrar dos datos (Temperatura y Viento)
        div.innerHTML = `
            <p style="margin: 5px 0; font-size: 18px;"><strong>Temperatura:</strong> ${data.current_weather.temperature}°C</p>
            <p style="margin: 5px 0; font-size: 18px;"><strong>Viento:</strong> ${data.current_weather.windspeed} km/h</p>
        `;
    } catch (error) {
        // Requisito 8: Manejo de errores
        const mensaje = error.name === 'AbortError' ? 'Tiempo agotado (5s).' : error.message;
        div.innerHTML = `<p style="color: red; font-size: 16px; font-weight: bold;">Error: ${mensaje}</p>`;
    }
}

// 3. API Cotización (DolarAPI)
async function cargarDolar() {
    const div = document.getElementById('resultado-dolar');
    div.innerHTML = "<p>Cargando datos...</p>";
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // Requisito 7
    
    try {
        const response = await fetch('https://dolarapi.com/v1/dolares', { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const data = await response.json();
        
        // La API devuelve un array, filtramos para obtener el Oficial y el Blue
        const oficial = data.find(d => d.casa === 'oficial');
        const blue = data.find(d => d.casa === 'blue');
        
        // Requisito 5: Mostrar dos datos (Dólar Oficial y Dólar Blue)
        div.innerHTML = `
            <p style="margin: 5px 0; font-size: 18px;"><strong>Oficial:</strong> $${oficial.venta}</p>
            <p style="margin: 5px 0; font-size: 18px;"><strong>Blue:</strong> $${blue.venta}</p>
        `;
    } catch (error) {
        // Requisito 8: Manejo de errores
        const mensaje = error.name === 'AbortError' ? 'Tiempo agotado (5s).' : error.message;
        div.innerHTML = `<p style="color: red; font-size: 16px; font-weight: bold;">Error: ${mensaje}</p>`;
    }
}

//bitcoins
async function cargarCrypto() {
    const div = document.getElementById('resultado-crypto');
    div.innerHTML = "<p><em>Consultando blockchain...</em></p>";
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    try {
        // Endpoint público de Binance para el par Bitcoin / USDT (Dólar)
        const url = 'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT';
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        
        // Procesar los datos: Convertimos el texto a número para formatearlo bonito
        const precio = parseFloat(data.lastPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        const variacion = parseFloat(data.priceChangePercent).toFixed(2);
        
        // Lógica visual: Verde si sube, Rojo si baja
        const colorVariacion = variacion >= 0 ? '#4CAF50' : '#FF5252';
        const flecha = variacion >= 0 ? '▲' : '▼';
        
        // Mostrar los dos datos (Precio actual y Variación)
        div.innerHTML = `
            <p style="margin: 5px 0; font-size: 20px;"><strong>BTC:</strong> ${precio}</p>
            <p style="margin: 5px 0; font-size: 16px;">
                <strong>24h:</strong> 
                <span style="color: ${colorVariacion}; font-weight: bold;">${flecha} ${Math.abs(variacion)}%</span>
            </p>
        `;
    } catch (error) {
        const mensaje = error.name === 'AbortError' ? 'Timeout (5s)' : error.message;
        div.innerHTML = `<p class="error-api">Error al conectar. (${mensaje})</p>`;
    }
}


// --- 4. JOKE API ---
async function cargarChiste() {
    const div = document.getElementById('resultado-chiste');
    div.innerHTML = "<p><em>Compilando código...</em></p>";
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); 
    
    try {
        const url = 'https://v2.jokeapi.dev/joke/Programming?lang=es';
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (data.error) throw new Error(data.message);

        let textoChiste = data.type === 'single' 
            ? `"${data.joke}"` 
            : `<strong>${data.setup}</strong><br><br><em>${data.delivery}</em>`;
        
        div.innerHTML = `
            <span class="categoria-chiste">Categoría: ${data.category}</span>
            <p class="texto-chiste">${textoChiste}</p>
        `;
    } catch (error) {
        const mensaje = error.name === 'AbortError' ? 'Timeout (5s)' : error.message;
        div.innerHTML = `<p class="error-api">Error 404: Gracia no encontrada. (${mensaje})</p>`;
    }
}

// --- 5. POKE API ---
async function cargarPokemon() {
    const div = document.getElementById('resultado-pokemon');
    div.innerHTML = "<p><em>Buscando imagen y datos...</em></p>";

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
        const randomId = Math.floor(Math.random() * 151) + 1; // Gen 1
        const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        
        const imagenUrl = data.sprites.other['official-artwork'].front_default;

        div.innerHTML = `
            <img src="${imagenUrl}" alt="${data.name}" class="img-pokemon">
            <h4 class="nombre-pokemon">${data.name}</h4>
            <p class="dato-pokemon"><strong>Tipo:</strong> <span class="tipo-pokemon">${data.types[0].type.name}</span></p>
            <p class="dato-pokemon"><strong>Experiencia base:</strong> ${data.base_experience}</p>
        `;
    } catch (error) {
        const mensaje = error.name === 'AbortError' ? 'Timeout (5s)' : error.message;
        div.innerHTML = `<p class="error-api"><i class='bx bx-error'></i> Error de conexión: ${mensaje}</p>`;
    }
}
