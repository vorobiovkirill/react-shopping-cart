import { Button, Card, Icon, Image } from 'semantic-ui-react';
import React, { Component } from 'react';

import PropTypes from 'prop-types';

class CartItem extends Component {

	constructor(props) {
		super(props);
		this.removeFromCart = this.removeFromCart.bind(this);
	}

	removeFromCart(e) {
		e.preventDefault();
		this.props.removeItemFromCart();
		console.log('REMOVE FROM CART');
	}

	render() {

		const {
			modelName,
			price,
		} = this.props;

		return (
			<li>
				<Card className="cart-item-card">
					<Card.Content>
						<a href="#" onClick={this.removeFromCart}>X</a>
						<span className="cart-item__name"><strong>Model:</strong> {modelName}</span>
						<span className="cart-item__price"><strong>Price:</strong> {price}</span>
					</Card.Content>
				</Card>
			</li>
		);
	}
}

CartItem.propTypes = {
	modelName: PropTypes.string,
	img: PropTypes.string,
	price: PropTypes.number,
};

export default CartItem;
