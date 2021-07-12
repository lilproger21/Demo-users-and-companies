import React from 'react';

import CompaniesListItem from '../company-list-item/companies-list-item.js';

//TODO: PostListCompany => CompanysList

const CompaniesList = ({ posts, onDelete }) => (
    <div>
        {posts.map(({ id, ...itemProps }) =>
            <CompaniesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
            />
        )}
    </div>
)

export default CompaniesList;