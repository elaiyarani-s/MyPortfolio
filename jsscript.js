document.addEventListener("DOMContentLoaded", function () {
  const icon = document.getElementById("icon");

  // System preference check
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedTheme = localStorage.getItem("theme");
  const darkMode = storedTheme === "dark" || (!storedTheme && prefersDark);

  if (darkMode) {
    document.body.classList.add("dark-mode");
    icon.src = "images/moon.png";
  } else {
    document.body.classList.remove("dark-mode");
    icon.src = "images/sun.png";
  }

  // Toggle theme on click
  icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    icon.src = isDark ? "images/moon.png" : "images/sun.png";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // AOS scroll animation init
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Bootstrap 5 scrollspy init
  const dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));
  dataSpyList.forEach(function (spyEl) {
    bootstrap.ScrollSpy.getInstance(spyEl) || new bootstrap.ScrollSpy(spyEl, {
      target: spyEl.getAttribute('data-bs-target'),
      offset: 70,
    });
  });
});
