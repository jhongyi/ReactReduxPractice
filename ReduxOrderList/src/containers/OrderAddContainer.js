import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../action/index';
import { bindActionCreators } from 'redux';
import OrderAdd from '../components/OrderAdd';


function mapStateToProps(state) {
  return {
    order_add: state.order_add
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addOrder: addOrder }, dispatch);
}

const OrderAddContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderAdd);

export default OrderAddContainer;