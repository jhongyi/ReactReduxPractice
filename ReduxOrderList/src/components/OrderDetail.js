import React, { Component } from 'react';

export default class OrderDetail extends Component {
  render() {
    if (!this.props.orders) {
      return <div>請選擇一筆資料檢視</div>;
    }

    return (
      <div>
        <h3>訂單詳細資料</h3>
        <div>訂單編號: {this.props.orders.orderNo}</div>
        <div>訂單名稱: {this.props.orders.orderName}</div>
        <div>訂單金額: {this.props.orders.orderTotal}</div>
        <div>訂單日期: {this.props.orders.orderDate}</div>
      </div>
    );
  }
}