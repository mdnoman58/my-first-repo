const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let particles = []; // Array to hold particle data
const particleCount = 100; // Number of particles

// Initialize particles randomly
function initParticles() {
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 1,
            color: 'rgba(255, 165, 0, 0.8)',
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
        });
    }
}

// Update particle positions
function updateParticles() {
    particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off the edges
        if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
            particle.speedX *= -1;
        }
        if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
            particle.speedY *= -1;
        }
    });
}

// Draw particles on canvas
function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    });
}

// Main game loop
function gameLoop() {
    updateParticles();
    drawParticles();
    requestAnimationFrame(gameLoop); // Call the next frame
}

// Initialize and start the game
initParticles();
gameLoop();