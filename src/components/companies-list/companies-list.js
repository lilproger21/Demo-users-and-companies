import React from 'react';

import CompaniesListItem from '../company-list-item/companies-list-item.js';

export const CompaniesList = ({ posts, onDelete }) => (
    <div>
        {posts.map(({ id, ...itemProps }) =>
            <CompaniesListItem
                {...itemProps}
                key={id}                
                onDelete={() => onDelete(id)}
            />
        )}
    </div>
)
