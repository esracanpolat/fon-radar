import { combineReducers } from 'redux'
import customerReducer from './customerReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    customers: customerReducer,
    users: usersReducer
});

export default rootReducer;