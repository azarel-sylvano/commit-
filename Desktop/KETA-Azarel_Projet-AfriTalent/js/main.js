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

/*======== Fonction compteur animé =======*/
/*======== Cette fonction anime un compteur =======*/
function startCounter(id, max = 2500, speed = 30) {
    // Valeur initiale du compteur
let count = 0
    // Sélection de l'élément HTML par son id 
let compteur = document.getElementById(id);
    // SetInterval permet de répéter une action
let interval = setInterval (() => {
    // Incrémentation du compteur
    count++;
    // Affichage du nombre dans HTML
    compteur.textContent = count;
    // Arrêter le compteur lorsqu'il atteint la valeur maximale
    if (count >= max) {
        clearInterval(interval);
       }
    }, speed); 
}
// Lancement des compteurs 
window.onload = function () {

    startCounter("count1", 150);
    startCounter("count2", 6);
    startCounter("count3", 50);
    startCounter("count4", 20);
    startCounter("count5", 200);
    startCounter("count6", 15);
    startCounter("count7", +2500);
    startCounter("count8", +800);
    startCounter("count9", 50);
    startCounter("count10", +1200);
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".fade-in").forEach(section => {
    observer.observe(section);
});