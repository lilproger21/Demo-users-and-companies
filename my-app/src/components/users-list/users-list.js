import React from 'react';

import UsersListItem from '../users-list-item/users-list-item.js';

const UsersList = ({ posts, onDelete }) => (
    <div>
        {posts.map(({ id, ...itemProps }) =>
            <UsersListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
            />
        )}
    </div>
)


export default UsersList;
