import { combineReducers } from 'redux';
import OrderListReducer from './reducerList';
import OrderAddReducer from './reducerAdd';
import OrderActiveReducer from './reducerActiveOrder';

const rootReducer = combineReducers({
	order_list: OrderListReducer,
	order_add: OrderAddReducer,
	active_orders: OrderActiveReducer
});

export default rootReducer;