import React from 'react';
import cls from "./ThemeButton.module.scss"

const ThemeButton = ({children, onClick, ...props}) => {
    return (
        <button className={cls.themeBtn} onClick={onClick}>
            {children}
        </button>
    );
};

export default ThemeButton;