import { combineReducers } from 'redux'
import customerDetailReducer from './customerDetailReducer';
import customerReducer from './customerReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    customers: customerReducer,
    users: usersReducer,
    customerDetail: customerDetailReducer
});

export default rootReducer;