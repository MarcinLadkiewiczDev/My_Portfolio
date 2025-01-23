import './style.css'

import { changeTheme } from "../components/NavBar/NavBar";
import { linkPage } from "../utils/linkPage";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Divider } from "../components/Divider/Divider";

const header = document.querySelector("header");
header.innerHTML = NavBar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());