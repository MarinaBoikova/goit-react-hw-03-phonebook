import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.onSubmit({
      id: nanoid(),
      name,
      number,
    });
    this.reset();
  };

  onChangeInput = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <label>
          <span>Name:</span>
          <input
            type="text"
            onChange={this.onChangeInput}
            value={name}
            name="name"
            placeholder="example: Boykova Marina"
            required
          />
        </label>

        <label>
          <span>Number:</span>
          <input
            type="tel"
            onChange={this.onChangeInput}
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="example: 525-17-79"
            required
          />
        </label>

        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
