import React, { useEffect, useState } from "react";
import Contact from "./Contact/Contact";
import NavBar from "./NavBar/NavBar";
import addIcon from "../../assets/images/add.png";
import { Container, Wrapper } from "./HomeScreen.styled";
import { useDispatch } from "react-redux";
import { getContactList } from "../../redux/action/contactList.action";
import { useSelector } from "react-redux";

const HomeScreen = ({ onThemeToggle, theme, mode, onToggleInputModal }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);
  const contactListData = useSelector((state) => state.contactList.data);
  const [contacts, setContacts] = useState(contactListData);

  const { firebaseHasData, contactInfoToDelete } = useSelector(
    (state) => state.contactList
  );

  useEffect(() => {
    dispatch(getContactList(id));
  }, [dispatch, id]);

  useEffect(() => {
    setContacts(contactListData);
    console.log(contactListData, contactInfoToDelete);
  }, [contactListData, firebaseHasData, contactInfoToDelete]);

  return (
    <Wrapper>
      <NavBar onThemeToggle={onThemeToggle} mode={mode} />
      {!firebaseHasData ? (
        <h2> No contacts! Add new Contacts. </h2>
      ) : (
        <Container theme={theme}>
          {contacts?.map((contact) => (
            <Contact theme={theme} key={contact.id} {...contact} />
          ))}
        </Container>
      )}
      <img
        src={addIcon}
        alt="Add"
        className="add"
        onClick={onToggleInputModal}
      />
    </Wrapper>
  );
};

export default HomeScreen;
