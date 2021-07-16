import React from 'react';

import {CompaniesListItem} from '../company-list-item/company-list-item.js';

export const CompaniesList = ({ posts, onDelete, onEdit }) => (
    <div>
        {posts.map(({ id, ...itemProps }) =>
            <CompaniesListItem
                {...itemProps}
                key={id}      
                onEdit={onEdit}          
                onDelete={() => onDelete(id)}                
            />
        )}
    </div>
)
