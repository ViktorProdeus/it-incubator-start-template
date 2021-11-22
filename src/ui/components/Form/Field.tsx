import styles from "../../pages/login/Login.module.css";
import React from "react";

export const Field = (props: {title?: string, type: string, name: string, formik: any }) => {
    return (
        <div className={styles.fieldWrap}>
            <label>
                {props.type !== "checkbox" && <span>{props.title}</span>}
                {
                    props.type !== "checkbox" ?
                        <input
                            id={props.name}
                            type={props.type}
                            name={props.name}
                            onChange={props.formik.handleChange}
                            onBlur={props.formik.handleBlur}
                            value={props.formik.values[props.name]}
                        />
                        :
                        <input
                            id={props.name}
                            type={props.type}
                            name={props.name}
                            onChange={props.formik.handleChange}
                            checked={props.formik.values[props.type]}
                            value={props.formik.values.checked}
                        />
                }
                {props.type === "checkbox" && <span className={styles.checkbox}>rememberMe</span>}
            </label>

            {props.formik.touched[props.name] && props.formik.errors[props.name] ? (
                <span className={styles.error}>{props.formik.errors[props.name]}</span>
            ) : null}
        </div>
    );
}