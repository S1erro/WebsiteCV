import React from 'react';
import {Routes, Route} from "react-router-dom";
import MainPage from "../pages/main-page";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/main-page" element={<MainPage/>}/>
        </Routes>
    );
};

export default AppRouter;