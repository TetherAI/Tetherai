const Yup = require("yup")

exports.schema = Yup.object().shape({
    email: Yup.string()
        .email("incorrect email format")
        .required("email field is required"),
    password: Yup.string()
        .min(8, "password must be at least 8 characters")
        .max(255, "maximum password is 255 characters")
        .required("password field is required"),
    confirmPassword: Yup.string()
        .required("confirm password field is required")
        .oneOf([Yup.ref("password"), null], "password and confirm are not match"),
})
