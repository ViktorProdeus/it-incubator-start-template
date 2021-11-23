import React from 'react';
import styles from './Login.module.css';
import { useFormik } from "formik";
import Form from "../../components/Form/Form";
import { fieldsLogin, initialValuesLogin, validationSchemaLogin } from "./LoginFormikData";


const Login = () => {

    const formikLogin = useFormik({
        initialValues: initialValuesLogin,
        validationSchema: validationSchemaLogin,

        onSubmit: (values) => {
            console.log(formikLogin.values.checkbox)
            console.log(values.password)
            console.log(values.email)
            alert('thank for you message');
            formikLogin.setSubmitting(false);
            formikLogin.resetForm();
        }
    });

    return (
        <div className={styles.wrapper}>

            <Form
                title={"Sign in"}
                formik={formikLogin}
                fields={fieldsLogin}
                buttonName={"Login"}
            />

        </div>
    );
};


export default Login;