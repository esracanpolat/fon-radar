import * as actionTypes from "../users/userActionTypes";

export function GetAllUsersApi(users) {
    console.log(users, "usersss");
    return {
        type: actionTypes.GET_ALL_USERS,
        payload: users
    };
}