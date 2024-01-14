const canvas = document.getElementById('starrySky');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const radius = Math.random() * 1.5; // Smaller stars
  const angle = Math.random() * Math.PI * 2; // Initial angle for rotation
  const speed = 0.002 + Math.random() * 0.005; // Rotation speed

  stars.push({ x, y, radius, angle, speed });
}

function draw() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  for (let i = 0; i < numStars; i++) {
    const star = stars[i];
    
    // Update star position for rotation
    star.angle += star.speed;

    // Calculate new position after rotation
    const newX = star.x + Math.cos(star.angle) * (canvas.width * 0.1); // Change '0.1' to adjust the orbit radius
    const newY = star.y + Math.sin(star.angle) * (canvas.height * 0.1); // Change '0.1' to adjust the orbit radius
    
    ctx.beginPath();
    ctx.arc(newX, newY, star.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
