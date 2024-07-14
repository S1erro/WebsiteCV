import React from 'react';
import cls from "./projectsPage.module.scss"

const ProjectsPage = () => {
    return (
        <div className={cls.MainContent}>
            <div className={cls.ContentBlock}>
                Project 1
            </div>

            <div className={cls.ContentBlock}>
                Project 2
            </div>

            <div className={cls.ContentBlock}>
                Project 3
            </div>
        </div>
    );
};

export default ProjectsPage;