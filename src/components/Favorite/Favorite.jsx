import { StyledUl } from 'components/ContactsList/ContactsList.styled';
import React from 'react';
import { BsHeartFill, BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContacts,
  deleteFromFavorite,
} from 'redux/contacts/contacts.reducer';
import { selectVisibleContacts } from 'redux/selectors/selectors';
import { FavoriteWrapper } from './Favorite.styled';

const Favorite = () => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const handleDeleteFromFavorite = contact => {
    const finalContact = { ...contact, isFavorite: false };

    dispatch(deleteFromFavorite(finalContact));
  };

  const filteredContacts = useSelector(selectVisibleContacts);
  const sortedContacts = [...filteredContacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <FavoriteWrapper>
      <h3>Favorite contacts</h3>
      <StyledUl>
        {filteredContacts.length > 0 &&
          sortedContacts.map(
            contact =>
              contact.isFavorite === true && (
                <li key={contact.id}>
                  <div>
                    <h4>{contact.name}:</h4>
                    <p>{contact.phone}</p>
                  </div>
                  <div className="buttonsWrapper">
                    <BsHeartFill
                      className="favoriteBtn"
                      onClick={() => handleDeleteFromFavorite(contact)}
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
          )}
      </StyledUl>
    </FavoriteWrapper>
  );
};

export default Favorite;
