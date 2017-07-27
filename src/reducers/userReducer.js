import _ from 'underscore';

const initialState = {
    users               : [],
    selectedUsersId     : [],
    selectedUserCounter : 0
};

let usersId, filteredUserList = [];

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'USER_LIST_SUCCESS':
            return { ...state, users : action.users };
        case 'USER_SELECTED':
            // Add id to array
            usersId = _.uniq(state.selectedUsersId.concat(action.uid));
            return { ...state, selectedUsersId : usersId };
        case 'USER_DESELECTED':
            // Remove from array deselected elements
            usersId = _.uniq(_.without(state.selectedUsersId, action.uid));
            return { ...state, selectedUsersId : usersId };
        case 'USER_LIST_FILTER':
            // Filter array of results
            if (usersId) {
                filteredUserList = state.users.filter((e) => usersId.indexOf(e.id) > -1);
            }
            return { ...state, users : filteredUserList };

        default:
            return state;

    }


}

export default userReducer;