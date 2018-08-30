import React, { Component } from 'react';

class Search_Bar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

    }

    render() {
        return (
            <div className='search-bar'>
                <input value={this.state.term}
                    //onChange={event => { console.log(event.target.value); this.setState({ term: event.target.value }); }}
                    onChange={this.onInputChange}
                />
                {this.state.term}
            </div>
        );
    }

    onInputChange = (event) => {
        const term = event.target.value;
        console.log(term);
        this.setState({ term: term });
        this.props.onSearchTermChange(term);
    }
}


export default Search_Bar;