import React, { Component } from 'react';
import axios from 'axios';
import MenuItem from './MenuItem'

export default class Menu extends React.Component {
    state = {
        menu: [],
    };

    componentDidMount() {
        axios.get("https://shielded-mesa-36213.herokuapp.com/api/restaurants/1/menu_items").then(res => {
            console.log(res.data.menu_items);
            this.setState({ menu: res.data.menu_items });
        });
    }



    render() {
        const menu_items = this.state.menu.map(e =>(
            <MenuItem item={e} />
        ))
        return (
            
            <div className="item container-m">
                {menu_items}
            </div>
            
            
        )
    }
}

// { this.state.menu.map(menu => <li >{menu.name}</li>) }
// { this.state.menu.map(menu => <img src={menu.image}></img>) }
// { this.state.menu.map(menu => <li>{menu.description}</li>) }
// { this.state.menu.map(menu => <li>{menu.price}</li>) }