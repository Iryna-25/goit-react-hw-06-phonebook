import React, { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Header, Form, Input, Button } from './ContactForm.styled';
import { addItem } from '../Redux/Contacts/contacts-actions';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const normalizeName = textNormalize(name);

    const isInContacts = contacts.some(
      item => item.name.toLowerCase() === normalizeName,
    );

    if (isInContacts) {
      alert(`${name} is already in your contacts`);
      return;
    }

    dispatch(addItem({ name, number }));

    setName('');
    setNumber('');
  };

  const textNormalize = text => {
    return text.toLowerCase();
  };

  const handleChange = e => {
    const inputName = e.target.name;
    const value = e.target.value;
    if (inputName === 'name') {
      setName(value);
    }
    if (inputName === 'number') {
      setNumber(value);
    }
  };

  return (
    <div> 
      <Header> Phonebook </Header>
      <Form onSubmit={handleSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          Number
          <Input
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  AddContact: PropTypes.func,
};
export default memo(ContactForm);