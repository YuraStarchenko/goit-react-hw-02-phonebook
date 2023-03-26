import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
  };

  nameInputId = nanoid();

  hendleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
		e.preventDefault();
		
		this.props.onSubmit(this.state);
		this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name </label>
        <input
          type="text"
          name="name"
          id={this.nameInputId}
          value={this.state.name}
          onChange={this.hendleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">Add contacts</button>
      </form>
    );
  }
}
