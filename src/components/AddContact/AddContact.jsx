import { useState } from 'react';
import { Button, StyledDiv } from './AddContact.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContacts } from 'redux/contacts/contacts.reducer.js';
import { selectContacts } from 'redux/selectors/selectors.js';

export const AddContact = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleAddContact = contactData => {
    const isExist = contacts.some(contact => contact.name === contactData.name);
    if (isExist) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    }
    const finalContact = {
      ...contactData,
      id: nanoid(),
    };

    dispatch(addContacts(finalContact));
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const contactData = {
      name,
      phone,
    };
    handleAddContact(contactData);
    formReset();
  };

  const handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const formReset = () => {
    setName('');
    setPhone('');
  };

  return (
    <StyledDiv>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Name</h3>

          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
          />
        </label>
        <label>
          <h3>Phone</h3>

          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add contact</Button>
      </form>
    </StyledDiv>
  );
};
