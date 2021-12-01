import { ErrorMessage, useField } from "formik";
import React from "react";
import { Wrapper } from "./UserInputSelection.styled";

const UserIputSelctcion = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <Wrapper>
      <label htmlFor={field.name}>{label}</label>
      <select {...field} {...props}>
        <option value="Select">Select</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <p>
        <ErrorMessage name={field.name} />
      </p>
    </Wrapper>
  );
};

export default UserIputSelctcion;
