import React, { Component } from 'react';

class FamousPerson extends Component {
  state = {
    famousPerson: {
      name: '',
      role: ''
    }
  }
  handleChange = (propertyName) => {
    return (event) => {
      this.setState({
        famousPerson: {
          ...this.state.famousPerson,
          [propertyName]: event.target.value
        }
      })
    }
  }
  handleClick = () => {
    console.log(this.state);
  }
  render() {
    return (
      <section>
        <input type="text" placeholder="Name" onChange={this.handleChange('name')} />
        <input type="text" placeholder="Role" onChange={this.handleChange('role')} />
        <button onClick={this.handleClick}>add me</button>
        <p>{this.state.famousPerson.name} is famous for {this.state.famousPerson.role}.</p>
      </section>
    )
  }
}

export default FamousPerson;


