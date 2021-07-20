import React, {Component} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import {CompanyForm} from 'components/company-form/company-form';

export class CompanyListItem extends Component {
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
    }

    handleEditFormHide = () => {
        this.setState({
            showEditForm: false,
        });
    }

    render() {
        const { company, onDelete, onEdit } = this.props;
        return (
            <div className='list-group-item d-block'>
                <ul className='info-list'>
                    <li className='name'>{company.name}</li>
                    <li className='address'>{company.address}</li>
                    <li className='phonesNumber'>{company.phonesNumber}</li>
                    <li className='site'>{company.site}</li>
                    <li className='description'>{company.description}</li>
                </ul>
                <button
                    type='button'
                    className='btn-trash btn-sm'
                    onClick={() => onDelete(company.id)}
                >
                    <i className='fa fa-trash-o' />
                </button>
                <button className='edit-button' onClick={this.handleEditFormShow}>
                    <EditIcon />
                </button>
                {this.state.showEditForm && (
                    <CompanyForm
                        company={company}
                        handleEditFormHide={this.handleEditFormHide}
                        name={company.name}
                        address={company.address}
                        phonesNumber={company.phonesNumber}
                        site={company.site}
                        description={company.description}
                        onEdit={() => onEdit(company.id)}
                    />
                )};
            </div>
        );
    };
};
