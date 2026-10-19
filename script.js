const portfolioUrl = "https://example.com";

const navLinks = [
    {
        name: "Home",
        url: "#home"
    },
    {
        name: "Portfolio",
        url: portfolioUrl
    },
    {
        name: "GitHub",
        url: "https://github.com/arslansahil850-alt/"
    }
];

const footerLinks = [
    {
        name: "Home",
        url: "#home"
    },
    {
        name: "Portfolio",
        url: portfolioUrl
    },
    {
        name: "GitHub",
        url: "https://github.com/arslansahil850-alt/"
    }
];

const projects = [
    {
        name: "Website Design 1",
        description: "A responsive landing page with a modern interface and design.",
        technologies: "HTML • CSS",
        category: "HTML & CSS",
        live: "https://webpage-design-1.netlify.app/",
        github: "https://github.com/arslansahil850-alt/Website-Design-1/"
    },
    {
        name: "BLOGO Static Page",
        description: "A responsive Blogo landing page with a modern interface.",
        technologies: "HTML • CSS",
        category: "HTML & CSS",
        live: "https://blogo-static-page.netlify.app/",
        github: "https://github.com/arslansahil850-alt/Blogo-Static-Page/"
    },
    {
        name: "BLOGO Static Page2",
        description: "A responsive Blogo(2) landing page with a modern interface.",
        technologies: "HTML • CSS",
        category: "HTML & CSS",
        live: "https://blogo-static-page2.netlify.app/",
        github: "https://github.com/arslansahil850-alt/Blogo-Static-Page2/"
    },
    {
        name: "FOODIE Static Page",
        description: "A responsive FOODIE landing page with a modern interface.",
        technologies: "HTML • CSS",
        category: "HTML & CSS",
        live: "https://foodie-static-page.netlify.app/",
        github: "https://github.com/arslansahil850-alt/Foodie-Static-Page/"
    },
    {
        name: "DASHBOARD Static Page",
        description: "A responsive DASHBOARD UI landing page with a modern interface.",
        technologies: "HTML • CSS",
        category: "HTML & CSS",
        live: "https://dashboard-static-page.netlify.app/",
        github: "https://github.com/arslansahil850-alt/Dashboard-UI/"
    },
    {
        name: "SHOPORA Static Page",
        description: "A responsive SHOPORA landing page with a modern interface.",
        technologies: "HTML • CSS",
        category: "HTML & CSS",
        live: "https://shopora-static-page.netlify.app/",
        github: "https://github.com/arslansahil850-alt/Shopora-Static-Page/"
    },
    {
        name: "Modern ToDo",
        description: "A multi-function task management application.",
        technologies: "HTML • CSS • JavaScript",
        category: "JavaScript",
        live: "https://realistic-todo-app.netlify.app/",
        github: "https://github.com/arslansahil850-alt/Modern-ToDo-App/"
    },
    {
        name: "Calculator App",
        description: "A functional calculator built with JavaScript.",
        technologies: "HTML • CSS • JavaScript",
        category: "JavaScript",
        live: "https://calculator-app-by-arslan.netlify.app/",
        github: "https://github.com/arslansahil850-alt/Calculator-App/"
    },
    {
        name: "To-Do App",
        description: "A simple task management application.",
        technologies: "HTML • CSS • JavaScript",
        category: "JavaScript",
        live: "https://todo-app-by-arslan.netlify.app/",
        github: "https://github.com/arslansahil850-alt/To-Do-App/"
    },
    {
        name: "Quiz App",
        description: "An interactive quiz application with scoring.",
        technologies: "HTML • CSS • JavaScript",
        category: "JavaScript",
        live: "https://quiz-app-by-arslan.netlify.app/",
        github: "https://github.com/arslansahil850-alt/Quiz-App/"
    },
    {
        name: "Stopwatch App",
        description: "A responsive stopwatch with start, stop and reset controls.",
        technologies: "HTML • CSS • JavaScript",
        category: "JavaScript",
        live: "https://stopwatch-app-by-arslan.netlify.app/",
        github: "https://github.com/arslansahil850-alt/Stop-Watch/"
    },
    {
        name: "Weather App",
        description: "A weather application using an external API.",
        technologies: "HTML • CSS • JavaScript • API",
        category: "JavaScript",
        live: "https://weather-app-by-arslan.netlify.app/",
        github: "https://github.com/arslansahil850-alt/Weather-App/"
    },
    {
        name: "FOODIE.com",
        description: "A complete web project combining multiple technologies.",
        technologies: "HTML • CSS • JavaScript",
        category: "Web Projects",
        live: "https://foodie-website-by-arslan.netlify.app/",
        github: "https://github.com/arslansahil850-alt/FOODIE/"
    },
    {
        name: "Web Loaders",
        description: "A complete web project about CSS loaders combining multiple technologies.",
        technologies: "HTML • CSS • JavaScript",
        category: "Web Projects",
        live: "https://webloaders.netlify.app/",
        github: "https://github.com/arslansahil850-alt/Web-Loaders/"
    },
    {
        name: "Navbar Collections",
        description: "10 modern navbar designs — a collection of responsive, creative, and modern navigation bar concepts built with HTML, CSS, and JavaScript.",
        technologies: "HTML • CSS • JavaScript",
        category: "Web Projects",
        live: "https://navbar-collections.netlify.app/",
        github: "https://github.com/arslansahil850-alt/Navbars/"
    }
];

