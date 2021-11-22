import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Test from "../pages/test/Test";
import Error404 from "../pages/eror404/Error404";
import Forgot from '../pages/forgot/Forgot';
import SetNewPass from "../pages/set-new-password/SetNewPass";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Profile from "../pages/profile/Profile";

export const PATH = {
    TEST: '/test',
    LOGIN: '/login',
    FORGOT: '/forgot',
    SET_NEW_PASSWORD: '/set-new-password',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    MAIN: '/app',
    // add paths
}

const Routes = () => (
    <>
        <Switch>
            <Route exact path={'/'} render={() => <Redirect to={PATH.TEST} />} />
            <Route exact path={PATH.TEST} render={() => <Test />} />
            <Route exact path={PATH.LOGIN} component={Login} />
            <Route exact path={PATH.REGISTRATION} render={() => <Registration />} />
            <Route exact path={PATH.FORGOT} render={() => <Forgot />} />
            <Route exact path={PATH.SET_NEW_PASSWORD} render={() => <SetNewPass />} />
            <Route exact path={PATH.PROFILE} render={() => <Profile />} />
            <Route render={() => <Error404 />} />

        </Switch>
    </>
);

export default Routes;