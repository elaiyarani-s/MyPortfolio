document.addEventListener("DOMContentLoaded", function () {
  const experienceList = document.getElementById("experience-list");
  const filterSelect = document.getElementById("filter-select");

  const companies = [...new Set(experiences.map(exp => exp.company))];
  companies.forEach(company => {
    const option = document.createElement("option");
    option.value = company;
    option.textContent = company;
    filterSelect.appendChild(option);
  });

  function renderExperienceList(filter = "all") {
    experienceList.innerHTML = "";

    const filtered = filter === "all"
      ? experiences
      : experiences.filter(exp => exp.company === filter);

    filtered.forEach(exp => {
      const col = document.createElement("div");
      col.className = "col-12 col-md-6 col-lg-4";

      col.innerHTML = `
        <div class="card h-100 bg-info border-info shadow-sm" data-aos="fade-up">
          <div class="card-header bg-light text-center">
            <img src="${exp.image}" class="card-img-top project-img" alt="${exp.alt}" loading="lazy">
          </div>
          <div class="card-body text-center">
            <h6 class="card-title text-white">${exp.title}<br><small>(${exp.duration})</small></h6>
            <p class="card-text text-white">${exp.description}</p>
          </div>
          <div class="card-footer text-muted text-center">
            <small>${exp.company}</small>
          </div>
        </div>
      `;

      experienceList.appendChild(col);
    });

    AOS.refresh(); 
  }

  filterSelect.addEventListener("change", (e) => {
    renderExperienceList(e.target.value);
  });

  renderExperienceList();
});
