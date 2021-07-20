import React, {Component} from 'react';

import {UsersListItem} from 'components/users-list-item/user-list-item';
import {SearchPanel} from 'components/search-panel/search-panel.js';
import {UserForm} from 'components/user-form/user-form.js';

import './index.css'

const users = [
            { companyId: 123456789, firstName: 'John', lastName: 'Frederick', email: 'email@email.com', gender: 'MALE', role: 'ADMIN', id: 1},
            { companyId: 123468789, firstName: 'Jofghfhn', lastName: 'Fredgfherick', email: 'emaighgl@email.com', gender: 'MALE', role: 'ADMIN', id: 2},
            { companyId: 457657765, firstName: 'ghf', lastName: 'Fredefghrick', email: 'emaghil@email.com', gender: 'MALE', role: 'ADMIN', id: 3},
];
const user = {
    companyId: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    role: '',
    id: ''
};

export class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users,
            user,
            search: ''
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.usersShownList = this.usersShownList.bind(this);
        this.maxId = 4
    };

    deleteItem(id) {
        this.setState(({users}) => {
            const index = users.findIndex(elem => elem.id === id);

            const before = users.slice(0, index);
            const after = users.slice(index + 1);
            const newArr = [...before, ...after];
            return {
                users: newArr
            };
        });
    };

    addItem(user) {
        user.id = this.maxId++
        const newItem = user
        this.setState(({users}) => {
            return {
                users:  [...users, newItem]
            };
        });
    };

    editItem(user) {
        user.id = this.maxId++
        const newItem = user;
        this.setState(({users}) => {
            const index = users.findIndex(elem => elem.id === user.id);

            const before = users.slice(0, index);
            const after = users.slice(index + 1);
            
            const newArr = [...before, newItem, ...after];
            return {
                users: newArr
            };
        });
    }

    usersShownList() {
        const allUsers = this.state.users;
        const searchString = this.state.search;

        if (searchString.lenght === 0) {
            return allUsers
        }
        return allUsers.filter( item => {
            return item.firstName.indexOf(searchString) > -1
        });
    }  

    onUpdateSearch(search) {
        this.setState({search});
    }

    render() {
        const usersShownList = this.usersShownList();
        return (
            <div className='add-form'>
                <UserForm 
                    onAdd={this.addItem}
                    user={this.user}
                />
                <div className='d-flex'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>                
                </div>
                {usersShownList.map(({...user}) =>
                    <UsersListItem
                        key={user.id}
                        onDelete={this.deleteItem}
                        onEdit={this.editItem}
                        user={user}
                    />
                )};
            </div>
        );
    };
};
