import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Error404.module.css";

const Error404 = () => (
    <div className={s.errorMessage}>
        404 Page not found! <span>Please return to</span>

        <NavLink className={s.link} to="/"> start page</NavLink>
    </div>
);

export default Error404;
