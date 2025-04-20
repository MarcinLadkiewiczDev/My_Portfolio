import "./footer.css";
import { Button } from "../Button/button";

export const Footer = () => `
<h2>Find Me</h2>
<div>
<a href="https://www.linkedin.com/in/marcin-ladkiewicz-026596306/" target="_blank" rel="noopener noreferrer">
${Button("/public/icons/BW_Linkedin_glyph_svg-128.webp", "LinkedIn")}
</a>
<a href="https://www.instagram.com/martinviciouscircle/" target="_blank" rel="noopener noreferrer">
${Button("/public/icons/Instagram_glyph_svg-128.webp", "Instagram")}
</a>
<a href="https://github.com/MarcinLadkiewiczDev" target="_blank" rel="noopener noreferrer">
${Button("/public/icons/github_logo.jpeg", "GitHub")}
</a>
</div>
`;
