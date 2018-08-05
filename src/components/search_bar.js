import React, { Component } from 'react';

class Search_Bar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

    }

    render() {
        return (
            <div>
                <input value={this.state.term}
                    //onChange={event => { console.log(event.target.value); this.setState({ term: event.target.value }); }}
                    onChange={this.abc}
                />
                {this.state.term}
            </div>
        );
    }

    abc = (event) => {
        console.log(event.target.value);
        this.setState({ term: event.target.value }); 
    }
}


export default Search_Bar;