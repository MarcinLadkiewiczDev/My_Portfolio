import "./button.css";

export const Button = (icon, text) => `
    <button class="my-btn">
    <img src="${icon}" alt="${text}">
    <h4>${text}</h4>
    </button>
    `;
