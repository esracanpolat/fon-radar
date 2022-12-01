import * as actionCreators from "../actions/users/usersActions";
import axiosInstance from "./axiosInstance";

export function getUsersApiRequest() {
    return async (dispatch) => {
        axiosInstance.get("/users")
            .then((data) => {
                dispatch(actionCreators.GetAllUsersApi(data))
            }).catch((error) => {
                console.log(error.message, "error");
            });
    };
}