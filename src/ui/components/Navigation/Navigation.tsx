import React from 'react';
import { NavLink } from "react-router-dom";
import { PATH } from "../../routes/Routes";
import s from "./Navigation.module.css";
import { v1 } from 'uuid';

const links = [
    {id: v1(), path: PATH.TEST, page: 'Test'},
    {id: v1(), path: PATH.PROFILE, page: 'Profile'},
    {id: v1(), path: PATH.LOGIN, page: 'Login'},
    {id: v1(), path: PATH.SET_NEW_PASSWORD, page: 'SetNewPassword'},
    {id: v1(), path: PATH.REGISTRATION, page: 'Registration'},
    {id: v1(), path: PATH.FORGOT, page: 'Forgot'},
];

const Navigation = () => {
    return (
        <nav className={s.nav}>
            {
                links.map(link => <div key={link.id} className={s.navItem}>
                    <NavLink className={s.link} activeClassName={s.activeLink} to={link.path}>{link.page}</NavLink>
                </div>)
            }
        </nav>
    );
};

export default Navigation;