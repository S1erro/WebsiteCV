import {AppRouter} from "./providers/router";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {Navbar} from "widgets/Navbar";
import "./styles/index.scss"

function App() {
    const {theme} = useTheme();

    return (
        <div className={`App ${theme}`}>
            <Navbar />
            <AppRouter />
        </div>
    );
}

export default App;
