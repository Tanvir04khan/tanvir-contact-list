import React, { useEffect, useState } from "react";
import Contact from "./Contact/Contact";
import NavBar from "./NavBar/NavBar";
import addIcon from "../../assets/images/add.png";
import { Container, Wrapper } from "./HomeScreen.styled";
import { useDispatch } from "react-redux";
import { getContactList } from "../../redux/action/contactList.action";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

const HomeScreen = ({
  onThemeToggle,
  theme,
  mode,
  onToggleInputModal,
  onToggleIsPosting,
  getContactId,
}) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.contactList);

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
  }, [contactListData, firebaseHasData, contactInfoToDelete]);

  return (
    <Wrapper>
      <NavBar onThemeToggle={onThemeToggle} mode={mode} />
      {!firebaseHasData ? (
        <h2> No contacts! Add new Contacts. </h2>
      ) : loading ? (
        <LoadingSpinner />
      ) : (
        <Container theme={theme}>
          {contacts?.map((contact) => (
            <Contact
              theme={theme}
              key={contact.id}
              {...contact}
              onToggleIsPosting={onToggleIsPosting}
              getContactId={getContactId}
              onToggleInputModal={onToggleInputModal}
            />
          ))}
        </Container>
      )}
      <img
        src={addIcon}
        alt="Add"
        className="add"
        onClick={() => {
          onToggleInputModal();
          onToggleIsPosting(true);
        }}
      />
    </Wrapper>
  );
};

export default HomeScreen;
