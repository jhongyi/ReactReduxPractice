import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderDetail from '../components/OrderDetail';

function mapStateToProps(state) {
  return {
    orders: state.active_orders
  };
}

const OrderDetailContainer = connect(
  mapStateToProps
)(OrderDetail)

export default OrderDetailContainer;