const navContainer = document.getElementById("navLinks");
const footerContainer = document.getElementById("footerLinksContainer");
const projectSearch = document.getElementById("projectSearch");
const filterButtons = document.getElementById("filterButtons");
const resultsCount = document.getElementById("resultsCount");
const noResults = document.getElementById("noResults");
const menuBtn = document.getElementById("menuBtn");

const categoryContainers = {
    "HTML & CSS": {
        section: document.getElementById("htmlCssCategory"),
        container: document.getElementById("htmlCssProjects")
    },
    "JavaScript": {
        section: document.getElementById("javascriptCategory"),
        container: document.getElementById("javascriptProjects")
    },
    "Web Projects": {
        section: document.getElementById("webProjectsCategory"),
        container: document.getElementById("webProjects")
    }
};

function createLink(link) {
    const external = link.url.startsWith("http");

    return `
        <a
            href="${link.url}"
            ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}
        >
            ${link.name}
        </a>
    `;
}

function displayNavLinks() {
    navContainer.innerHTML = navLinks.map(createLink).join("");
}

function displayFooterLinks() {
    footerContainer.innerHTML = footerLinks.map(createLink).join("");
}

function createProjectCard(project) {
    return `
        <article class="project-card">
            <div>
                <h4>${project.name}</h4>
                <p>${project.description}</p>
                <div class="project-tech">${project.technologies}</div>
            </div>
            <div class="project-links">
                <a href="${project.live}" target="_blank" rel="noopener noreferrer">
                    Live Demo
                </a>
                <a href="${project.github}" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </div>
        </article>
    `;
}

function displayProjects(projectList) {
    Object.values(categoryContainers).forEach(category => {
        category.container.innerHTML = "";
        category.section.style.display = "none";
    });

    projectList.forEach(project => {
        const category = categoryContainers[project.category];

        if (!category) {
            return;
        }

        category.container.insertAdjacentHTML(
            "beforeend",
            createProjectCard(project)
        );

        category.section.style.display = "block";
    });

    resultsCount.textContent =
        `${projectList.length} ${projectList.length === 1 ? "project" : "projects"} found`;

    noResults.style.display = projectList.length === 0 ? "block" : "none";
}

const categories = [
    "All",
    "HTML & CSS",
    "JavaScript",
    "Web Projects"
];

function createFilterButtons() {
    filterButtons.innerHTML = categories
        .map((category, index) => `
            <button
                type="button"
                class="filter-btn ${index === 0 ? "active" : ""}"
                data-filter="${category}"
            >
                ${category}
            </button>
        `)
        .join("");
}

let currentFilter = "All";

function filterProjects() {
    const searchValue = projectSearch.value.toLowerCase().trim();

    const filteredProjects = projects.filter(project => {
        const matchesCategory =
            currentFilter === "All" || project.category === currentFilter;

        const searchableText = `
            ${project.name}
            ${project.description}
            ${project.technologies}
            ${project.category}
        `.toLowerCase();

        return matchesCategory && searchableText.includes(searchValue);
    });

    displayProjects(filteredProjects);
}

filterButtons.addEventListener("click", event => {
    const button = event.target.closest(".filter-btn");

    if (!button) {
        return;
    }

    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    button.classList.add("active");
    currentFilter = button.dataset.filter;
    filterProjects();
});

projectSearch.addEventListener("input", filterProjects);

menuBtn.addEventListener("click", () => {
    const isOpen = navContainer.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

navContainer.addEventListener("click", event => {
    if (event.target.closest("a")) {
        navContainer.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation menu");
    }
});

document.getElementById("currentYear").textContent = new Date().getFullYear();

displayNavLinks();
displayFooterLinks();
createFilterButtons();
displayProjects(projects);
