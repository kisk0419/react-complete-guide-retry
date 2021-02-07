import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxilliary';
import withClass2 from '../../../hoc/withClass2';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';


//const person = (props) => {
class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            //<div className={classes.Person}>
            //<WithClass classes={classes.Person}>
            <Aux>
                { this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p> }
                <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                    ref={this.inputElementRef}
                />
            </Aux>
            //</div>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass2(Person, classes.Person);
//export default Person;