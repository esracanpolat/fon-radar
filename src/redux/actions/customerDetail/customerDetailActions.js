import * as actionTypes from "../customerDetail/customerDetailActionTypes";

export function CustomerDetail(customer) {
    console.log(customer);
    return {
        type: actionTypes.GET_CUSTOMERS_BY_ID,
        payload: customer
    }
}