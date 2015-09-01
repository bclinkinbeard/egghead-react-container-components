import React, { Component } from 'react';
import $ from 'jquery';

class PersonList extends Component {
  constructor() {
    super();
    this.state = { people: [] };
  }

  componentDidMount() {
    $.ajax({
      url: "//api.randomuser.me/?results=10&seed=bbqftw",
      dataType: 'json',
      success: function(data) {
        this.setState({
          people: data.results.map(res => res.user)
        });
      }.bind(this)
    });
  }

  render() {
    return <ul>{this.state.people.map(this.renderPerson)}</ul>
  }

  renderPerson(person) {
    return <li key={person.sha1}>{person.name.first} {person.name.last}</li>
  }
}

export default PersonList;
