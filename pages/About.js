import "./About.css";
import { cleanPage } from "../utils/cleanPage";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `<section class="aboutme">
    <img src="public/profilepicCircular.png" alt="me"/>
    <div class="bento">
    <p>I'm a passionate and energetic individual with a deep love for gaming, music, and the outdoors.
      Whether it's exploring immersive game worlds, skating through the city, or spending time in nature, I thrive on experiences that keep me active and inspired.
      Music is a big part of my life—I enjoy all genres, with a special connection to rock and hip hop for their rhythm and storytelling.
      Naturally social and outgoing, I enjoy connecting with others, sharing ideas, and creating memorable moments.
      My diverse interests and open-minded approach help me bring creativity, adaptability, and positive energy to everything I do.</p>
    <ul>
    <li></li>
    <li></li>
    <li></li>
    </ul>
    </div>
    </section>
  `;
};
