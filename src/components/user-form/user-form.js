import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css';
    
export class UserForm extends Component  {  
    constructor(props) {
        super(props);
        this.isEdit = !!props.user;
        this.state = {
            companyId: props.companyId || '',
            firstName: props.firstName || '',
            lastName: props.lastName || '',
            email: props.email || '',
            gender: props.gender || '',
            role: props.role || '',
        };
        this.onCompanyIdChange = this.onCompanyIdChange.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.onRoleChange = this.onRoleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    };

    onCompanyIdChange(e) {
        this.setState({
            companyId: e.target.value
        });
    }

    onFirstNameChange(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onLastNameChange(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onGenderChange(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onRoleChange(e) {
        this.setState({
            role: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault()
        this.isEdit ? this.props.onEdit(this.state) : this.props.onAdd(this.state)
        this.setState({
            companyId: '',
            firstName: '',
            lastName: '',
            email: '',
            gender: {
                female: 'FEMALE',
                male: 'MALE'
            },
            role: ''
        });
    };  

    render() {
        return (
            <div>
                <form 
                    className='bottom-panel d-flex'
                    onSubmit={this.onSubmit}
                >
                    <input
                        type='number'
                        name="companyId"
                        placeholder='companyId '
                        className='form-control new-post-label'
                        onChange={this.onCompanyIdChange}
                        value={this.state.companyId}
                    />
                    <input
                        type='text'
                        name="firstName"
                        placeholder='First Name'
                        minLength="2"
                        maxLength="20"
                        className='form-control new-post-label'
                        required
                        onChange={this.onFirstNameChange}
                        value={this.state.firstName}
                    />
                    <input
                        type='text'
                        name="lastName"
                        maxLength="15"
                        placeholder='Last Name'
                        className='form-control new-post-label'
                        onChange={this.onLastNameChange}
                        value={this.state.lastName}
                        
                    />
                    <input
                        type='text'
                        name="email"
                        placeholder='Email'
                        className='form-control new-post-label'
                        onChange={this.onEmailChange}
                        value={this.state.email}
                        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    />
                    <div>
                        <p>
                            <input
                                type='radio'
                                name="gender"
                                value={this.state.gender.female}
                                onChange={this.onGenderChange}
                            />
                            Woman
                        </p>
                        <p>
                            <input
                                type='radio'
                                name="gender"
                                value={this.state.gender.male}
                                onChange={this.onGenderChange}
                            />
                            Man
                        </p>
                    </div>
                    <div>
                        <p>Role</p>
                        <select name='role' required
                            onChange={this.onRoleChange}
                            value={this.state.role}>
                            <option value='USER'>USER</option>
                            <option value='ADMIN'>ADMIN</option>
                            <option value='ROOT'>ROOT</option>
                        </select>
                    </div>
                    <Button type='submit' variant="primary">{this.isEdit ? 'Edit' : 'Add'}</Button>
                </form>
            </div>
        );
    };
};
