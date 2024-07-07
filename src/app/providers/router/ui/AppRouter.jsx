import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from "../../../../pages/mainPage/main-page";
import ProjectsPage from "../../../../pages/projectsPage/projects-page";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/main-page" element={<MainPage/>}/>
            <Route path="/projects-page" element={<ProjectsPage/>}/>
            <Route path="/main-page" element={<MainPage/>}/>
            <Route path="/main-page" element={<MainPage/>}/>
            <Route path="/main-page" element={<MainPage/>}/>
        </Routes>
    );
};

export default AppRouter;