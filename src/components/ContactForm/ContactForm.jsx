import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  hendleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onAdd } = this.props;
    this.reset();
    const isValidatedForm = this.validateForm;

    if (!isValidatedForm) return;
    onAdd({ id: nanoid(), name, number });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  validateForm = () => {
    const { name, number } = this.state;
    const { onChangeInput } = this.props;
    if (!name || !number) {
      alert(`is already in contact`);
      return false;
    }
    return onChangeInput(name);
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.hendleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <input
          type="tel"
          name="number"
          value={number}
          onChange={this.hendleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contacts</button>
      </form>
    );
  }
}
