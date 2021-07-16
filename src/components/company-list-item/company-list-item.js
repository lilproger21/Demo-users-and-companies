import React, {Component} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { CompanyForm } from 'components/company-form/company-form';

export class CompaniesListItem extends Component {
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
        const { name, address, phonesNumber, site, description, onDelete, onEdit } = this.props
        return (
            <div className='list-group-item d-block'>
                <ul className='info-list'>
                    <li className='name'>{name}</li>
                    <li className='address'>{address}</li>
                    <li className='phonesNumber'>{phonesNumber}</li>
                    <li className='site'>{site}</li>
                    <li className='description'>{description}</li>

                </ul>
                <button
                    type='button'
                    className='btn-trash btn-sm'
                    onClick={onDelete}>
                    <i className='fa fa-trash-o'></i>
                </button>
                <button className='edit-button' onClick={this.handleEditFormShow} >
                    <EditIcon />
                </button>
                {this.state.showEditForm && (
                    <CompanyForm
                        handleEditFormHide={this.handleEditFormHide}
                        name={name}
                        address={address}
                        phonesNumber={phonesNumber}
                        site={site}
                        description={description}
                        onEdit={onEdit}
                    />
                )}
            </div>
        );
    }
}
