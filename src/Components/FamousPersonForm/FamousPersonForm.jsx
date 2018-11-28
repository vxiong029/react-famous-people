import React, { Component } from 'react';

class FamousPersonForm extends Component {
  render() {
    return (
      <section>
        <input type="text" placeholder="Name" value={this.props.newPerson.name} onChange={this.props.handleChange('name')} />
        <input type="text" placeholder="Role" value={this.props.newPerson.role} onChange={this.props.handleChange('role')} />
        <button onClick={this.props.handleClick}>add me</button>
      </section>
    )
  }
}

export default FamousPersonForm;
