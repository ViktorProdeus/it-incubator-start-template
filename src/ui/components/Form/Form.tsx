import { Field } from "./Field";
import SuperButton from "../SuperButton/SuperButton";
import styles from "../../pages/login/Login.module.css";
import React from "react";

type FormType = {
    title: string
    formik: any
    fields: { type: string, title?: string, name: string } []
}
const Form = (props: FormType) => {
    return (
        <form noValidate onSubmit={props.formik.handleSubmit}>
            <h2>{props.title}</h2>
            {
                props.fields
                    .map((field, index) => {
                        return (
                            <Field
                                key={index}
                                formik={props.formik}
                                type={field.type}
                                name={field.name}
                                title={field.title}
                            />)
                    })
            }

            <SuperButton className={styles.btn} type="submit" disabled={props.formik.isSubmitting}>
                Submit
            </SuperButton>
        </form>
    );
};

export default Form;