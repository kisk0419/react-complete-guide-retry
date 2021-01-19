import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '012345', name: 'Max', age: 28 },
      { id: '012346', name: 'Menu', age: 29 },
      { id: '012347', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other values',
    showPersons: false
  }

  deletePersonHandler = (personIdex) => {
    const persons = [...this.state.persons];
    persons.splice(personIdex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === personId;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // inline style
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                key={person.id}
                click={() => this.deletePersonHandler(index)} 
                name={person.name} 
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm react app.</h1>
        <p>This is really working!</p>
        <button
          style={style} 
          onClick={ this.togglePersonsHandler }
        >Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
