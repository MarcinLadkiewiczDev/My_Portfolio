import "./About.css";
import { cleanPage } from "../utils/cleanPage";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `<section class="aboutme">
    <img src="/profilepicCircular.png" alt="me"/>
    <p class="description">I'm a <span>passionate and energetic person with a deep love for gaming, music, and hanging out with friends.</span>
      Whether it's exploring immersive game worlds, skating through the city, or spending time with my friends, <span>I thrive on experiences that keep me active and inspired.</span>
      Music is a big part of my life—I enjoy all genres, with a special connection to rock and hip hop for their rhythm and storytelling.
      Naturally social and outgoing, <span>I enjoy connecting with others, sharing ideas, and creating memorable moments. </span>
      My diverse interests and <span>open-minded approach</span> help me bring <span>creativity, adaptability, and positive energy to everything I do.</span></p>
    </section>
  `;
};
