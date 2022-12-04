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

export function updateCustomerApiRequest(customer) {
    return async (dispatch) => {
        axiosInstance.put("/customers/" + customer.id, {
            companyName: customer.companyName,
            taxNumber: Number(customer.taxNumber),
            taxOffice: customer.taxOffice,
            invoiceCount: Number(customer.invoiceCount),
            contactNumber: customer.contactNumber
        })
            .then((data) => {
                dispatch(actionCreators.CustomersUpdate(data))
            }).catch((error) => {
                console.log(error.message, "error");
            });
    };
}
export function insertCustomerApiRequest(customer) {
    return async (dispatch) => {
        axiosInstance.post("/customers", customer)
            .then((data) => {
                dispatch(actionCreators.CustomersAdd(data))
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
