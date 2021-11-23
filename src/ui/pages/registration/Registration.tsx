import React from 'react';
import { useFormik } from "formik";

import styles from "../login/Login.module.css";
import Form from "../../components/Form/Form";
import { fieldsRegistration, initialValuesRegistration, validationSchemaRegistration } from "./ReistrationFormikData";

function Registration() {
    const formikRegistration = useFormik({
        initialValues: initialValuesRegistration,
        validationSchema: validationSchemaRegistration,

        onSubmit: (values) => {
            console.log(values.password)
            console.log(values.newPassword)
            console.log(values.email)
            alert('thank for you message');
            formikRegistration.setSubmitting(false);
            formikRegistration.resetForm();
        }
    });

    return (
        <div className={styles.wrapper}>

            <Form
                title={"Sign Up"}
                formik={formikRegistration}
                fields={fieldsRegistration}
                buttonName={"Register"}
            />

        </div>
    );
}

export default Registration;
