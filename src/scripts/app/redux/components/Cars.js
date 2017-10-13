import { Button, Card, Icon, Image, Item, Label, Menu } from 'semantic-ui-react';
import React, { Component } from 'react';

import CarsItem from './CarsItem';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Cars extends Component {

	addItemToCart = (id, modelName, price) => {
		this.props.addItemToCart(id, modelName, price);
	}

	removeItemFromCart = (id) => {
		this.props.removeItemFromCart(id);
	}

	paginations = (name) => {
		this.props.paginations(name);
	}

	render() {
		const {
			cars,
			itemsInCart,
			selected,
			currentPage,
			itemsPerPage,
			activeItem,
		} = this.props;

		// Logic for displaying cars
		const indexOfLastItem = activeItem * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const currentItems = _.slice(cars, indexOfFirstItem, indexOfLastItem);

		const listOfCarsItems = _.map(currentItems, (car) => {
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
							{listOfCarsItems}
						</Item.Group>
					</div>
				</div>
				<div className="row">
					<Menu pagination>
						<Menu.Item name="1" active={activeItem === '1'} onClick={(e, { name }) => this.paginations(name)} />
						<Menu.Item name="2" active={activeItem === '2'} onClick={(e, { name }) => this.paginations(name)} />
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
