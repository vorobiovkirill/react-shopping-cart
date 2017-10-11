import { Button, Card, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react';
import React, { Component } from 'react';

import PropTypes from 'prop-types';

class CarsItem extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(id) {
		const itemInCart = this.props.selected;

		if (itemInCart) {
			this.props.removeItemFromCart(id);
		} else {
			this.props.addItemToCart(id);
		}
	}

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
	modelName: PropTypes.string,
	price: PropTypes.number,
	description: PropTypes.string,
	img: PropTypes.string,
	addItemToCart: PropTypes.func.isRequired,
	removeItemFromCart: PropTypes.func.isRequired,
};

export default CarsItem;
