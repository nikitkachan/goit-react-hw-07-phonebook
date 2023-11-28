import { useDispatch, useSelector } from 'react-redux';
import { StyledUl } from './ContactsList.styled';
import { addToFavorite, deleteContacts } from 'redux/contacts/contacts.reducer';
import { selectVisibleContacts } from 'redux/selectors/selectors';
import { BsHeart, BsTrash } from 'react-icons/bs';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const handleAddToFavorite = contact => {
    const favoriteContact = { ...contact, isFavorite: true };
    dispatch(addToFavorite(favoriteContact));
  };

  const sortedContacts = [...filteredContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div>
      <StyledUl>
        {filteredContacts.length > 0
          ? sortedContacts.map(
              contact =>
                contact.isFavorite !== true && (
                  <li key={contact.id}>
                    <div>
                      <h4>{contact.name}:</h4>
                      <p>{contact.phone}</p>
                    </div>
                    <div className="buttonsWrapper">
                      <BsHeart
                        className="favoriteBtn"
                        onClick={() => handleAddToFavorite(contact)}
                      />

                      <button
                        type="button"
                        onClick={() => handleDeleteContact(contact.id)}
                      >
                        <BsTrash size={'16px'} />
                      </button>
                    </div>
                  </li>
                )
            )
          : 'No contacts'}
      </StyledUl>
    </div>
  );
};
