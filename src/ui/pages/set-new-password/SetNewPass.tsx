import React from 'react'
import { useFormik } from "formik";
import styles from "../login/Login.module.css";
import Form from "../../components/Form/Form";
import { fieldsSetPassword, initialValuesSetPassword, validationSchemaSetPassword } from "./SetPasswordFormikData";

const SetNewPass = () => {
    const formikSetPassword = useFormik({
        initialValues: initialValuesSetPassword,
        validationSchema: validationSchemaSetPassword,

        onSubmit: (values) => {
            console.log(values.password)
            alert('thank for you message');
            formikSetPassword.setSubmitting(false);
            formikSetPassword.resetForm();
        }
    });

    return (
        <div className={styles.wrapper}>

            <Form
                title={"Create new password"}
                formik={formikSetPassword}
                fields={fieldsSetPassword}
                buttonName={"Create"}
            />

        </div>
    );
}


export default SetNewPass

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз