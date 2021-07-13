import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


export class CompanyForm extends Component{
    constructor(props) {
        super(props);
        this.isEdit = !!props.company;
        this.state = {
            name: props.name || '',
            address: props.address || '',
            phonesNumber: props.phonesNumber || '',
            site: props.site || '',
            description: props.description || '',
        }
    }

    submit() {
    //    this.isEdit ? this.editItem() : this.addItem();
        this.isEdit ? this.props.onEdit(this.state) : this.props.onAdd(this.state)
    }

    // addItem({name, address, phonesNumber, site, description}) {
    //     const newItem = {
    //         name,
    //         address,
    //         phonesNumber,
    //         site,
    //         description,
    //         id: this.maxId++    
    //     }
    //     this.setState(({date}) => {
    //         const newArr = [...date, newItem];
    //         return {
    //             date: newArr
    //         }
    //     })
    // }

    // editItem({id, name, address, phonesNumber, site, description}) {
    //     const newItem = {
    //         name,
    //         address,
    //         phonesNumber,
    //         site,
    //         description
    //     }
    //     this.setState(({date}) => {
    //         const index = date.findIndex(elem => elem.id === id);

    //         const before = date.slice(0, index);
    //         const after = date.slice(index + 1);
            
    //         const newArr = [...before, newItem, ...after];
    //         return {
    //             date: newArr
    //         }
    //     });
    // }

  render() {
    return (
      <div>
        <Button type='submit' variant="primary">{this.isEdit ? 'Edit' : 'Add'}</Button>
      </div>
    );
  };
};