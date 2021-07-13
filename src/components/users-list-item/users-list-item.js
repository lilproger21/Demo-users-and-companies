import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import UsersEditForm from 'components/users-edit-form/users-edit-form'; 


export default class UsersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditForm: false,
            selectedPost: {

            }
        };
        this.handleEditFormShow = this.handleEditFormShow.bind(this);
        this.handleEditFormHide = this.handleEditFormHide.bind(this);
    }

    handleEditFormShow = () => {
        this.setState({
            showEditForm: true,
        });
    }

    handleEditFormHide = () => {
        this.setState({
            showEditForm: false,
        });
    }
    

    render() {
        const { companyId, firstName, lastName, email, gender, role, id, onDelete} = this.props
        return (
            <div className='list-group-item d-block'>
                <ul key={id} className='ClassName'>
                    <li className='info'>companyId:{companyId}</li>
                    <li className='info'>firstName:{firstName}</li>
                    <li className='info'>lastName:{lastName}</li>
                    <li className='info'>email:{email}</li>
                    <li className='info'>gender:{gender}</li>
                    <li className='info'>role:{role}</li>
                </ul>
                <button
                    type='button'
                    className='btn-trash btn-sm'
                    onClick={onDelete}>                    
                    <i className='fa fa-trash-o'></i>
                </button>
                <button className='edit-button' onClick={this.handleEditFormShow}>
                    <EditIcon />
                </button>
                {this.state.showEditForm && (
                    <UsersEditForm
                        handleEditFormHide={this.handleEditFormHide}
                        companyId={companyId}
                        firstName={firstName}
                        lastName={lastName}
                        email={email}
                        gender={gender}
                        role={role}/>
                )}
            </div>
        );
    }
}


