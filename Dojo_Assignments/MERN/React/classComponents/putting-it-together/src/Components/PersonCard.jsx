import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Age:props.age
        };
    }
    render() {
        const {firstName,lastName, age, hairColor}=this.props;
        return <div>
            <h1>{lastName}, {firstName} </h1>
            <p>Age: {this.state.Age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={() => this.setState({Age:this.state.Age+1})}>Birthday Button for {firstName} {lastName}</button>
        </div>;
    }
}
    
export default PersonCard;