import React from 'react'
import { useFormik } from "formik";
import styles from "../login/Login.module.css";
import Form from "../../components/Form/Form";
import { fieldsForgot, initialValuesForgot, validationSchemaForgot } from "./ForgotFormikData";

const Forgot = () => {
    const formikForgot = useFormik({
        initialValues: initialValuesForgot,
        validationSchema: validationSchemaForgot,

        onSubmit: (values) => {
            console.log(values.email)
            alert('thank for you message');
            formikForgot.setSubmitting(false);
            formikForgot.resetForm();
        }
    });

    return (
        <div className={styles.wrapper}>

            <Form
                title={"Forgot your password"}
                formik={formikForgot}
                fields={fieldsForgot}
                buttonName={"Send"}
            />

        </div>
    );
};

export default Forgot
