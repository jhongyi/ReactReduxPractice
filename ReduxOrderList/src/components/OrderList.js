import React, { Component } from 'react';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

export default class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      oldEditOrder: {
        orderNo: '',
        orderName: '',
        orderTotal: '',
        orderDate: ''
      }
    }
  }
  componentWillMount() {
    this.props.initOrder();
  }

  openModal = (order) => {
    this.setState({
      isOpen: true,
      oldEditOrder: {
        orderNo: order.orderNo,
        orderName: order.orderName,
        orderTotal: order.orderTotal,
        orderDate: order.orderDate
      }
    });
  }
  hideModal = () => {
    this.setState({
      isOpen: false
    });
  }
  changeOrderName = (orderName) => {
    this.setState({oldEditOrder: {...this.state.oldEditOrder, orderName}});
  }
  changeOrderTotal = (orderTotal) => {
    this.setState({oldEditOrder: {...this.state.oldEditOrder, orderTotal}});
  }
  changeOrderDate = (orderDate) => {
    this.setState({oldEditOrder: {...this.state.oldEditOrder, orderDate}});
  }
  editOrder = (oldEditOrder) => {
    this.props.editOrder(oldEditOrder)
    this.hideModal();
  }
  renderList() {
      return this.props.orders.map((order) => {
        return (
          <tr key={order.orderNo} onClick={() => this.props.selectOrder(order)}>
            <td>{order.orderNo}</td>
            <td>{order.orderName}</td>
            <td>{order.orderTotal}</td>
            <td>{order.orderDate}</td>
            <td>
              <button type="button" className="btn btn-info" onClick={() => this.openModal(order)}>修改</button> &nbsp;
              <button type="button" className="btn btn-danger" onClick={() => this.props.deleteOrder(order.orderNo)}>刪除</button>
            </td>
          </tr>
        );
      });
  }

  render() {
    return (
      <div>
        <table id="tableTest" className="table">
          <tbody>
            <tr>
              <th>訂單編號</th>
              <th>訂單名稱</th>
              <th>訂單金額</th>
              <th>訂單日期</th>
              <th>功能</th>
            </tr>
            {this.renderList()}
          </tbody>
        </table>
        <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalClose onClick={this.hideModal}/>
            <ModalTitle>修改訂單</ModalTitle>
          </ModalHeader>
          <ModalBody>
              <div>
                訂單編號 {this.state.oldEditOrder.orderNo}<br />
                訂單名稱 <input type="text" className="form-control" value={this.state.oldEditOrder.orderName} onChange={(e) => this.changeOrderName(e.target.value)} /><br />
                訂單金額 <input type="text" className="form-control" value={this.state.oldEditOrder.orderTotal} onChange={(e) => this.changeOrderTotal(e.target.value)} /><br />
                訂單日期 <input type="date" className="form-control" value={this.state.oldEditOrder.orderDate} onChange={(e) => this.changeOrderDate(e.target.value)} /><br />
              </div>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-default' onClick={this.hideModal}>
              關閉
            </button> &nbsp;
            <button className='btn btn-primary' onClick={() => this.editOrder(this.state.oldEditOrder)}>
              修改
            </button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}