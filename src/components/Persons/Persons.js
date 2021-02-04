import React, { PureComponent } from 'react';
import Person from './Person/Person';


//const persons = (props) => {
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    constructor(props) {
        super(props);
        console.log('[Persons.js] constructor');
    }
    
    // shouldComponentUpdate(newProps, newState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if (newProps.persons !== this.props.persons ||
    //         newProps.clicked !== this.props.clicked ||
    //         newProps.changed !== this.props.changed) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {'message': 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }
    
    render() {
        console.log('[Persons.js] rendering...');    
        return this.props.persons.map((person, index) => {
            return <Person 
                key={person.id}
                click={() => this.props.clicked(index)} 
                name={person.name} 
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

export default Persons;
