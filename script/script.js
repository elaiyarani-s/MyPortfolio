document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });

  // Initialize ScrollSpy
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: "#navbar-top",
    offset: 70,
  });

  // Theme Toggle
  const icon = document.getElementById("icon");
  const home = document.getElementById("home");

  function setTheme(dark) {
    document.body.classList.toggle("dark-mode", dark);
    document.body.classList.toggle("light-mode", !dark);

    localStorage.setItem("theme", dark ? "dark" : "light");

    home.style.background = dark
      ? "linear-gradient(33deg, #1c1c28 0%, #121c26 100%)"
      : "linear-gradient(33deg, #f2f2ff 0%, #ebf9ff 100%)";

    icon.src = dark ? "images/sun.png" : "images/moon.png";
  }

  // On load: restore saved theme
  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme === "dark");

  icon.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    setTheme(!isDark);
  });

  // Scroll to Top Button
  const scrollBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Refresh ScrollSpy after page load (for dynamic content)
  window.addEventListener("load", () => {
    bootstrap.ScrollSpy.getInstance(document.body)?.refresh();
  });
});
