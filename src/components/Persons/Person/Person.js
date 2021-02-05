import React, {Component} from 'react';
//import classes from './Person.css';
import Aux from '../../../hoc/Auxilliary'

//const person = (props) => {
class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            //<div className={classes.Person}>
            <Aux>
                <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
            //</div>
        )
    }
}

export default Person;