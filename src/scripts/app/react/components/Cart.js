import { Button, Card, Icon, Image, Message } from 'semantic-ui-react';
import React, { Component } from 'react';

import CartItem from './CartItem';
import PropTypes from 'prop-types';

class Cart extends Component {

	constructor(props) {
		super(props);
		this.removeAll = this.removeAll.bind(this);
	}

	state = {
		cartMessage: 'Your Cart is Empty',
		currancy: 'EUR',
	}

	removeAll() {
		this.props.removeAllItemsFromCart();
		console.log('REMOVE ALL ITEMS FROM CART');
	}

	render() {
		const cart = this.props.cart;

		const carsItem = cart.map((item, index) => {
			return (
				<CartItem
					key={item.id}
					{...item}
					removeItemFromCart={() => this.props.removeItemFromCart(item.id)}
				/>
			);
		});

		return (
			<div className="cart-list" >
				<h2>My Order</h2>

				<div className="row cart-list--head">
					<p>Items in Cart: {cart.length}</p>
				</div>

				<div className="row cart-list--body">
					<ul>
						{cart.length === 0 &&
							<Message
								icon="shopping cart"
								content={this.state.cartMessage}
							/>
						}
						{carsItem}
					</ul>
				</div>

				<div className="row cart-list--footer">
					<Button
						color="teal"
						content="Очистить корзину"
						type="button"
						className="btn clear-cart"
						onClick={this.removeAll}
					/>
					<span className="total-sum">
						{this.props.totalPrice} {this.state.currancy}
					</span>

				</div>

			</div>
		);
	}
}

Cart.propTypes = {
	items: PropTypes.array,
	modelName: PropTypes.string,
	price: PropTypes.number,
};

export default Cart;
