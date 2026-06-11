// =========================
// DARK MODE (COMMIT 6)
// =========================
const toggleTheme = () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
};

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light");
    }
});

// =========================
// NAVBAR SCROLL EFFECT
// =========================
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Back to top button
    const topBtn = document.getElementById("topBtn");
    if (topBtn) {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }
});

// =========================
// BACK TO TOP
// =========================
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// =========================
// FADE IN ON SCROLL (COMMIT 7)
// =========================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
});

// =========================
// COUNTERS ANIMATION (COMMIT 7)
// =========================
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.dataset.target;
            let count = 0;

            const speed = target / 100;

            const update = () => {
                count += speed;

                if (count < target) {
                    counter.innerText = Math.floor(count);
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target;
                }
            };

            update();
            counterObserver.unobserve(counter);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => counterObserver.observe(counter));

document.querySelectorAll(".stats").forEach(section => {
    statsObserver.observe(section);
});

// =========================
// FILTRAGE FREELANCERS (COMMIT 8)
// =========================
const filterButtons = document.querySelectorAll(".filter-btn");
const characters = document.querySelectorAll(".character");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        characters.forEach(char => {
            if (filter === "all") {
                char.style.display = "block";
            } else {
                char.style.display =
                    char.classList.contains(filter) ? "block" : "none";
            }
        });
    });
});

// =========================
// FORM VALIDATION (COMMIT 8)
// =========================
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let valid = true;

        const inputs = form.querySelectorAll("input, textarea");

        inputs.forEach(input => {
            const error = input.nextElementSibling;

            if (input.value.trim() === "") {
                valid = false;
            }

            // EMAIL VALIDATION
            if (input.type === "email") {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!regex.test(input.value)) {
                    valid = false;
                }
            }

            // MESSAGE LENGTH
            if (input.tagName === "TEXTAREA") {
                if (input.value.trim().length < 20) {
                    valid = false;
                }
            }
        });

        if (valid) {
            alert("Message envoyé avec succès !");
            form.reset();
        } else {
            alert("Erreur : vérifie tous les champs !");
        }
    });
}