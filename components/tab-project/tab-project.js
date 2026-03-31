const projectsList = [
  {
    name: "My Portfolio",
    image: "assets/images/VinhDo-Portfolio.PNG",
    tech: [
      "assets/icons/html.svg",
      "assets/icons/css.svg",
      "assets/icons/javascript.svg",
    ],
    github: "https://github.com/Do-Van-Vinh/vinhdo-simple-porfolio",
    demo: "https://do-van-vinh.github.io/vinhdo-simple-porfolio/",
  },
  {
    name: "ToDo App",
    image: "assets/images/Small-project_TodoApp.PNG",
    tech: [
      "assets/icons/html.svg",
      "assets/icons/css.svg",
      "assets/icons/javascript.svg",
    ],
    github: "https://github.com/Do-Van-Vinh/Small-project_ToDo-List",
    demo: "https://do-van-vinh.github.io/Small-project_ToDo-List/",
  },
  {
    name: "Calculator",
    image: "assets/images/Small-project_calculator.PNG",
    tech: [
      "assets/icons/html.svg",
      "assets/icons/css.svg",
      "assets/icons/javascript.svg",
    ],
    github: "https://github.com/Do-Van-Vinh/Small-project_Calculator-Renzdo",
    demo: "https://do-van-vinh.github.io/Small-project_Calculator-Renzdo/",
  },
];

function renderProjects(projects) {
  const project_folder = document.getElementById("project-folder");
  project_folder.innerHTML = projects
    .map((project) => {
      return `
      <div class="project--file">
        <h3 class="project__name">${project.name}</h3>

        <div class="project-stack">
          <div class="tech-box">
          ${project.tech.map((icon) => `<img src="${icon}" />`).join("")}
          </div>

          <img class="project__image" src="${project.image}" />
        </div>

        <div class="project__links">
          <a href="${project.github}" target="_blank">Visit</a>
          <a href="${project.demo}" target="_blank">Demo</a>
        </div>
      </div>
    `;
    })
    .join("");
}

function renderPagination(totalPages, currentPage) {
  const project__pagination = document.getElementById("pagination-total");

  var up_page = "";

  if (totalPages < 7) {
    for (var i = 1; i <= totalPages; i++) {
      const activeClass = i === currentPage ? "active" : "";
      up_page += `<div class="page ${activeClass}">${i}</div>`;
    }
  } else {
    var pages = [];
    pages.push(1);
    for (var i = currentPage - 1; i <= currentPage + 1; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    for (var i = 0; i < pages.length; i++) {
      if (i > 0 && pages[i] - pages[i - 1] > 1) {
        up_page += `<div class="dots">...</div>`;
      }
      const activeClass = pages[i] === currentPage ? "active" : "";
      up_page += `<div class="page ${activeClass}">${pages[i]}</div>`;
    }
  }

  project__pagination.innerHTML = up_page;
}

function setupEvents(totalPages) {
  const pages = document.querySelectorAll(".page");

  pages.forEach((pageEl) => {
    pageEl.addEventListener("click", () => {
      currentPage = Number(pageEl.innerText);
      renderCurrentPage();
    });
  });

  setupButtons(totalPages);
}

function setupButtons(totalPages) {
  document.getElementById("first").disabled =
    currentPage === 1 || currentPage === 2;
  document.getElementById("prev").disabled = currentPage === 1;

  document.getElementById("next").disabled = currentPage === totalPages;
  document.getElementById("last").disabled =
    currentPage === totalPages || currentPage === totalPages - 1;

  document.getElementById("first").onclick = () => {
    currentPage = 1;
    renderCurrentPage();
  };

  document.getElementById("prev").onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderCurrentPage();
    }
  };

  document.getElementById("next").onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderCurrentPage();
    }
  };

  document.getElementById("last").onclick = () => {
    currentPage = totalPages;
    renderCurrentPage();
  };
}

function getItemsPerPage() {
  const width = window.innerWidth;

  if (width > 1024) return 6;
  if (width > 640) return 4;
  return 2;
}

var currentPage = 1;
var itemsPage = 6;

function renderCurrentPage() {
  itemsPage = getItemsPerPage();

  const totalPages = Math.ceil(projectsList.length / itemsPage);

  const start = (currentPage - 1) * itemsPage;
  const end = start + itemsPage;
  const currentItems = projectsList.slice(start, end);

  renderProjects(currentItems);
  renderPagination(totalPages, currentPage);
  setupEvents(totalPages);
}

renderCurrentPage();

window.addEventListener("resize", () => {
  renderCurrentPage();
});
