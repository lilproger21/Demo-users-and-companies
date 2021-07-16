import React, {Component} from 'react';

import {UsersList} from '../users-list/users-list.js';
import {SearchPanel} from 'components/search-panel/search-panel.js';
import { UserForm } from 'components/user-form/user-form.js';

import './index.css'



const date = [
            { companyId: 123456789, firstName: 'John', lastName: 'Frederick', email: 'email@email.com', gender: 'MALE', role: 'ADMIN', id: 123},
            { companyId: 123468789, firstName: 'Jofghfhn', lastName: 'Fredgfherick', email: 'emaighgl@email.com', gender: 'MALE', role: 'ADMIN', id: 1321},
            { companyId: 457657765, firstName: 'ghf', lastName: 'Fredefghrick', email: 'emaghil@email.com', gender: 'MALE', role: 'ADMIN', id: 543},
]
export class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date,
            search: ''
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.maxId = 4
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

    addItem({companyId, firstName, lastName, email, gender, role}) {
        const newItem = {
            companyId,
            firstName,
            lastName,
            email,
            gender,
            role,
            id: this.maxId++
        }
        this.setState(({date}) => {
            return {
                date:  [...date, newItem]
            }
        })
    }

    editItem({ companyId, firstName, lastName, email, gender, role, id}) {
        const newItem = {
            companyId,
            firstName,
            lastName,
            email,
            gender,
            role,
            id: this.maxId++
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

    searchPost(items, search) {
        if (search.lenght === 0) {
            return items
        }

        return items.filter( (item) => {
            return item.firstName.indexOf(search) > -1
        });
    }

    onUpdateSearch(search) {
        this.setState({search});
    }

    render() {

        const {date, search} = this.state;

        const visiblePosts = this.searchPost(date, search);

        return (
            <div className='add-form'>
                <UserForm 
                    onAdd={this.addItem}
                    date={date}
                />
                <div className='d-flex'>
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}/>                
                </div>

                <UsersList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onEdit={this.editItem}
                />
            </div>
        );
    }
}
