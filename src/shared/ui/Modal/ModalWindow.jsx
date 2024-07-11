import React, {useState} from 'react';
import Modal from 'react-modal';
import cls from './ModalWindow.module.scss';
import MenuButton from "../MenuButton/MenuButton";

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
                isOpen={modalIsOpen}
                onRequestClose={() => {
                    setModalIsOpen(false)
                }}
            >
                <div>
                    Привет!
                </div>
            </Modal>
        </div>
    );
};

export default ModalWindow;