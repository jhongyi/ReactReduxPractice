import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initOrder, selectOrder, editOrder, deleteOrder } from '../action/index';
import { bindActionCreators } from 'redux';
import OrderList from '../components/OrderList';

function mapStateToProps(state) {
  return {
    orders: state.order_list.orders,
    active_orders: state.active_orders
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    initOrder: initOrder, 
    editOrder: editOrder,
    selectOrder: selectOrder, 
    deleteOrder: deleteOrder
  }, dispatch);
}

const OrderListContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(OrderList);

export default OrderListContainer;