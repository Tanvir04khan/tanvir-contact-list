import React from "react";
import { Formik, Form, FormikConsumer } from "formik";
import UserInput from "./UserInput";
import UserIputSelctcion from "./UserIputSelctcion";
import { Container } from "./Form.styled";
import * as yup from "yup";

const FormField = ({ theme, onToggleInputModal }) => {
  const validate = yup.object({
    firstName: yup
      .string()
      .max(15, "Must be 15 characters or less.")
      .required("Required."),
    lastName: yup
      .string()
      .max(15, "Must be 15 characters or less.")
      .required("Required"),
    email: yup.string().email("Email is invalid!").required("Required."),
    phoneNumber: yup
      .string()
      .max(10, "Must have 10 digits")
      .required("Required."),
    status: yup
      .string()
      .oneOf(["Active", "Inactive"], "Must be Active or Inactive."),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        status: "Select",
      }}
      validationSchema={validate}
      validateOnChange
      onSubmit={(values, onSubmitProps) => {
        console.log(values);
        onSubmitProps.resetForm();
        onSubmitProps.setSubmitting(false);
      }}
    >
      {(formik) => (
        <Container theme={theme}>
          {console.log(formik)}
          <div
            className="backdrop"
            onClick={() => {
              onToggleInputModal();
              formik.handleReset();
            }}
          ></div>
          <div className="form">
            <h1 className="header">Create Contact</h1>
            <Form>
              <UserInput
                label="First Name"
                name="firstName"
                type="text"
                theme={theme}
              />
              <UserInput
                label="Last Name"
                name="lastName"
                type="text"
                theme={theme}
              />
              <UserInput
                label="Email"
                name="email"
                type="email"
                theme={theme}
              />
              <UserInput
                label="Phone Number"
                name="phoneNumber"
                type="number"
              />
              <UserIputSelctcion
                label="Status"
                name="status"
                type="select"
                theme={theme}
              />
              <div className="btn">
                <button
                  type="button"
                  onClick={() => {
                    onToggleInputModal();
                    formik.handleReset();
                  }}
                >
                  Cancel
                </button>
                <button type="submit">Save</button>
              </div>
            </Form>
          </div>
        </Container>
      )}
    </Formik>
  );
};

export default FormField;
