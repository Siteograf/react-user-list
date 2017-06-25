import { combineReducers } from 'redux';

// Reducers
import userReducer from './userReducer';

// Combine Reducers
const reducers = combineReducers({
    userState : userReducer,
});

export default reducers;