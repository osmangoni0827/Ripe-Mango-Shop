import counterReducer from './counter'
import isLoggedReducer from './isLogged'
import {combineReducers} from 'redux'
import OrderCountReducer from './orderCount';

const allReducer = combineReducers({
    counter : counterReducer,
    TotalOrder : OrderCountReducer,
    logged : isLoggedReducer
})
export default allReducer;