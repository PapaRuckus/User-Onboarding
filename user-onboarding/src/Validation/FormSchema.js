import * as yup from "yup";

const FormSchema = yup.object().shape({
  fname: yup
    .string()
    .trim()
    .required("First name is required!")
    .min(2, "First name must be longer than 2 characters"),
  lname: yup
    .string()
    .trim()
    .required("Last name is required!")
    .min(2, "Last name must be longer than 2 characters"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Must be 6 characters long"),
  tos: yup.boolean().oneOf([true], "You must agree to the terms"),
});

export default FormSchema;
