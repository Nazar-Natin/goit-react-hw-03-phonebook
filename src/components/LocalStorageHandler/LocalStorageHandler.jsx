import React, { Component } from 'react';

class LocalStorageHandler extends Component {
  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {
      this.props.onLoadContacts(JSON.parse(storedContacts));
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.contacts !== this.props.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.props.contacts));
    }
  }

  render() {
    return null;
  }
}

export default LocalStorageHandler;
