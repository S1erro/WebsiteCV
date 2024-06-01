import React from 'react';
import MyButton from "./UI/MyButton/MyButton";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (<header className="Navbar">
        <ul className="Navbar__menu">
            <li className="Navbar__btn">
                <Link to="/main-page">
                    <MyButton>Главная</MyButton>
                </Link>
            </li>
            <li className="Navbar__btn">
                <MyButton>Проекты</MyButton>
            </li>
            <li className="Navbar__btn">
                <MyButton>Навыки</MyButton>
            </li>
            <li className="Navbar__btn">
                <MyButton>Резюме</MyButton>
            </li>
            <li className="Navbar__btn">
                <MyButton>Контакты</MyButton>
            </li>
        </ul>
    </header>);
};

export default Navbar;