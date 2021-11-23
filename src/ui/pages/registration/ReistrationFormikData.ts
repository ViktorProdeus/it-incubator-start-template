import * as Yup from "yup";

export const initialValuesRegistration = {
    email: "",
    password: "",
    newPassword: "",
};

export const validationSchemaRegistration = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
    password: Yup.string()
        .required("Please enter password")
        .min(7, "Must be more than 7 characters"),
    newPassword: Yup.string()
        .required("Please enter confirm password")
        .min(7, "Must be more than 7 characters"),

});

export const fieldsRegistration = [
    {type: "email", title: "Email", name: "email"},
    {type: "password", title: "Password", name: "password"},
    {type: "password", title: "Confirm password", name: "newPassword"},
];