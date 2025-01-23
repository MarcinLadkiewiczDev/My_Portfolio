import "../NavBar/navBar.css";

export const NavBar = () =>`
<nav>
<h2>Marcin Ladkiewicz</h2>
<ul>
    <li>
        <a href="#" id="homelink">Home</a>
    </li>
    <li>
        <a href="#" id="projectslink">Projects</a>
    </li>
    <li>
        <button id="themeBtn">☀</button>
    </li>
</ul>
</nav>
`;

export const changeTheme = () =>{
    const themeBtn = document.querySelector("#themeBtn");
    themeBtn.addEventListener("click", () =>{
    document.body.classList.toggle("light");
    changeText();
    })
}


export const changeText = () =>{
    const themeBtn = document.querySelector("#themeBtn");
    if(themeBtn.innerText === "🌑"){
        themeBtn.innerText = "☀️";
    } else {
        themeBtn.innerText = "🌑";
    }
};

