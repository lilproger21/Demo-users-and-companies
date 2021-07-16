import React from 'react';

import {UsersListItem} from '../users-list-item/user-list-item.js';

export const UsersList = ({ posts, onDelete, onEdit }) => (
    <div>
        {posts.map(({ id, ...itemProps }) =>
            <UsersListItem
                {...itemProps}
                key={id}                
                onDelete={() => onDelete(id)}
                onEdit={onEdit}
            />
        )}
    </div>
)
