import * as Yup from "yup";

export const initialValuesLogin = {
    email: "",
    password: "",
    checked: [],
    checkbox: false
};

export const validationSchemaLogin = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
    password: Yup.string()
        .required("Please enter password")
        .min(7, "Must be more than 7 characters"),
    // checkbox: Yup.bool()
    //     .oneOf([true], 'checkbox is required')
});

export const fieldsLogin = [
    {type: "email", title: "Email", name: "email"},
    {type: "password", title: "Password", name: "password"},
    {type: "checkbox", name: "checkbox"}
];