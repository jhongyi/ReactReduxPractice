import axios from 'axios';
import qs from 'qs';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function initOrder() {
	return function(dispatch) {
		axios.post('http://localhost:8082/order/get_order')
		.then(response => {
			dispatch({
				type: "ORDER_INIT",
				payload : getOrders(response)
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}
}

export function selectOrder(order) {
	return {
		type: "ORDER_SELECTED",
		payload: order
	}
}

export function addOrder(newOrder) {
	var data = {
		order_no: newOrder.orderNo,
		order_name: newOrder.orderName,
		order_total: newOrder.orderTotal,
		order_date: newOrder.orderDate
	}
	return function(dispatch) {
		axios.post('http://localhost:8082/order/add_order', qs.stringify(data))
		.then(response => {
			dispatch({
				type: "ORDER_ADD",
				payload : newOrder
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}
	/*return {
		type: "ORDER_ADD",
		payload: newOrder
	}*/
}

export function editOrder(editOrder) {
	var data = {
		order_no: editOrder.orderNo,
		order_name: editOrder.orderName,
		order_total: editOrder.orderTotal,
		order_date: editOrder.orderDate
	}
	return function(dispatch) {
		axios.post('http://localhost:8082/order/edit_order', qs.stringify(data))
		.then(response => {
			dispatch({
				type: "ORDER_INIT",
				payload : getOrders(response)
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}
}

export function deleteOrder(orderNo) {
	return function(dispatch) {
		axios.get('http://localhost:8082/order/delete_order', {
			params: {
				order_no: orderNo
			}
		})
		.then(response => {
			dispatch({
				type: "ORDER_INIT",
				payload : getOrders(response)
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}
}

function getOrders(orderList) {
	let orders = new Array();
  	for(var i=0; i<orderList.data.length; i++) {
  		orders.push(orderList.data[i])
  	}
  	return orders;
}