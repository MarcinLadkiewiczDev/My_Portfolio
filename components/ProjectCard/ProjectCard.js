import "./projectCard.css";

export const ProjectCard = (project) => `
<div class="project-card">
<img src="${project.image}" alt="${project.title}">
<div class="header">
<h2>${project.title}</h2>
<div>
<a href="${project.github} target="_blank">
<img src="public/icons/github_logo.jpeg" alt="GitHub icon" class="cardlogo">
</a>
<a href="${project.link}" target="_blank">
<img src="public/icons/hyperlink_icon.jpeg" alt="link icon" class="cardlogo">
</a>
</div>
</div>

<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech.join(" - ")}</p>
</div>
</div>
`;
