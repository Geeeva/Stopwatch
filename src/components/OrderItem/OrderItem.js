import React, { Component } from 'react';
import './OrderItem.css';

class OrderItem extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
		}
	}
	render() {
		return (
			<div className={"order-item" + (this.props.active ? ' active' : '')} onClick={this.props.clicked}>
				<div className="circle"></div>
				<span>{this.props.name}</span> <span><b>{this.props.price}{'\u20AC'}</b></span>

			</div>

		)
	}
}

export default OrderItem;