import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
      <div className="App">
        <header>
          <h1>Famous People</h1>
        </header>
        <section>
          <input type="text" placeholder="Name" onChange={this.handleChange('name')} />
          <input type="text" placeholder="Role" onChange={this.handleChange('role')} />
          <button onClick={this.handleClick}>add me</button>
          <p>{this.state.famousPerson.name} is famous for {this.state.famousPerson.role}.</p>
        </section>
      </div>
    );
  }
}

export default App;
