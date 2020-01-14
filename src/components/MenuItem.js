import React, { Component } from 'react';
import Menuform from './Menuform';

class MenuItem extends Component {

    onSubmit = (fields) => {
        console.log('App comp got: ', fields)
    }


    render() { 
        return (
            <div className="container">
                <div className="card">
                <h3>{this.props.item.name}</h3>
                <img src={this.props.item.image} className="foodpic"></img>
                <p>{this.props.item.description}</p>
                <p>{this.props.item.price}</p>
                <Menuform onSubmit={fields => this.onSubmit(fields)}></Menuform>       
                </div>
            </div>
        );
    }
}

export default MenuItem;