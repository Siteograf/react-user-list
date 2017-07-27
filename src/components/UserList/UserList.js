import React, { Component } from 'react';


import UserListItem from './UserListItem';


class UserList extends Component {

    render() {
        return (
            <div>
                {this.props.users.map(user => <UserListItem key={user.id} item={user}/>)}
            </div>
        );
    }
}
export default UserList;

UserList.defaultProps = {
    users : [],
};