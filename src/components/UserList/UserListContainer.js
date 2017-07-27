import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import axios from 'axios';

// import store from '../../store';
import { getUserList }  from '../../actions'

import UserList from './UserList';

const mapStateToProps = (state) => {
    console.log(state);

    return {
        users : state.userState.users
    };
}

const mapDispatchToProps = (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response => {
                // Sort by name
                const users = _.sortBy(response.data, 'name');
                // console.log(users);
                dispatch(getUserList(users));
            }
        )
        .catch(function (response) {
            console.log(response);
        });

    return {
       // users : store.userState.users
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

