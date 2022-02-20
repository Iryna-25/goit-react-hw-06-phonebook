import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, DeleteButton } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../Redux/Contacts/contacts-actions';
import { useMemo } from 'react';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const FilContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  }, [contacts, filter]);

  return (
    <List>
      {FilContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name} : {number}
          {
            <DeleteButton
              type="button"
              name="delete"
              onClick={() => dispatch(removeItem(id))}
            >
              Delete
            </DeleteButton>
          }
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  removeItem: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;