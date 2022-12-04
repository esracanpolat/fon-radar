import * as actionTypes from "../actions/customerDetail/customerDetailActionTypes";
const initialState = {
    message: null,
    customerDetail: null
}
export default function customerDetailReducer(state = initialState, action) {
    var newCustomer;
    switch (action.type) {
        case actionTypes.GET_CUSTOMERS_BY_ID:
            newCustomer = action.payload.data
            return { message: action.payload.statusText, customerDetail: newCustomer };
        default:
            return state;
    }
}