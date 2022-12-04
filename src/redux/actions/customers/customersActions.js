import * as actionTypes from "../customers/customersActionTypes";

export function CustomersAdd(customer) {
    return { type: actionTypes.CUSTOMER_ADD, payload: customer }
}

export function CustomersUpdate(customer) {
    return { type: actionTypes.CUSTOMER_UPDATE, payload: customer }
}
export function CustomersRemove(customer) {
    return {
        type: actionTypes.CUSTOMER_REMOVE,
        payload: customer
    }
}
export function CustomersSearch(customer) {
    return { type: actionTypes.CUSTOMER_SEARCH, payload: customer }
}
//Apiden gelecek todoları bu action ile reducer'a göndereceğiz.
export function GetAllCustomersApi(customers) {
    return {
        type: actionTypes.GET_ALL_CUSTOMERS,
        payload: customers

    };
}

