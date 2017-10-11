import { Button, Card, Icon, Image } from 'semantic-ui-react';
import React, { Component } from 'react';

import PropTypes from 'prop-types';

class CartItem extends Component {

	constructor(props) {
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
	}

	handleRemove(id) {
		this.props.removeItemFromCart(id);
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
						<a href="#" onClick={this.handleRemove}>
							<Icon link color="red" className="del-item" name="delete" />
						</a>
						<span className="cart-item__name"><strong>Model:</strong> {modelName}</span>
						<span className="cart-item__price"><strong>Price:</strong> {price}</span>
					</Card.Content>
				</Card>
			</li>
		);
	}
}

CartItem.propTypes = {
	modelName: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default CartItem;
