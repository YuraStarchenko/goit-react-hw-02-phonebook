import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from '../GlobalStyle';
import { Container, Text, Title, TitleText, Book } from './Container.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
    const newContact = {
      ...data,
      id: nanoid(),
    };

    this.state.contacts.filter(contact => contact.name === data.name).length
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  handleRemoveContact = id =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));

  handleFiterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const getVisibleContacts = this.state.filter.toLowerCase();

    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(getVisibleContacts)
    );

    return (
      <Container>
        <Book>
          <TitleText>Phonebook</TitleText>
          <ContactForm onSubmit={this.formSubmitHandler} />
          <Title>Contacts</Title>
          <Text>find contact by name</Text>
          <Filter
            filter={this.state.filter}
            onChange={this.handleFiterContact}
          />
          <ContactList
            contacts={filterContacts}
            onRemove={this.handleRemoveContact}
          />
        </Book>
        <GlobalStyle />
      </Container>
    );
  }
}
