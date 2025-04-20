import "./home.css";
import { cleanPage } from "../utils/cleanPage";
import { Button } from "../components/Button/Button";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
        <section class="home">
        <p>Hello World!!</p>
        <p>I'm</p>
        <h1>Marcin Ladkiewicz</h1>
        <p>I'm a full stack web developer who loves building clean, responsive websites and apps.
         I enjoy working across the stack—from front-end design to back-end logic—and bringing ideas to life with code.
          Always learning, always building.</p>
        <a href="mailto:marcin.ladkiewicz@gmail.com">
          ${Button(
            "./public/icons/icons8-dedos-señal-de-paz-50.png",
            "Say Hi!"
          )}
        </a>
        </section>
    `;
};
