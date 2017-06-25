import React, { Component } from 'react';
import UserListCounter from './UserListCounter';
import UserList from './UserList';
import UserListButton from './UserListButton';

class Users extends Component {

    render() {
        return (
            <div>
                <UserListCounter/>
                <UserList/>
                <UserListButton/>
            </div>
        );
    }
}

export default Users;