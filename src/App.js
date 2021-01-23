import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
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

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
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
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm react app.</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style} 
            onClick={ this.togglePersonsHandler }
          >Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
