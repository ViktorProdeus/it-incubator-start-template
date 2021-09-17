import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Test from "../pages/test/Test";
import Error404 from "../pages/eror404/Error404";
import RestorePass from '../pages/restore-pass/RestorePass';
import SetPass from "../pages/set-pass/SetPass";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Profile from "../pages/profile/Profile";

export const PATH = {
    TEST: '/test',
    LOGIN: '/login',
    RESTORE_PASS: '/restore-pass',
    SET_PAS: '/set-pass',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    MAIN: '/main',
    // add paths
}

const Routes = () => (
    <>
        <Switch>
            <Route path={'/'} exact render={() => <Redirect to={PATH.TEST}/>}/>


            <Route path={PATH.TEST} render={() => <Test/>}/>
            <Route path={PATH.LOGIN} render={() => <Login/>}/>
            <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
            <Route path={PATH.RESTORE_PASS} render={() => <RestorePass/>}/>
            <Route path={PATH.SET_PAS} render={() => <SetPass/>}/>
            <Route path={PATH.PROFILE} render={() => <Profile/>}/>

            <Route render={() => <Error404/>}/>

        </Switch>
    </>
);

export default Routes;