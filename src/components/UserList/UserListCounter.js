import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserListCounter extends Component {

    counter() {
        if (this.props.selectedUsersId.length > 0) {
            return `${this.props.selectedUsersId.length} of ${this.props.count} selected`;
        }
        return '';
    }

    render() {
        console.log(this.props.selectedUsersId);
        return (
            <span>{this.counter()}</span>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        count           : store.userState.users.length,
        selectedUsersId : store.userState.selectedUsersId,
    };
};

export default connect(mapStateToProps)(UserListCounter);