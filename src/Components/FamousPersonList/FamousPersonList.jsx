import React, { Component } from 'react';

class FamousPersonList extends Component {
  render() {
    let listItem = this.props.famousPerson.map((person, i) => <li key={i}>
      {person.name} is famous for {person.role}</li>);
    return (
      <div>
        <ul>
          {listItem}
        </ul>
      </div>
    )
  }
}

export default FamousPersonList;
