export default function getOrderState(state = INIT_STATE, action) {
	let newState = Object.assign({}, state);
	switch(action.type) {
		case "ORDER_INIT":
			newState.orders = action.payload;
			return newState;
		case "ORDER_SELECTED":
			return state;
		case "ORDER_ADD":
			newState.orders.push(action.payload);
			return newState;
		default:
			return state;
	}
}

const INIT_STATE = {
  	'orders': []
}

// { orderNo: 'O10025263256', orderName: "Order1", orderTotal: 15800, orderDate: "2016-09-26" }, { orderNo: 'O10025263267', orderName: "Order2", orderTotal: 98563, orderDate: "2016-09-27" }