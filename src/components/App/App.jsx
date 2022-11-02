import React, { Component } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter/Filter';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';

import { Body, Wrap, Title } from 'components/App/App.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactFormHandler = (values, { resetForm }) => {
    const { name, number } = values;
    const nameToLowerCase = name.toLowerCase();
    const nameNormalize = this.state.contacts.find(
      contact => contact.name.toLowerCase() === nameToLowerCase
    );

    if (!nameNormalize) {
      const contact = { id: nanoid(), name, number };
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    } else {
      return Notiflix.Notify.failure(`${name} is already in contacts.`);
    }

    resetForm();
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const contactToLowerCase = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactToLowerCase)
    );
  };
  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    return (
      <Body>
        <Wrap>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.contactFormHandler} />
          <Title>Contacts</Title>
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={this.filterContacts}
            onDeleteContact={this.onDeleteContact}
          />
        </Wrap>
      </Body>
    );
  }
}
