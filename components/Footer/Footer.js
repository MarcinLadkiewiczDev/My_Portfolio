import "./footer.css";
import { Button } from "../Button/button";

export const Footer = () =>`
<h2>Contact</h2>
<div>
${Button("/public/icons/BW_Facebook_2_glyph_svg-128.webp", "Facebook")}
${Button("/public/icons/BW_Linkedin_glyph_svg-128.webp", "LinkedIn")}
${Button("/public/icons/Instagram_glyph_svg-128.webp", "Instagram")}
${Button("/public/icons/github_logo.jpeg", "GitHub")}
</div>
`;