import MenuButton from "shared/ui/MenuButton/MenuButton";
import { Link } from "react-router-dom";
import cls from './Navbar.module.scss';
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import ThemeButton from "shared/ui/ThemeBtn/ThemeButton";
import ModalWindow from "../../../shared/ui/Modal/ModalWindow";

const Navbar = () => {
    const { toggleTheme } = useTheme();

    return (
    <header>
        <div className={cls.logo}>
            Асланов А.Ф.
        </div>
        <nav className={cls.Navbar}>
            <ul className={cls.Navbar__menu}>
                <li>
                    <Link to="/main-page">
                        <MenuButton>Главная</MenuButton>
                    </Link>
                </li>
                <li>
                    <Link to="/projects-page">
                        <MenuButton>Проекты</MenuButton>
                    </Link>
                </li>
                {/*<li>*/}
                {/*    <Link to="/cv-page">*/}
                {/*        <MenuButton>Резюме</MenuButton>*/}
                {/*    </Link>*/}
                {/*</li>*/}
                <li>
                    <ModalWindow>
                        Контакты
                    </ModalWindow>
                </li>
                <li>
                    <ThemeButton
                        onClick={toggleTheme}
                    />
                </li>
            </ul>
        </nav>
    </header>);
};

export default Navbar;