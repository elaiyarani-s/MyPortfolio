
AOS.init();

const icon = document.getElementById("icon");
const home = document.getElementById("home");

function setTheme(dark) {
  document.body.classList.toggle("dark-mode", dark);
  home.style.background = dark
    ? "linear-gradient(33deg, #1c1c28 0%, #121c26 100%)"
    : "linear-gradient(33deg, #f2f2ff 0%, #ebf9ff 100%)";
  icon.src = dark ? "images/sun.png" : "images/moon.png";
}

icon.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  setTheme(isDark);
});




// Scroll to top button
const scrollBtn = document.getElementById('scrollToTopBtn');
window.onscroll = function () {
  scrollBtn.style.display = (window.scrollY > 100) ? "block" : "none";
};
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

//  Toggle project descriptions on image click
document.querySelectorAll('.project-img').forEach(img => {
  img.addEventListener('click', () => {
    const desc = img.closest('.card').querySelector('.project-desc');
    desc.style.display = (desc.style.display === 'block') ? 'none' : 'block';
  });
});

const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
sections.forEach(section => observer.observe(section));

const filterSelect = document.getElementById("filter");
filterSelect.addEventListener("change", (e) => {
  const value = e.target.value;
  document.querySelectorAll(".project-card").forEach(card => {
    if (value === "all" || card.dataset.tech === value) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});




