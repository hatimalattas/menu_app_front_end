import React, { Component } from 'react';

class Menuform extends Component {
    state = {
        name: "",
        image: "",
        description: "",
        price: ""
    };

    chenge = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form>
                    <input
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={e => this.change(e)}>
                    </input>
                    <br></br>

                    <input
                    name="image"
                    placeholder="Image"
                    value={this.state.image}
                    onChange={e => this.change(e)}>
                    </input>
                    <br></br>

                    <input
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={e => this.change(e)}>
                    </input>
                    <br></br>

                    <input
                    name="price"
                    placeholder="Price"
                    value={this.state.price}
                    onChange={e => this.change(e)}>
                    </input>
                    <br></br>
                    <button onClick={() => this.onSubmit()}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Menuform;

