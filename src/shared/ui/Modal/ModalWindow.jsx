import React, {useState} from 'react';
import Modal from 'react-modal';
import cls from './ModalWindow.module.scss';
import MenuButton from "../MenuButton/MenuButton";
import vkSvg from 'shared/assets/contactIcons/vk-svg.svg';
import tgSvg from 'shared/assets/contactIcons/telegram-svg.svg';
import gitSvg from 'shared/assets/contactIcons/github-svg.svg';
import hhIcon from 'shared/assets/contactIcons/hh-icon.svg';


const ModalWindow = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div>
            <MenuButton
                onClick={() => {
                    setModalIsOpen(true);
                }}
            >
                Контакты
            </MenuButton>
            <Modal
                className={cls.ModalWindow}
                overlayClassName={cls.ModalOverlay}
                isOpen={modalIsOpen}
                ariaHideApp={false}
                onRequestClose={() => {
                    setModalIsOpen(false)
                }}
            >
                <div className={cls.Contacts}>
                    <h2>Контактные данные:</h2>
                    <p>Телефон: +7 977 906-65-19</p>
                    <p>Почта: aslan4ik39@gmail.com</p>
                </div>

                <div className={cls.links}>
                    <a
                        className={cls.ModalLink}
                        style={{"background": `url(${vkSvg})`}}
                        href="https://vk.com/s1erro"
                        target="_blank"
                        rel="noopener noreferrer"
                    >ВКонтакте</a>

                    <a
                        className={cls.ModalLink}
                        style={{"background": `url(${tgSvg})`}}
                        href="https://t.me/sierro_err"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Telegram</a>

                    <a
                        className={cls.ModalLink}
                        style={{"background": `url(${gitSvg})`}}
                        href="https://github.com/S1erro"
                        target="_blank"
                        rel="noopener noreferrer"
                    >GitHub</a>

                    <a
                        className={cls.ModalLink}
                        style={{"background": `url(${hhIcon})`}}
                        href="https://hh.ru/resume/8c79669cff0d41c8af0039ed1f53335477506f"
                        target="_blank"
                        rel="noopener noreferrer"
                    >hh.ru</a>
                </div>
            </Modal>
        </div>
    );
};

export default ModalWindow;