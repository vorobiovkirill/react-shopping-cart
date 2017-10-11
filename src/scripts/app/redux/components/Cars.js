import { Button, Card, Icon, Image, Item, Label, Menu } from 'semantic-ui-react';
import React, { Component } from 'react';

import CarsItem from './CarsItem';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Cars extends Component {

	state = {
		activeItem: '1',
		currentPage: 1,
		itemsPerPage: 4,
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	addItemToCart = (id, modelName, price) => {
		this.props.addItemToCart(id, modelName, price);
	}

	removeItemFromCart = (id) => {
		this.props.removeItemFromCart(id);
	}

	render() {
		const { cars, selected } = this.props;
		const { activeItem, currentPage, itemsPerPage } = this.state;

		// Logic for displaying cars
		const indexOfLastItem = activeItem * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const currentItems = _.slice(cars, indexOfFirstItem, indexOfLastItem);

		const carsList = _.map(currentItems, (car) => {
			const selectedCar = _.indexOf(selected, car.id) > -1;
			return (
				<CarsItem
					key={car.id}
					{...car}
					addItemToCart={() => this.addItemToCart(car.id, car.modelName, car.price)}
					removeItemFromCart={() => this.removeItemFromCart(car.id)}
					selected={selectedCar}
				/>
			);
		});

		return (
			<div>
				<div className="row">
					<div className="cars-list">
						<h2>Cars List</h2>
						<Item.Group divided>
							{carsList}
						</Item.Group>
					</div>
				</div>
				<div className="row">
					<Menu pagination>
						<Menu.Item name="1" active={activeItem === '1'} onClick={this.handleItemClick} />
						<Menu.Item name="2" active={activeItem === '2'} onClick={this.handleItemClick} />
						<Menu.Item disabled>...</Menu.Item>
					</Menu>
				</div>
			</div>
		);
	}
}

Cars.propTypes = {
	cars: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		modelName: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		description: PropTypes.string,
	})).isRequired,
	itemsInCart: PropTypes.array,
	selectedCar: PropTypes.array,
	addItemToCart: PropTypes.func.isRequired,
	removeItemFromCart: PropTypes.func.isRequired,
};

export default Cars;
