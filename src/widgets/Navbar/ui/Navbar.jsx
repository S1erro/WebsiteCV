import React, {useState} from 'react';
import MyButton from "../../../shared/ui/MyButton/MyButton";
import {Link} from "react-router-dom";
import cls from './Navbar.module.scss';

const Navbar = () => {
    return (
    <header className={cls.Navbar}>
        <ul className={cls.Navbar__menu}>
            <li className={cls.Navbar__btn}>
                <Link to="/main-page">
                    <MyButton>Главная</MyButton>
                </Link>
            </li>
            <li className={cls.Navbar__btn}>
                <Link to="/projects-page">
                    <MyButton>Проекты</MyButton>
                </Link>
            </li>
            <li className={cls.Navbar__btn}>
                <MyButton>Навыки</MyButton>
            </li>
            <li className={cls.Navbar__btn}>
                <MyButton>Резюме</MyButton>
            </li>
            <li className={cls.Navbar__btn}>
                <MyButton>Контакты</MyButton>
            </li>
        </ul>
    </header>);
};

export default Navbar;