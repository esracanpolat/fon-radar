import * as actionTypes from "../actions/customers/customersActionTypes";
const initialState = {
    customers: [],
    message: null,
    filterTodos: null
}

export default function customerReducer(state = initialState, action) {
    var newCustomers;
    switch (action.type) {
        case actionTypes.CUSTOMER_ADD:
            newCustomers = [...state.customers, action.payload];
            return { customers: newCustomers, message: newCustomers };
        case actionTypes.CUSTOMER_REMOVE:
            newCustomers = state.customers.filter((item) => {
                return item.id !== action.payload.id
            });
            return { customers: newCustomers };

        case actionTypes.CUSTOMER_SEARCH:
            const newCustomer = state.customers.filter((item) =>
                item.companyName.includes(action.payload)
            ).filter((item) => {
                item.taxNumber.includes(action.payload)
                console.log(item.taxNumber.includes(action.payload), "item.taxNumber.includes(action.payload)");
            });

            console.log(newCustomer, "taxNumber");
            return { customers: state.customers, message: state.filterTodos };
        case actionTypes.GET_ALL_CUSTOMERS:
            console.log(action.payload.data, "action payload");
            return { customers: action.payload.data, message: action.payload.statusText };
        case actionTypes.GET_CUSTOMERS_BY_ID:
            return { message: action.payload.statusText, filterTodos: action.payload.data };

        default:
            return state;
    }
}