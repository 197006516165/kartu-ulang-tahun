function changeMessage() {
  const messages = [
    "Semoga semua impianmu tercapai 🎯",
    "Tetap semangat dan terus berkarya 💪",
    "Dikelilingi orang-orang yang mencintaimu ❤️",
    "Selamat menikmati hari spesialmu! 🌟"
  ];
  const message = document.getElementById("message");
  message.innerText = messages[Math.floor(Math.random() * messages.length)];
  startConfetti();
}

// 🎉 Confetti Effect
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
let particles = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomColor() {
  const colors = ['#ff0', '#f0f', '#0ff', '#0f0', '#f00', '#00f'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createParticle() {
  return {
    x: Math.random() * canvas.width,
    y: 0,
    speed: Math.random() * 3 + 2,
    radius: Math.random() * 6 + 2,
    color: randomColor()
  };
}

function startConfetti() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push(createParticle());
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.y += p.speed;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fillStyle = p.color;
    ctx.fill();
    if (p.y > canvas.height) {
      particles[i] = createParticle();
    }
  });
  requestAnimationFrame(animate);
}
