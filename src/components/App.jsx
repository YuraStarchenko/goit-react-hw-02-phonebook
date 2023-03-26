import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container.styled';

export class App extends Component {



	formSubmitHendler = data => {
		console.log(data);
}

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHendler} />
        <h2>Contacts</h2>
        <GlobalStyle />
      </Container>
    );
  }
}
