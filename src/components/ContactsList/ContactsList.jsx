import { useDispatch, useSelector } from 'react-redux';
import { Button, StyledUl } from './ContactsList.styled';
import { deleteContacts } from 'redux/contacts/contacts.reducer';
import {
  selectContacts,
  selectVisibleContacts,
} from 'redux/selectors/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const sortedContacts = [...filteredContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div>
      <StyledUl>
        {contacts.length > 0
          ? sortedContacts.map(contact => (
              <li key={contact.id}>
                <div>
                  <h4>{contact.name}:</h4>
                  <p>{contact.phone}</p>
                </div>
                <Button
                  type="button"
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  Delete
                </Button>
              </li>
            ))
          : 'No contacts'}
      </StyledUl>
    </div>
  );
};
