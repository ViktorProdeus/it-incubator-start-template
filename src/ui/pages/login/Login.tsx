import React from 'react';
import styles from './Login.module.css';
import { useFormik } from "formik";
import Form from "../../components/Form/Form";
import { fields, initialValues, validationSchema } from "./LoginFormikData";


const Login = () => {

    const formik = useFormik({
        initialValues,
        validationSchema,

        onSubmit: (values) => {
            console.log(formik.values.checkbox)
            console.log(values.password)
            console.log(values.email)
            alert('thank for you message');
            formik.setSubmitting(false);
            formik.resetForm();
        }
    });

    return (
        <div className={styles.wrapper}>

            <Form
                title={"Login"}
                formik={formik}
                fields={fields}
            />

        </div>
    );
};


export default Login;