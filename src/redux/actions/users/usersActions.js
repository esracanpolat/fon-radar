import * as actionTypes from "../users/userActionTypes";

export function GetAllUsersApi(users) {
    return {
        type: actionTypes.GET_ALL_USERS,
        payload: users
    };
}