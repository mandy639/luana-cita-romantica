// Crear corazones flotantes
function crearCorazones() {
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💞', '💝'];
    const container = document.querySelector('.hearts-container');
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        container.appendChild(heart);
    }
}

// Mostrar mensaje cuando hace click
function mostrarMensaje() {
    const mensaje = document.getElementById('mensaje');
    mensaje.classList.remove('hidden');
    
    // Crear explosión de corazones
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            crearCorazonExplosivo();
        }, i * 100);
    }
}

// Crear corazones que explotan desde el centro
function crearCorazonExplosivo() {
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💞', '💝'];
    const container = document.querySelector('.hearts-container');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = 50 + (Math.random() - 0.5) * 40 + '%';
    heart.style.top = 50 + (Math.random() - 0.5) * 40 + '%';
    heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
    heart.style.animationDuration = '3s';
    container.appendChild(heart);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Inicializar
crearCorazones();

// Botón NO que se escapa por toda la pantalla
const btnNo = document.getElementById('btnNo');
const container = document.querySelector('.container');

function escaparBoton(e) {
    e.preventDefault();
    e.stopPropagation();
    
    // Calcular posición random dentro del viewport
    const maxX = window.innerWidth - btnNo.offsetWidth - 40;
    const maxY = window.innerHeight - btnNo.offsetHeight - 40;
    
    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;
    
    // Sacarlo del flujo normal y posicionarlo fijo en pantalla
    btnNo.style.position = 'fixed';
    btnNo.style.left = newX + 'px';
    btnNo.style.top = newY + 'px';
    btnNo.style.transform = 'none';
    btnNo.style.zIndex = '999';
    btnNo.style.transition = 'all 0.15s ease';
}

btnNo.addEventListener('mouseover', escaparBoton);
btnNo.addEventListener('mousedown', escaparBoton);
btnNo.addEventListener('touchstart', escaparBoton);
btnNo.addEventListener('focus', escaparBoton);
