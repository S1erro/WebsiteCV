import React from 'react';
import cls from "./mainPage.module.scss"

const MainPage = () => {
    return (
        <div>
            <h1 className={cls.h1Header}>
                Всем привет! <br/>
                Меня зовут Аслан, <br/>
                Я начинающий frontend-разработчик!
            </h1>
        </div>
    );
};

export default MainPage;