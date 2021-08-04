import React, {Component} from 'react';

import {SearchPanel} from 'components/search-panel/search-panel.js';
import {CompanyForm} from 'components/company-form/company-form.js';
import {CompanyListItem} from 'components/company-list-item/company-list-item';

const companies = [ 
    {name: 'Pepsi Corporation', address: 'US, Manhattan str, 50', phonesNumber: '123456788', site: 'www.pepsi.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', id: 1},
    {name: 'Coca-Cola', address: 'US, sdad stsdafewr, 520', phonesNumber: '123445388', site: 'www.cocacola.com', description: 'Lorem ipasdffsadfectetur adipiscing elit.', id: 2},
];

export class Companies extends Component {
    constructor(props){
        super(props);
        this.state = {
            companies,
            search: '',
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.maxId = 3;
    };

    deleteItem(id) {
        this.setState(({companies}) => {
            const index = companies.findIndex(elem => elem.id === id);
            const newArr = [...companies.slice(0, index), ...companies.slice(index + 1)];
            return {
                companies: newArr
            }
        });
    }

    addItem(company) {
        company.id = this.maxId++;
        const newItem = company;   
        this.setState(({companies}) => {
            const newArr = [...companies, newItem];
            return {
                companies: newArr
            }
        });
    }

    editItem(company) {
        const newItem = company;
        this.setState(({companies}) => {
            const index = companies.findIndex(elem => elem.id === company.id);
            const newArr = [...companies.slice(0, index), newItem, ...companies.slice(index + 1)];
            return {
                companies: newArr
            }
        });
    }

    get companiesShownList() {
        const allCompanies = this.state.companies;
        const searchString = this.state.search;

        if (searchString.lenght === 0) {
            return allCompanies
        }
        return allCompanies.filter(item => {
            return item.name.indexOf(searchString) > -1
        });
    }  

    onUpdateSearch(search) {
        this.setState({search})
    };

    render() {
        return (
            <div>
                <CompanyForm
                    onAdd={this.addItem}
                    company={this.company}                   
                />
                <div className='d-flex'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                </div>
                {this.companiesShownList.map(company =>
                    <CompanyListItem
                        key={company.id}
                        company={company}
                        onDelete={this.deleteItem}
                        onEdit={this.editItem}                        
                    />
                )};
            </div>
        );
    };
};
