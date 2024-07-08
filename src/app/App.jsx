import {AppRouter} from "./providers/router";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {Navbar} from "widgets/Navbar";
import "./styles/index.scss"

function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`App ${theme}`}>
            <Navbar func={toggleTheme}/>
            <AppRouter/>
        </div>
    );
}

export default App;
