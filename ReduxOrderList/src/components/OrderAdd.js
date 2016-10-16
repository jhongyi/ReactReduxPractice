import React, { Component } from 'react';

export default class OrderAdd extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'orderNo': this.props.order_add.newOrder.orderNo,
			'orderName': this.props.order_add.newOrder.orderName,
			'orderTotal': this.props.order_add.newOrder.orderTotal,
			'orderDate': this.props.order_add.newOrder.orderDate
		};
	}
	changeOrderNo = (orderNo) => {
		this.setState({orderNo})
	}
	changeOrderName = (orderName) => {
		this.setState({orderName})
	}
	changeOrderTotal = (orderTotal) => {
		this.setState({orderTotal})
	}
	changeOrderDate = (orderDate) => {
		this.setState({orderDate})
	}
	addOrderData = (order) => {
		if(order.orderNo == '' ||
		   order.orderName == '' ||
		   order.orderTotal == '' ||
		   order.orderDate == undefined
		) {
			alert('Some field value is null, please check again.');
			return false;
		}
		this.props.addOrder(order);
		this.setState({
			orderNo: '',
			orderName: '',
			orderTotal: '',
			orderDate: ''
		});
	}
	render() {
		return (
			<div>
				訂單編號 <input type="text" className="form-control" value={this.state.orderNo} onChange={(e) => this.changeOrderNo(e.target.value)} /><br />
				訂單名稱 <input type="text" className="form-control" value={this.state.orderName} onChange={(e) => this.changeOrderName(e.target.value)} /><br />
				訂單金額 <input type="text" className="form-control" value={this.state.orderTotal} onChange={(e) => this.changeOrderTotal(e.target.value)} /><br />
				訂單日期 <input type="date" className="form-control" value={this.state.orderDate} onChange={(e) => this.changeOrderDate(e.target.value)} /><br />
				<button type="button" className="btn btn-primary" onClick={() => this.addOrderData(this.state)}>新增訂單</button>
			</div>
		)
	}
}