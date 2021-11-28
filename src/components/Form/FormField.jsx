import React from "react";
import { Formik, Form } from "formik";
import UserInput from "./UserInput";
import UserIputSelctcion from "./UserIputSelctcion";
import { Container } from "./Form.styled";
import * as yup from "yup";
import { randomNumberGenerator } from "../../utils/generateRandomNumber";
import { useDispatch, useSelector } from "react-redux";
import { postContact } from "../../redux/action/contactList.action";

const FormField = ({ theme, onToggleInputModal }) => {
  const imageUrl = `https://avatars.dicebear.com/api/bottts/${randomNumberGenerator()}.svg`;

  const { id } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

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
        onSubmitProps.resetForm();
        onSubmitProps.setSubmitting(false);

        dispatch(postContact(id, { ...values, imgUrl: imageUrl }));
        onToggleInputModal();
      }}
    >
      {(formik) => (
        <Container theme={theme}>
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
