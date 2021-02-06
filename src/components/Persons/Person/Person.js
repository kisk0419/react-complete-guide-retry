import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxilliary';
import withClass2 from '../../../hoc/withClass2';
import WithClass from '../../../hoc/WithClass';


//const person = (props) => {
class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            //<div className={classes.Person}>
            //<WithClass classes={classes.Person}>
            <Aux>
                <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
            //</div>
        )
    }
}

export default withClass2(Person, classes.Person);
//export default Person;