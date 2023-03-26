import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmitHendler = data => {
    console.log(data);
  };

  handleAddContact = newContact =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handleCheckInputContact = name => {
    const { contacts } = this.state;

    const isExistContact = !!contacts.find(contact => contact.name === name);
    isExistContact && alert('Contact is already exist');

    return !isExistContact;
  };

  handleRemoveContact = id =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));

	handleFiterContact = filter => this.setState({ filter });
	
	getVisibleContacts = () => {
		const { contacts, filter } = this.state;
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
    );
	}

  render() {
		const { contacts, filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onAdd={this.handleAddContact}
          onChangeInput={this.handleCheckInputContact}
        />
        <h2>Contacts</h2>
        <p>find contact by name</p>
        <Filter filter={filter} onChange={this.handleFiterContact} />
        <ContactList contacts={contacts} onRemove={this.handleRemoveContact} />
        <GlobalStyle />
      </Container>
    );
  }
}
