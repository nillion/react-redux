import React, { Component } from 'react';


export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { key: '' };
    }

    render() {
        return (
            <div>
                <input value={this.state.key}
                    onChange={event => this.setState({ key: event.target.value })} />
            </div>
        );
    }
}