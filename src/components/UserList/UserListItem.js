import React, { Component } from 'react';
// import { connect } from 'react-redux';
import store from '../../store';

class UserListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked : false,
        };
    }

    checkboxOnChange() {
        if (this.state.checked) {
            this.setState({ checked : false });
            store.dispatch({
                type : 'USER_DESELECTED',
                uid: this.props.item.id
            });
        } else {
            this.setState({ checked : true });
            store.dispatch({
                type : 'USER_SELECTED',
                uid: this.props.item.id
            });
        }
    }

    render() {
        return (
            <div className="ListItem">
                <div className="checkboxWrapper">
                    <input type="checkbox"
                           className="cb"
                           checked={this.state.checked}
                           onChange={this.checkboxOnChange.bind(this)}
                    />
                </div>
                <div className="userDataWrapper">
                    <div className="name">
                        {this.props.item.name}
                    </div>

                    <div className="email">
                        {this.props.item.email}
                    </div>
                </div>
            </div>
        );
    }

}

export default UserListItem;