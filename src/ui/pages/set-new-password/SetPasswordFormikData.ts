import * as Yup from "yup";

export const initialValuesSetPassword = {
    password: "",
};

export const validationSchemaSetPassword = Yup.object().shape({
    password: Yup.string()
        .required("Please enter password")
        .min(7, "Must be more than 7 characters"),
});

export const fieldsSetPassword = [
    {type: "password", title: "Password", name: "password"},
];