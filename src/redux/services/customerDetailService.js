import * as actionCreators from "../actions/customerDetail/customerDetailActions";
import axiosInstance from "./axiosInstance";

export function getCustomerByIdApiRequest(id) {
    return async (dispatch) => {
        axiosInstance.get("/customers/" + id)
            .then((data) => {
                dispatch(actionCreators.CustomerDetail(data))
            }).catch((error) => {
                console.log(error.message, "error");
            });
    };
}