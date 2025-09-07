// Loader
window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("hidden");

  // Stats Counter
  document.querySelectorAll('.counter').forEach(counter => {
    const update = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const step = target / 100;
      if (count < target) {
        counter.innerText = Math.ceil(count + step);
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
});

// Dark Mode Toggle
const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});


// Project Filter with Animation
const filterBtns = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-grid .card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Active button highlight
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

// Navbar background change on scroll
const nav = document.querySelector("header nav");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 100;
    const sectionHeight = sec.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      if (sec.id === "about" || sec.classList.contains("stats") || sec.id === "contact" || sec.id === "projects") {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }
  });
});


// Stats Reveal Animation on Scroll
const statItems = document.querySelectorAll(".stats div");

function revealStats() {
  const triggerBottom = window.innerHeight * 0.8;
  statItems.forEach(item => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      item.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealStats);
revealStats();
