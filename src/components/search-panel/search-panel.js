import React, { Component } from 'react'

export class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
    };

    onUpdateSearch(e) {
        const search = e.target.value;
        this.setState({search});
        this.props.onUpdateSearch(search);
    };

    render(){
        return (
            <input
                className='form-control search-input'
                type='text'
                placeholder='Search'
                onChange={this.onUpdateSearch}
            />            
        );
    };
};
