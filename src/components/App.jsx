import { useSelector } from 'react-redux';
import Form from './form/Form';
import { ContactList } from './form/ContactList';
import css from './App.module.css';
import Filter from './form/Filter';

function App () {
  const filter = useSelector(state => state.filter.value);
  const contacts = useSelector(state => state.contacts.items);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

    return (
      <div className={css.style}>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList contacts={filteredContacts}/>
      </div>
    );

}

export default App;
