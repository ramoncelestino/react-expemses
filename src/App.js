import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Ramon', age: 29}, 
      { name: 'Thais', age: 26},
      { name: 'Pedro', age: 1} 

    ]
  }

  changePersonHandler = () => {
    //console.log("Clicked");
    const number = document.querySelector('#inputNumber');
    //this.state.persons[0].name = "Viviane";
    this.setState(
      {
        persons: [
          { name: 'Ramon', age: 30}, 
          { name: 'Thais', age: 26},
          { name: 'Pedro', age: 1} 
    
        ]
      }
    )
  }

  changeNameHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: 'Ramon', age: 30}, 
          { name: event.target.value, age: 26},
          { name: 'Pedro', age: 1} 
    
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Projeto React</h1>
        <p>Testando React</p>

        <input id="inputNumber" type="text" placeholder="Number"></input>
        <button className="btn btn-primary" onClick={this.changePersonHandler}>Try me</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.changeNameHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}> 
          Testing children</Person>

      </div>
    );
  }
}

export default App;
