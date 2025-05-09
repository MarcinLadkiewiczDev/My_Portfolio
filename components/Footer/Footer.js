import "./footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
<h2>Find Me</h2>
<div>
<a href="https://www.linkedin.com/in/marcin-ladkiewicz-026596306/" target="_blank" rel="noopener noreferrer">
${Button("/icons/BW_Linkedin_glyph_svg-128.webp", "LinkedIn")}
</a>
<a href="https://www.instagram.com/martinviciouscircle/" target="_blank" rel="noopener noreferrer">
${Button("/icons/Instagram_glyph_svg-128.webp", "Instagram")}
</a>
<a href="https://github.com/MarcinLadkiewiczDev" target="_blank" rel="noopener noreferrer">
${Button("/icons/github_logo.jpeg", "GitHub")}
</a>
<a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer">
${Button("/icons/FontAwesome-Brands-Discord-icon.png", "Discord")}
</a>
</div>
`;
