export default function getOrderState(state, action) {
	const INIT_STATE = {
	  	'newOrder': {
	  		'orderNo': '',
	  		'orderName': '',
	  		'orderTotal': '',
	  		'orderDate': ''
	  	}
	}
	return INIT_STATE;
}
// { orderNo: 'O10025263256', orderName: "Order1", orderTotal: 15800, orderDate: "2016-09-26" }, { orderNo: 'O10025263267', orderName: "Order2", orderTotal: 98563, orderDate: "2016-09-27" }