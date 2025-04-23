import { Divider } from "../Divider/Divider";
import "../NavBar/navBar.css";

export const NavBar = () => `
<nav>
<a href="https://marcinladkiewicz.vercel.app/">
<h2>MLad</h2>
</a>
<ul>
    <li>
        <a href="#" id="homelink" class="underline">Home</a>
    </li>
    <li>
        <a href="#" id="projectslink" class="underline">Projects</a>
    </li>
    <li>
        <a href="#" id="aboutlink" class="underline">About Me</a>
    </li>
    <li>
        <button id="themeBtn">☀️</button>
    </li>
</ul>
</nav>
`;

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "🌑") {
    themeBtn.innerText = "☀️";
  } else {
    themeBtn.innerText = "🌑";
  }
};
