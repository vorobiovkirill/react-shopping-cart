import { Button, Card, Icon, Image, Item, Label, Menu } from 'semantic-ui-react';
import React, { Component } from 'react';

import CarsItem from './CarsItem';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Cars extends Component {

	constructor(props) {
		super(props);
	}

	state = {
		activeItem: '1',
		currentPage: 1,
		itemsPerPage: 5,
	}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { cars } = this.props;
		const itemsInCart = this.props.itemsInCart;

		// const currentPage = this.props.currentPage;
		// const itemsPerPage = this.props.itemsPerPage;
		const { activeItem, currentPage, itemsPerPage } = this.state;

		// Logic for displaying todos
		const indexOfLastItem = activeItem * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		// const currentItems = cars.slice(indexOfFirstItem, indexOfLastItem);
		const currentItems = cars.slice(indexOfFirstItem, indexOfLastItem);

		const carsList = currentItems.map((car) => {
			const selected = itemsInCart.indexOf(car.id) > -1;
			return (
				<CarsItem
					key={car.id}
					{...car}
					addItemToCart={() => this.props.addItemToCart(car.id)}
					removeItemFromCart={() => this.props.removeItemFromCart(car.id)}
					selected={selected}
				/>
			);
		});

		// Logic for displaying page numbers
		// const pageNumbers = [];
		// for (let i = 1; i < Math.ceil(cars.length / itemsPerPage); i++) {
		// 	pageNumbers.push(i);
		// }

		// const renderPageNumbers = pageNumbers.map(number => {
		// 	return (
		// 		<li
		// 			key={number}
		// 			id={number}
		// 		>
		// 			<a onClick={(e) => this.props.handleClick(e, number)}>{number}</a>
		// 		</li>
		// 	);
		// });

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
	cars: PropTypes.array,
};

export default Cars;
