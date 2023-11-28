import { AddContact } from './AddContact/AddContact';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContacts } from './FilterContacts/FilterContacts';
import { Wrapper } from './App.styled';
import { StyledDiv } from './AddContact/AddContact.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts.reducer';
import { useDispatch, useSelector } from 'react-redux';

import Loader from './Loader/Loader';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors/selectors';
import { LoaderWrapper } from './Loader/Loader.styled';
import Favorite from './Favorite/Favorite';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectVisibleContacts);
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
        {filteredContacts.some(contact => contact.isFavorite === true) && (
          <Favorite />
        )}
        {filteredContacts.length > 0 ? (
          <ContactsList />
        ) : (
          <h3>No contacts here.</h3>
        )}
      </StyledDiv>
    </Wrapper>
  );
};
