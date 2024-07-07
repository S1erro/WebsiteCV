import AppRouter from "./providers/router/ui/AppRouter";
import Navbar from "../widgets/Navbar/ui/Navbar";
import React, {useState} from "react";
import "./styles/index.scss"

function App() {
    function changeTheme() {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    const Theme = {
        LIGHT: 'light',
        DARK: 'dark'
    };

    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT

    const [theme, setTheme] = useState(currentTheme)

    return (
        <div className={`App ${theme}`}>
            <button onClick={changeTheme}>Тема</button>
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
