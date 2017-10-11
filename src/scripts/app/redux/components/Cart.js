import { Button, Card, Icon, Image, Message } from 'semantic-ui-react';
import React, { Component } from 'react';

import CartItem from './CartItem';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Cart extends Component {

	handleRemoveAll = () => {
		this.props.removeAllItemsFromCart();
	}

	removeItemFromCart = (id) => {
		this.props.removeItemFromCart(id);
	}

	render() {
		const {
			itemsInCart,
			totalPrice,
			cartMessage,
			currency,
		} = this.props;

		const carsItem = _.map(itemsInCart, (item, index) => {
			return (
				<CartItem
					key={item.id}
					{...item}
					removeItemFromCart={() => this.removeItemFromCart(item.id)}
				/>
			);
		});

		return (
			<div className="cart-list" >
				<h2>My Order</h2>

				<div className="row cart-list--head">
					<p>Items in Cart: {_.size(itemsInCart)}</p>
				</div>

				<div className="row cart-list--body">
					<ul>
						{_.size(itemsInCart) === 0 &&
							<Message
								icon="shopping cart"
								content={cartMessage}
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
						onClick={this.handleRemoveAll}
					/>
					<span className="total-sum">
						{totalPrice} {currency}
					</span>

				</div>

			</div>
		);
	}
}

Cart.propTypes = {
	itemsInCart: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		modelName: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
	})).isRequired,
	totalPrice: PropTypes.number.isRequired,
	currency: PropTypes.string.isRequired,
	cartMessage: PropTypes.string.isRequired,
	removeItemFromCart: PropTypes.func.isRequired,
	removeAllItemsFromCart: PropTypes.func.isRequired,
};

export default Cart;
