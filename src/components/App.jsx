import { AddContact } from './AddContact/AddContact';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { Wrapper } from './App.styled';
import { StyledDiv } from './AddContact/AddContact.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts.reducer';
import { useDispatch, useSelector } from 'react-redux';

import Loader from './Loader/Loader';
import { selectContacts, selectIsLoading } from 'redux/selectors/selectors';
import { LoaderWrapper } from './Loader/Loader.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <AddContact />
      <LoaderWrapper>
        {!isLoading && <h2>Contacts</h2>}
        {isLoading && <Loader />}
      </LoaderWrapper>
      <StyledDiv>
        <FilterContacts />
        {contacts.length > 0 && <ContactsList />}
        {contacts.length === 0 && <h3>No contacts here.</h3>}
      </StyledDiv>
    </Wrapper>
  );
};
