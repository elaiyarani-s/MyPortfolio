document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
 AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
});
   const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbar-top',
      offset: 70
    });
  // Theme toggle
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
    setTheme(!document.body.classList.contains("dark-mode"));
  });

  // Scroll to top button
  const scrollBtn = document.getElementById("scrollToTopBtn");
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});

