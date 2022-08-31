import React, { Component } from 'react';
import './styles.css';
import Advertisement from './advertisement';
import SubContent from './subcontents';

    
class Main extends Component {
    render() {
        return <div className='main'>
            {this.props.children}
           
        </div>;
    }
}
    
export default Main;