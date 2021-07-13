import React, {Component} from 'react';

import {CompaniesList} from '../companies-list/companies-list.js';
import CompaniesAddForm from '../companies-add-form/companies-add-form.js';
import SearchPanel from 'components/search-panel/search-panel.js';

const date = [ 
    {name: 'Pepsi Corporation', address: 'US, Manhattan str, 50', phonesNumber: '123456788', site: 'www.pepsi.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', id: 1},
    {name: 'Coca-Cola', address: 'US, sdad stsdafewr, 520', phonesNumber: '123445388', site: 'www.cocacola.com', description: 'Lorem ipasdffsadfectetur adipiscing elit.', id: 2},
]


export default class Companies extends Component {
    constructor(props){
        super(props);
        this.state = {
            date,
            term: ''
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.maxId = 3;
        this.editItem = this.editItem.bind(this)
    }

    deleteItem(id) {
        this.setState(({date}) => {
            const index = date.findIndex(elem => elem.id === id);

            const before = date.slice(0, index);
            const after = date.slice(index + 1);
            
            const newArr = [...before, ...after];
            return {
                date: newArr
            }
        });
    }

    addItem({name, address, phonesNumber, site, description}) {
        const newItem = {
            name,
            address,
            phonesNumber,
            site,
            description,
            id: this.maxId++    
        }
        this.setState(({date}) => {
            const newArr = [...date, newItem];
            return {
                date: newArr
            }
        })
    }

    editItem({id, name, address, phonesNumber, site, description}) {
        const newItem = {
            name,
            address,
            phonesNumber,
            site,
            description
        }
        this.setState(({date}) => {
            const index = date.findIndex(elem => elem.id === id);

            const before = date.slice(0, index);
            const after = date.slice(index + 1);
            
            const newArr = [...before, newItem, ...after];
            return {
                date: newArr
            }
        });
    }

    

    searchPost(items, term) {
        if (term.lenght === 0) {
            return items
        }

        return items.filter( (item) => {
            return item.name.indexOf(term) > -1
        });
    }

    onUpdateSearch(term) {
        this.setState({term});
    }


    render() {
        const { date, term } = this.state;

        const visiblePosts = this.searchPost(date, term);
        return (
            <div>
                <CompaniesAddForm
                    onAdd={this.addItem} />
                <div className='d-flex'>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                </div>
                <CompaniesList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onEdit={this.editItem} />
            </div>
        );
    }
}