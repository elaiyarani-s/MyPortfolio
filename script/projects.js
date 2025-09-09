const projects = [
  {
    title: "Personal Portfolio",
    desc: "Created personal Portfolio webpages using Javascript, HTML, CSS and Bootstrap 5",
    img: "images/Portfolio.jpeg",
    link: "https://elaiyarani-s.github.io/MyPortfolio/",
    github: "https://github.com/elaiyarani-s/MyPortfolio.git",
    tech: ["JavaScript", "HTML", "CSS", "Bootstrap 5"],
    year: "2025"
  },
  {
    title: "Personal Portfolio",
    desc: "Created personal Portfolio webpages with Django",
    img: "images/Portfolio.jpeg",
    link: "https://elaiyarani-s.github.io/MyPortfolio/",
    github: "https://github.com/elaiyarani-s/MyPortfolio.git",
    tech: ["Django", "Python","JavaScript", "HTML", "CSS", "Bootstrap 5"],
    year: "2025"
  },
  {
    title: "REHA Radio",
    desc: "Created a website for streaming online tamil fm radios and a pop up real time public chat app",
    img: "images/RehaIT.png",
    link: "https://reha-radio.onrender.com/",
    github: "https://github.com/elaiyarani-s/REHA_radio.git",
    tech: ["Python", "Django"],
    year: "2025"
  },
  {
  title: "SkillSwap",
  desc: "Created a website for free skill swap comunity as part of Lexicon project",
  img: "images/SkillSwap.png",
  link: "#",
  github: "https://github.com/project-django-group5/Skillswap.git",
  tech: ["Python", "Django", "Javascript", "HTML", "CSS", "Bootstrap 5"],
  year: "2025"
}
];


const container = document.querySelector(".project-container");
const techFilter = document.getElementById("tech-filter");
const dateFilter = document.getElementById("date-filter");


function populateFilters() {
  const techs = [...new Set(projects.flatMap(p => p.tech))].sort();
  const years = [...new Set(projects.map(p => p.year))].sort().reverse();

  techFilter.innerHTML = `<option value="all">All Technologies</option>`;
  techs.forEach(tech => {
    const opt = document.createElement("option");
    opt.value = tech;
    opt.textContent = tech;
    techFilter.appendChild(opt);
  });

  dateFilter.innerHTML = `<option value="all">All Years</option>`;
  years.forEach(year => {
    const opt = document.createElement("option");
    opt.value = year;
    opt.textContent = year;
    dateFilter.appendChild(opt);
  });
}


function renderProjects() {
  const tech = techFilter.value;
  const year = dateFilter.value;

  container.innerHTML = "";

  const filtered = projects.filter(p =>
    (tech === "all" || p.tech.includes(tech)) &&
    (year === "all" || p.year === year)
  );

  filtered.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card col-12 col-md-6 col-lg-4 mt-4";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-tech", project.tech.join(','));

    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-header text-center">
          <img src="${project.img}" class="card-img-top project-img" alt="${project.title}" style="width: 80px; object-fit: contain;">
        </div>
        <div class="card-body text-center">
          <h5 class="card-title"><i class="bi bi-code-square"></i> ${project.title}</h5>
          <p class="card-text project-desc">${project.desc}</p>
          <a href="${project.github}" class="btn btn-primary" target="_blank">
            <i class="bi bi-github"></i> View Code
          </a>
          <a href="${project.link}" class="btn btn-outline-primary" target="_blank">
            View Website
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Toggle description on image click
  container.querySelectorAll(".project-img").forEach(img => {
    img.addEventListener("click", () => {
      const desc = img.closest(".card").querySelector(".project-desc");
      desc.style.display = desc.style.display === "block" ? "none" : "block";
    });
  });

  AOS.refresh();
}

// Init
populateFilters();
renderProjects();

// Listeners
techFilter.addEventListener("change", renderProjects);
dateFilter.addEventListener("change", renderProjects);
