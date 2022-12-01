import * as actionCreators from "../actions/customers/customersActions";
import axiosInstance from "./axiosInstance";

export function deleteCustomerApiRequest(id) {
    return async (dispatch) => {
        axiosInstance.delete("/customers/" + id)
            .then((data) => {
                dispatch(actionCreators.CustomersRemove(id))
            }).catch((error) => {
                console.log(error.message, "error");
            });
    };
}
export function getCustomerApiRequest() {
    return async (dispatch) => {
        axiosInstance.get("/customers")
            .then((data) => {
                dispatch(actionCreators.GetAllCustomersApi(data))
            }).catch((error) => {
                console.log(error.message, "error");
            });
    };
}
export function getCustomerByIdApiRequest(id) {
    return async (dispatch) => {
        axiosInstance.get("/customers/" + id)
            .then((data) => {
                dispatch(actionCreators.GetAllCustomerByIdApi(data))
            }).catch((error) => {
                console.log(error.message, "error");
            });
    };
}