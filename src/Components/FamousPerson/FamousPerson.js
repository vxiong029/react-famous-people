import React, { Component } from 'react';

class FamousPerson extends Component {
  state = {
    newPerson: {
      name: '',
      role: ''
    },
    famousPerson: [
      {
        name: 'Robert DeNiro',
        role: 'The Godfather'
      },
      {
        name: 'Julia Roberts',
        role: 'Pretty Woman'
      },
      {
        name: 'Winona Ryder',
        role: 'Beetle Juice'
      }
    ]
  }
  handleChange = (propertyName) => {
    return (event) => {
      this.setState({
        newPerson: {
          ...this.state.newPerson,
          [propertyName]: event.target.value
        }
      })
    }
  }
  handleClick = () => {
    let newPerson = this.state.newPerson;

    this.setState({
      famousPerson: [
        ...this.state.famousPerson,
        newPerson
      ]
    })
    // clear input
    this.setState({
      newPerson: {
        name: '',
        role: ''
      }
    })
  }
  render() {
    let listItem = this.state.famousPerson.map((person, i) => <li key={i}>
      {person.name} is famous for {person.role}</li>);
    return (
      <section>
        <input type="text" placeholder="Name" value={this.state.newPerson.name} onChange={this.handleChange('name')} />
        <input type="text" placeholder="Role" value={this.state.newPerson.role} onChange={this.handleChange('role')} />
        <button onClick={this.handleClick}>add me</button>
        <ul>
          {listItem}
        </ul>
      </section>
    )
  }
}

export default FamousPerson;


