import * as actionTypes from "../actions/customers/customersActionTypes";
const initialState = {
    customers: [],
    message: null,
    customerDetail: null,
    filterCustomers: []
}

export default function customerReducer(state = initialState, action) {
    var newCustomers;
    switch (action.type) {
        case actionTypes.CUSTOMER_ADD:
            newCustomers = [action.payload.data, ...state.customers];
            return { customers: newCustomers, message: newCustomers };
        case actionTypes.CUSTOMER_REMOVE:
            newCustomers = state.customers.filter((item) => item.id !== action.payload);
            return { customers: newCustomers };
        case actionTypes.CUSTOMER_UPDATE:
            newCustomers = state.customers.map((item, i) => {
                if (item.id == action.payload.data.id) {
                    return { ...action.payload.data }
                }
                return item
            })

            return { customers: newCustomers };
        case actionTypes.CUSTOMER_SEARCH:
            const newCustomerCompanyName = state.customers.filter((item) =>
                item.companyName.includes(action.payload)
            )
            const newCustomertaxNumberName = state.customers.filter((item) => (item.taxNumber).toString().includes(action.payload));
            const newArray = [...newCustomerCompanyName, ...newCustomertaxNumberName]

            console.log(action.payload, "filterd");
            return { customers: state.customers, message: state.filterTodos, filterCustomers: action.payload ? newArray : state.customers };
        case actionTypes.GET_ALL_CUSTOMERS:
            return { customers: action.payload.data, message: action.payload.statusText };
        default:
            return state;
    }
}