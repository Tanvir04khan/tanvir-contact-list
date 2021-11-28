import React from "react";
import deleteIcon from "../../../assets/images/trash.png";
import editIcon from "../../../assets/images/pencil.png";

import { Wrapper } from "./Contact.styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deleteContact,
  getContactList,
} from "../../../redux/action/contactList.action";

const Contact = ({ theme, ...props }) => {
  const { email, firstName, lastName, phoneNumber, status, imgUrl, id } = props;
  const dispatch = useDispatch();

  const { id: userId } = useSelector((state) => state.auth);

  const contactDeleteHandler = async () => {
    await dispatch(deleteContact(userId, id));
    dispatch(getContactList(userId));
  };

  return (
    <Wrapper theme={theme}>
      <img src={imgUrl} alt="Avatar" />
      <div className="name">
        {firstName} {lastName}
      </div>
      <div className="email">{email}</div>
      <div className="phone-number">{phoneNumber}</div>
      <div className="status">{status}</div>
      <div className="button">
        <button className="dlt-btn" onClick={contactDeleteHandler}>
          <img src={deleteIcon} alt="delete" />
        </button>
        <button className="edit-btn">
          <img src={editIcon} alt="Edit" />
        </button>
      </div>
    </Wrapper>
  );
};

export default Contact;
