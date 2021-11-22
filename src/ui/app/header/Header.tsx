import React from 'react';
import s from './Header.module.css';
import Navigation from "../../components/Navigation/Navigation";

const Header = () => {
    return (
        <header className={s.header}>
            header
            <Navigation />
        </header>
    );
};

export default Header;