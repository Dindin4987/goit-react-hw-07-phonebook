import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const savedContacts = localStorage.getItem('contacts');
  const [contacts, setContacts] = useState(
    savedContacts !== null ? JSON.parse(savedContacts) : initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  


  // componentDidMount() {
  //   // Check if contacts are saved in localStorage
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts.length > 0) {
  //     // If yes, update the state with these contacts
  //     this.setState({ contacts: JSON.parse(savedContacts) });
  //   }
  // }

  // componentDidUpdate(_prevProps, prevState) {
  //   // Check if current contacts are different from the previous state
  //   if (prevState.contacts !== this.state.contacts) {
  //     // If they are different, save the current contacts to localStorage
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  const addContact = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };
  // const { contacts } = this.state;
  //   const duplicateContact = contacts.find(
  //     contact => contact.name === newContact.name
  //   );

  //   if (duplicateContact) {
  //     alert(`${newContact.name} is already in your contacts.`);
  //     return;
  //   }

  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, newContact],
  //   }));
  // };

  const deleteContact = id => {
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(contact => contact.id !== id),
    // }));
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  // setFilter = filterValue => {
  //   this.setState({
  //     filter: filterValue,
  //   });
  // };

  const filterContact = () => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList
        filterContact={filterContact}
        deleteContact={deleteContact}
        contacts={contacts}
      />
    </div>
  );
};