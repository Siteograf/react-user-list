import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import store from '../../store'
import UserListItem from './UserListItem';
import _ from 'underscore';

class UserList extends Component {

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                    // Sort by name
                    const users = _.sortBy(response.data, 'name');

                    console.log(users);

                    store.dispatch({
                        type : 'USER_LIST_SUCCESS',
                        users
                    });
                }
            )
            .catch(function (response) {
                console.log(response);
            });
    }

    render() {
        return (
            <div>
                {this.props.users.map(user => <UserListItem key={user.id} item={user}/>)}
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        users : store.userState.users
    };
}

export default connect(mapStateToProps)(UserList);