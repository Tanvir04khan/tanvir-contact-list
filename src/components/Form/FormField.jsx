import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import UserInput from "./UserInput";
import UserIputSelctcion from "./UserIputSelctcion";
import { Container } from "./Form.styled";
import * as yup from "yup";
import { randomNumberGenerator } from "../../utils/generateRandomNumber";
import { useDispatch, useSelector } from "react-redux";
import {
  editContact,
  getContactList,
  postContact,
} from "../../redux/action/contactList.action";

const FormField = ({
  theme,
  onToggleInputModal,
  isPosting,
  contactToBeEdited,
}) => {
  const [initialValue, setInitialValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    status: "Select",
  });
  const imageUrl = `https://avatars.dicebear.com/api/bottts/${randomNumberGenerator()}.svg`;

  const { id: userId } = useSelector((state) => state.auth);

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
      .min(10, "Must have 10 digits")
      .max(10, "Must have 10 digits")
      .required("Required."),
    status: yup
      .string()
      .oneOf(["Active", "Inactive"], "Must be Active or Inactive."),
  });

  useEffect(() => {
    isPosting
      ? setInitialValue({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          status: "Select",
        })
      : setInitialValue({
          firstName: contactToBeEdited.firstName,
          lastName: contactToBeEdited.lastName,
          email: contactToBeEdited.email,
          phoneNumber: contactToBeEdited.phoneNumber,
          status: contactToBeEdited.status,
        });
  }, [isPosting, contactToBeEdited]);

  const formSubmitHandler = async (values, onSubmitProps) => {
    onSubmitProps.resetForm();
    onSubmitProps.setSubmitting(false);
    onToggleInputModal();
    if (isPosting) {
      await dispatch(postContact(userId, { ...values, imgUrl: imageUrl }));
    } else {
      await dispatch(
        editContact(userId, contactToBeEdited.id, {
          ...values,
          imgUrl: contactToBeEdited.imgUrl,
        })
      );
    }
    dispatch(getContactList(userId));
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValue}
      validationSchema={validate}
      validateOnChange
      onSubmit={formSubmitHandler}
    >
      {(props) => (
        <Container theme={theme}>
          <div
            className="backdrop"
            onClick={() => {
              onToggleInputModal();
              props.handleReset();
            }}
          ></div>
          <div className="form">
            {isPosting ? (
              <h1 className="header">Create Contact</h1>
            ) : (
              <h1>Update Contact</h1>
            )}

            <Form>
              <UserInput
                label="First Name"
                name="firstName"
                type="text"
                onChange={props.handleChange}
              />

              <UserInput
                label="Last Name"
                name="lastName"
                type="text"
                onChange={props.handleChange}
              />
              <UserInput
                label="Email"
                name="email"
                type="email"
                onChange={props.handleChange}
              />
              <UserInput
                label="Phone Number"
                name="phoneNumber"
                type="number"
                onChange={props.handleChange}
              />
              <UserIputSelctcion
                label="Status"
                name="status"
                type="select"
                onChange={props.handleChange}
              />
              <div className="btn">
                <button
                  type="button"
                  onClick={() => {
                    onToggleInputModal();
                    props.handleReset();
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
