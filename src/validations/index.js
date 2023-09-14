import * as yup from "yup";

export const validateContactForm = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Provided email is not valid")
    .required("Please enter your email"),
  subject: yup.string().required("Please enter The subject of your email"),
  country: yup.string().required("Please select your country"),
  inquiry: yup.string().required("Please select your country"),
});
