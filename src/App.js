import React, { Component } from 'react';
import UserListContainer from './components/UserList/UserListContainer';
import './css/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <UserListContainer/>
            </div>
        );
    }
}

export default App;
