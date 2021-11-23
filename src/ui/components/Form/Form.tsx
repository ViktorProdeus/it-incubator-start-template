import { Field } from "./Field";
import SuperButton from "../SuperButton/SuperButton";
import React from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../../routes/Routes";
import styles from "./Form.module.css";

type FormType = {
    title: string
    formik: any
    fields: { type: string, title?: string, name: string } []
    buttonName: string
}
const Form = (props: FormType) => {
    return (
        <form className={styles.form} noValidate onSubmit={props.formik.handleSubmit}>
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


            {props.title === "Sign in" && <div className={styles.link}>
                <NavLink to={PATH.FORGOT}>Forgot</NavLink>
            </div>}

            {props.title !== "Sign in" && <><br/><br/></>}
            <SuperButton className={styles.btn} type="submit" disabled={props.formik.isSubmitting}>
                {props.buttonName}
            </SuperButton>

            {props.title === "Sign in" && <div className={styles.link}>
                <NavLink to={PATH.REGISTRATION}>Sign Up</NavLink>
            </div>}

            {props.title !== "Sign in" && <div className={styles.link}>
                <NavLink to={PATH.LOGIN}>Sign in</NavLink>
            </div>}

        </form>
    );
};

export default Form;