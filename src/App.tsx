import './App.css'

import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    )
}

export default App;
