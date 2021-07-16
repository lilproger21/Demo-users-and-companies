import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import './company-form.css'

export class CompanyForm extends Component{
    constructor(props) {
        super(props);
        this.isEdit = !props.date;
        this.state = {
            name: props.name || '',
            address: props.address || '',
            phonesNumber: props.phonesNumber || '',
            site: props.site || '',
            description: props.description || '',
        };
        this.onName = this.onName.bind(this);
        this.onAddress = this.onAddress.bind(this);
        this.onPhonesNumber = this.onPhonesNumber.bind(this);
        this.onSite = this.onSite.bind(this);
        this.onDescription = this.onDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onName(e) {
        this.setState({
            name: e.target.value
        })
    };
    onAddress(e) {
        this.setState({
            address: e.target.value
        })
    };
    onPhonesNumber(e) {
        this.setState({
            phonesNumber: e.target.value
        })
    }
    onSite(e) {
        this.setState({
            site: e.target.value
        })
    }
    onDescription(e) {
        this.setState({
            description: e.target.value
        })
    }   


    onSubmit(e) {
        e.preventDefault()
        this.isEdit ? this.props.onEdit(this.state) : this.props.onAdd(this.state)
        this.setState({
            name: '',
            address: '',
            phonesNumber: '',
            site: '',
            description: ''
        });
    }


    render() {
        return (
            <div>
                <form className='companies-form' onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        minLength="2"
                        maxLength="30"
                        className='first-place'
                        onChange={this.onName}
                        value={this.state.name}
                    />
                    <input
                        type='number'
                        name='number'
                        minLength="7"
                        maxLength="17"
                        placeholder='Phone number'
                        className='first-place'
                        onChange={this.onPhonesNumber}
                        value={this.state.phonesNumber}
                    />
                    <input
                        type='text'
                        name='address'
                        placeholder='Address'
                        maxLength="40"
                        className='second-place'
                        onChange={this.onAddress}
                        value={this.state.address}
                    />

                    <input
                        type='text'
                        name='webSite'
                        placeholder='Web Site'
                        className='second-place'
                        onChange={this.onSite}
                        value={this.state.site}
                        required
                    />
                    <input
                        type='text'
                        name='description'
                        maxLength="400"
                        placeholder='Description'
                        className='last-place'
                        onChange={this.onDescription}
                        value={this.state.description}
                    />
                    <Button type='submit' variant="primary">{this.isEdit ? 'Edit' : 'Add'}</Button>
                </form>
            </div>
        );
    };
};
