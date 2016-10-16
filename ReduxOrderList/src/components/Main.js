import React from 'react';
import { Component } from 'react';

import OrderListContainer from '../containers/OrderListContainer';
import OrderDetailContainer from '../containers/OrderDetailContainer';
import OrderAddContainer from '../containers/OrderAddContainer';

export default class Main extends Component {
	render() {
		return (
		  <div>
			  <div>
			  	<OrderListContainer />
			  </div>
			  <div style={{float: 'left'}}>
			    <OrderDetailContainer />
			  </div>
			  <div style={{float: 'right', width: '70%'}}>
			    <OrderAddContainer />
			  </div>
		  </div>
		);
	}
}