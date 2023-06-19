import React from 'react';
import PropTypes from 'prop-types';
import css from './Contactlist.module.css';
import { ElementContact } from './ElementCotact';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteContactsThunk,
  getContactsThunk,
} from 'components/services/contactsApi';
import { getStateContacts } from 'redux/contacts/selectors';

export function ContactList({ contacts }) {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getStateContacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };

  return (
    <>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ul className={css.list}>
        {contacts.map(item => (
          <li className={css.item} key={item.id}>
                        <ElementContact
              contacts={item}
              onDeleteContact={handleDeleteContact}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

