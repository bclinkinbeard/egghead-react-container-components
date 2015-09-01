import React, { Component } from 'react';
import $ from 'jquery';
import PersonList from './PersonList';

class PersonListContainer extends Component {
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
    return <PersonList people={this.state.people}/>
  }
}

export default PersonListContainer;
