import React from 'react';
import classes from "./MenuButton.module.scss"

const MenuButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.menuBtn}>
            {children}
        </button>
    );
};

export default MenuButton;