import * as actionTypes from "../actions/users/userActionTypes";
const initialState = {
    users: [],
    message: null
}

export default function usersReducer(state = initialState, action) {
    var newCustomers;
    switch (action.type) {

        case actionTypes.GET_ALL_USERS:
            return { users: action.payload.data, message: action.payload.statusText };

        default:
            return state;
    }
}