import "./home.css";
import { cleanPage } from "../utils/cleanPage";

export const Home = () =>{
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
        <section class="home">
        <p>Hey! I'm</p>
        <h1>Marcin Ladkiewicz</h1>
        <p>I am a dedicated nurse with a passion for continuous learning and personal growth.
        Currently, I am expanding my horizons by studying a degree in Cross-Platform Application Development and pursuing a Masters in Full-Stack Web Development.
        I have a deep love for music of all kinds, with a particular fondness for rock and hip-hop.
        Creativity drives me, and I enjoy building digital projects and sharing them with the world through the internet
        My goal is to merge my technical skills with my passion for innovation, creating solutions that make a difference.</p>
        <a href="mailto:marcin.ladkiewicz@gmail.com">Say Hi! -></a>
        </section>
    `
}