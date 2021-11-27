import React, { useMemo } from "react";
import deleteIcon from "../../../assets/images/trash.png";
import editIcon from "../../../assets/images/pencil.png";
import { randomNumberGenerator } from "../../../utils/generateRandomNumber";
import { Wrapper } from "./Contact.styled";

const ContactList = ({ theme }) => {
  const imageUrl = useMemo(
    () =>
      `https://avatars.dicebear.com/api/bottts/${randomNumberGenerator()}.svg`,
    []
  );

  return (
    <Wrapper theme={theme}>
      <img src={imageUrl} alt="Avatar" />
      <div className="name">Khan Tanvir</div>
      <div className="email">khantanvirrr98@gmail.com</div>
      <div className="phone-number">999999999</div>
      <div className="status">Active</div>
      <div className="button">
        <button className="dlt-btn">
          <img src={deleteIcon} alt="delete" />
        </button>
        <button className="edit-btn">
          <img src={editIcon} alt="Edit" />
        </button>
      </div>
    </Wrapper>
  );
};

export default ContactList;
