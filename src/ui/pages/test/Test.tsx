import React, { Fragment, useState } from 'react';
import styles from "./Test.module.css";
import SuperButton from "../../components/SuperButton/SuperButton";
import SuperCheckbox from "../../components/SuperCheckbox/SuperCheckbox";
import SuperInputText from "../../components/SuperInputText/SuperInputText";
import { authAPI } from '../../../dall/AuthAPI';
import { v1 } from 'uuid';

function Test() {
    const [response, setResponse] = useState<string>();
    const [error, setError] = useState<boolean>(false);

    const tryCatch = async(promise: Promise<any>) => {
        try{
            const response = await promise;
            const data = await response.data;
            setError(false);
            setResponse(JSON.stringify(data));

        } catch(err: any) {
            if(err.response) {
                setError(true);
                setResponse(JSON.stringify(err.response.data.error));
            } else {
                setError(true);
                setResponse(err.message);
            }
        }
    }

    const getLoginResponse = async () => {
        tryCatch(authAPI.login("nya-admn@nya.nya", "1qazxcvBG", true));
    }

    const getRegistrationResponse = async () => {
        tryCatch(authAPI.registration("nya-admin@nya2000.nya", "1qazxcBG"));
    }

    const getForgotResponse = async () => {
        tryCatch(authAPI.forgot("blablsa20@nya.nya"));
    }

    const getMeResponse = async () => {
        tryCatch(authAPI.getMe());
    }

    const getUpdateUserResponse = async () => {
        tryCatch(authAPI.updateUser("new name", "https//avatar-url.img"));
    }

    const getLogoutResponse = async () => {
        tryCatch(authAPI.logOut());
    }

    const getNewPasswordResponse = async () => {
        tryCatch(authAPI.setPassword("token", "password"));
    }

    return (
        <div className={styles.wrapper}>
            <h1>Components List</h1>

            <h3>SuperButton: </h3>
            <SuperButton>Click</SuperButton>
            <h3>SuperCheckbox: </h3>
            <SuperCheckbox className={styles.checkbox}> checkbox</SuperCheckbox>
            <h3>SuperInputText: </h3>
            <SuperInputText />

            {<ResponseButtons
                getLoginResponse={getLoginResponse}
                getRegistrationResponse={getRegistrationResponse}
                getMeResponse={getMeResponse}
                getUpdateUserResponse={getUpdateUserResponse}
                getLogoutResponse={getLogoutResponse}
                getForgotResponse={getForgotResponse}
                getNewPasswordResponse={getNewPasswordResponse}
            />}

            <div className={error ? styles.error : ""}>{response}</div>
        </div>
    );
}



export function ResponseButtons(props: any) {
    const responseButtons = [
        {id: v1(), callBack: props.getLoginResponse, name: 'GET_LOGIN'},
        {id: v1(), callBack: props.getMeResponse, name: 'GET_ME'},
        {id: v1(), callBack: props.getRegistrationResponse, name: 'GET_REGISTRATION'},
        {id: v1(), callBack: props.getUpdateUserResponse, name: 'GET_UPDATE_USER'},
        {id: v1(), callBack: props.getLogoutResponse, name: 'GET_LOGOUT'},
        {id: v1(), callBack: props.getForgotResponse, name: 'GET_FORGOT_PASSWORD'},
        {id: v1(), callBack: props.getNewPasswordResponse, name: 'GET_NEW_PASSWORD'},
    ];

    return (
        <Fragment>
            <h3>ResponseButtons: </h3>
            {responseButtons.map(btn => <SuperButton key={btn.id} onClick={btn.callBack}>{btn.name}</SuperButton>)}
        </Fragment>
    );
}



export default Test;