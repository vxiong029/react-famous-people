import React, { Component } from 'react';
import FamousPersonForm from '../FamousPersonForm/FamousPersonForm';
import FamousPersonList from '../FamousPersonList/FamousPersonList';

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
    return (
    <div>
      
      <FamousPersonForm 
        newPerson={this.state.newPerson}
        handleChange={this.handleChange}
        handleClick={this.handleClick} 
      />
      
      <FamousPersonList
        famousPerson={this.state.famousPerson}
      />
      
    </div>
    )
  }
}

export default FamousPerson;


