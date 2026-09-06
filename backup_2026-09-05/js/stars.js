/* ============================================
   ANIMACJA GWIAZD I METEORY (canvas)
   ============================================ */

const canvas = document.getElementById('stars-canvas');
const ctx = canvas.getContext('2d');

// Resize canvas
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Generate stars
const starCount = 200;
const stars = [];

for (let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 0.5,
    brightness: Math.random(),
    twinkleSpeed: Math.random() * 0.01 + 0.005,
    twinklePhase: Math.random() * Math.PI * 2,
    speedX: (Math.random() - 0.5) * 0.3,
    speedY: (Math.random() - 0.5) * 0.3
  });
}

// Meteors
const meteors = [];
function createMeteor() {
  meteors.push({
    x: -20,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    speedX: Math.random() * 4 + 2,
    speedY: (Math.random() - 0.5) * 0.5,
    opacity: 1
  });
}

// Create meteor every 3 seconds
setInterval(createMeteor, 3000);

// Animation loop
function animate() {
  // Clear with dark overlay
  ctx.fillStyle = 'rgba(10, 10, 26, 0.15)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw stars with twinkling
  stars.forEach(star => {
    star.twinklePhase += star.twinkleSpeed;
    const opacity = 0.3 + 0.5 * Math.abs(Math.cos(star.twinklePhase));
    const size = star.radius * (0.5 + 0.5 * Math.abs(Math.cos(star.twinklePhase)));

    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
    ctx.fill();

    // Move stars slowly
    star.x += star.speedX;
    star.y += star.speedY;

    // Wrap around
    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;
  });

  // Draw meteors
  meteors.forEach((meteor, i) => {
    ctx.strokeStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(meteor.x, meteor.y);
    ctx.lineTo(meteor.x + meteor.length, meteor.y + meteor.speedY * 2);
    ctx.stroke();

    meteor.x += meteor.speedX;
    meteor.opacity -= 0.02;

    if (meteor.x > canvas.width || meteor.opacity <= 0) {
      meteors.splice(i, 1);
    }
  });

  requestAnimationFrame(animate);
}

animate();