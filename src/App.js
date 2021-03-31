import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'trumpanzee', age: 18},
      { name: 'Manu', age: 29 }
    ]
  }
	switchNameHandler = (event) => {
		this.setState({
      persons: [
      { name: 'REE', age: 48 },
      { name: 'billy', age: 11 },
      { name: 'crikey', age: 19 }
    ]
     })
	}
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      { name: 'REE', age: 48 },
      { name: event.target.value, age: 11 },
      { name: 'crikey', age: 19 }
    ]
     })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
      	<button 
          style = {style}
          onClick={this.switchNameHandler}>Switch Name</button>
        <h1> Test </h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >ASDQWEASDCD</Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click= {this.switchNameHandler.bind(this, "Max!")}
        changed={this.nameChangeHandler}
        >ASDQadsD</Person>
      </div>
    );
  }
}

export default App;
