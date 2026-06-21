// ====== THEME DARK / LIGHT ======
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Charger le thème au démarrage
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    body.classList.add("light-mode");
    updateIcon(true);
  } else {
    body.classList.remove("light-mode");
    updateIcon(false);
  }
}

// Changer l’icône
function updateIcon(isLight) {
  if (!toggleBtn) return;

  toggleBtn.innerHTML = isLight
    ? '<i class="bi bi-sun-fill"></i>'
    : '<i class="bi bi-moon-fill"></i>';
}

// Toggle theme
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isLight = body.classList.toggle("light-mode");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    updateIcon(isLight);
  });
}

// Appliquer au chargement
loadTheme();


// ====== NAVBAR SCROLL EFFECT ======
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
/* */
const c = document.getElementById("network");
const ctx = c.getContext("2d");

c.width = innerWidth;
c.height = innerHeight;

let points = [];

for(let i = 0; i < 60; i++){
    points.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        dx: (Math.random() - 0.5),
        dy: (Math.random() - 0.5)
    });
}

function animate(){

    ctx.clearRect(0,0,c.width,c.height);

    points.forEach(p => {

        p.x += p.dx;
        p.y += p.dy;

        if(p.x < 0 || p.x > c.width) p.dx *= -1;
        if(p.y < 0 || p.y > c.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,2,0,Math.PI*2);
        ctx.fillStyle = "#8f3dff";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();

document.getElementById("year").textContent =
new Date().getFullYear();