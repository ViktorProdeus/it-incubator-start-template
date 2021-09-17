import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../routes/Routes";
import s from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={s.nav}>
            <div className={s.navItem}>
                <NavLink className={s.link} activeClassName={s.activeLink} to={PATH.TEST}>Test</NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink className={s.link} activeClassName={s.activeLink} to={PATH.PROFILE}>Profile</NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink className={s.link} activeClassName={s.activeLink} to={PATH.LOGIN}>Login</NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink className={s.link} activeClassName={s.activeLink} to={PATH.SET_PAS}>create pass</NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink className={s.link} activeClassName={s.activeLink} to={PATH.REGISTRATION}>Registration</NavLink>
            </div>
            <div className={s.navItem}>
                <NavLink className={s.link} activeClassName={s.activeLink} to={PATH.RESTORE_PASS}>restore pass</NavLink>
            </div>
        </nav>
    );
};

export default Navigation;