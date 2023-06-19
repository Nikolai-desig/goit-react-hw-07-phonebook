import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createContactsThunk } from 'components/services/contactsApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();


  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSumbit = e => {
    e.preventDefault();
    for (let i = 0; i < contacts.length; i++) {
      const element = contacts[i];

      if (element.name === name) {
        toast(`${name} is already in contacts.`);
        return;
      }
    }
    dispatch(createContactsThunk({ name, number, }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSumbit}>
      <label className={css.label}>
        Name
        <input
          className={css.submit}
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter Name"
          name="name"
          required
        />
      </label>

      <label className={css.label}>
        Number
        <input
          className={css.submit}
          type="tel"
          value={number}
          onChange={handleChange}
          placeholder="Enter Number"
          name="number"
          pattern="^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button} type="submit" disabled={!name || !number}>
        Add contact
      </button>
      <ToastContainer />
    </form>
  );
}

Phonebook.propTypes = {
  onSubmit: PropTypes.func,
};

export default Phonebook;
