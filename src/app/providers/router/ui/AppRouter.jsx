import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from "pages/mainPage/mainPage";
import ProjectsPage from "pages/projectsPage/projectsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="*" element={<MainPage />} />
            <Route path="/main-page" element={<MainPage />}/>
            <Route path="/projects-page" element={<ProjectsPage />}/>
            {/*<Route path="/contacts" element={<ModalWindow />}/>*/}
            {/*<Route path="/main-page" element={<MainPage/>}/>*/}
            {/*<Route path="/main-page" element={<MainPage/>}/>*/}
        </Routes>
    );
};

export default AppRouter;