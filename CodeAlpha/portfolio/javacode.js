const projects = [
    {
        title: "Project 1",
        description: "This is the first project. Lorem ipsum dolor sit amet.",
        link: "https://github.com/your-username/project1"
    },
    {
        title: "Project 2",
        description: "This is the second project. consectetur adipiscing elit.",
        link: "https://github.com/your-username/project2"
    },
    // Add more projects as needed
];

function createProjectCard(project) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    const title = document.createElement("h2");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const link = document.createElement("a");
    link.textContent = "View on GitHub";
    link.href = project.link;

    projectCard.appendChild(title);
    projectCard.appendChild(description);
    projectCard.appendChild(link);

    return projectCard;
}

const projectsSection = document.getElementById("projects");

// Dynamically generate project cards and add them to the section
projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectsSection.appendChild(projectCard);
});
