import React, { Component } from 'react';
// import { connect } from 'react-redux';
import store from '../../store';

class UserListButton extends Component {

    submitConfirmBtn() {
        console.log(1);

        store.dispatch({
            type : 'USER_LIST_FILTER',
            // users
        });
    }

    render() {
        return (
            <button className="btn btn-primary"
                    onClick={this.submitConfirmBtn.bind(this)}>Confirm</button>
        )
    }
}

export default UserListButton;
