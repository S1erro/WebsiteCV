import './App.css';
import AppRouter from "./Components/AppRouter";
import Navbar from "./Components/Navbar";
import React from "react";
function App() {
    return (
        <div className="App">
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;
