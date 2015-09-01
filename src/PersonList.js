import React, { Component } from 'react';

class PersonList extends Component {
  render() {
    return <ul>{this.props.people.map(this.renderPerson)}</ul>
  }

  renderPerson(person) {
    return <li key={person.sha1}>{person.name.first} {person.name.last}</li>
  }
}

export default PersonList;
