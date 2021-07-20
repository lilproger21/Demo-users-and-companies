import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';

import { UserForm } from 'components/user-form/user-form';

export class UsersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditForm: false,
            selectedPost: {

            }
        };
        this.handleEditFormShow = this.handleEditFormShow.bind(this);
        this.handleEditFormHide = this.handleEditFormHide.bind(this);
    };

    handleEditFormShow = () => {
        this.setState({
            showEditForm: true,
        });
    };

    handleEditFormHide = () => {
        this.setState({
            showEditForm: false,
        });
    };    

    render() {
        const { user, onDelete, onEdit} = this.props
        return (
            <div className='list-group-item d-block'>
                <ul className='info-list'>
                    <li className='info'>companyId:{user.companyId}</li>
                    <li className='info'>firstName:{user.firstName}</li>
                    <li className='info'>lastName:{user.lastName}</li>
                    <li className='info'>email:{user.email}</li>
                    <li className='info'>gender:{user.gender}</li>
                    <li className='info'>role:{user.role}</li>
                </ul>
                <button
                    type='button'
                    className='btn-trash btn-sm'
                    onClick={() => onDelete(user.id)}
                >                    
                    <i className='fa fa-trash-o'></i>
                </button>
                <button className='edit-button' onClick={this.handleEditFormShow}>
                    <EditIcon />
                </button>
                {this.state.showEditForm && (
                    <UserForm
                        user={user}
                        handleEditFormHide={this.handleEditFormHide}
                        companyId={user.companyId}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                        gender={user.gender}
                        role={user.role}
                        onEdit={() => onEdit(user.id)}
                    />
                )};
            </div>
        );
    };
};
