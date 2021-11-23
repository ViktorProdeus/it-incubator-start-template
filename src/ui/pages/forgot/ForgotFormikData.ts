import * as Yup from "yup";

export const initialValuesForgot = {
    email: "",
};

export const validationSchemaForgot = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
});

export const fieldsForgot = [
    {type: "email", title: "Email", name: "email"},
];