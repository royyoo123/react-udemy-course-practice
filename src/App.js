import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 }
    ]
  }
	switchNameHandler = () => {
		this.setState({
      persons: [
      { name: 'REE', age: 48 },
      { name: 'crikey', age: 19 }
    ]
     })
	}
  render() {
    return (
      <div className="App">
      	<button onClick={this.switchNameHandler}>Switch Name</button>
        <h1> Test </h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >ASDQWEASDCD</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >ASDQadsD</Person>
      </div>
    );
  }
}

export default App;
