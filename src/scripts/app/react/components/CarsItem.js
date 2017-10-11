import { Button, Card, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react';
import React, { Component } from 'react';

import PropTypes from 'prop-types';

class CarsItem extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		// this.handleAddClick = this.handleAddClick.bind(this);
		// this.handleRemoveClick = this.handleRemoveClick.bind(this);
	}

	handleClick() {
		const ifAddItemInCart = this.props.selected;
		if (ifAddItemInCart) {
			this.props.removeItemFromCart();
			console.log('REMOVE FROM CART');
		} else {
			this.props.addItemToCart();
			console.log('ADD TO CART');
		}
	}

	// handleAddClick() {
	// 	this.props.addItemToCart();
	// 	console.log('ADD TO CART');
	// }

	// handleRemoveClick() {
	// 	this.props.removeItemFromCart();
	// 	console.log('REMOVE FROM CART');
	// }

	render() {
		const itemInCart = this.props.selected;

		const {
			img,
			modelName,
			price,
			description,
		} = this.props;

		return (
			<Item>
				<Item.Image src={img} size="tiny" />

				<Item.Content>
					<Item.Header as="a"><h3>{modelName}</h3></Item.Header>
					<Item.Description>{description}</Item.Description>
					<Item.Extra>
						<Button
							content={!itemInCart ? ('Add To Cart') : ('Remove')}
							type="button"
							color={!itemInCart ? ('teal') : ('red')}
							floated="right"
							className={!itemInCart ? ('btn') : ('btn-remove')}
							onClick={this.handleClick}
						// onClick={!itemInCart ? (this.handleAddClick) : (this.handleRemoveClick)}
						/>
						<Label>IMAX</Label>
						<Label icon="dollar" content={price} />
					</Item.Extra>
				</Item.Content>
			</Item>
		);
	}
}

CarsItem.propTypes = {
	id: PropTypes.number,
	modelName: PropTypes.string,
	price: PropTypes.number,
	img: PropTypes.string,
	description: PropTypes.string,
};

export default CarsItem;
