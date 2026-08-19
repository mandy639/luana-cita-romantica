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

// Botón NO que se escapa
const btnNo = document.getElementById('btnNo');

btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
});

btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
});
