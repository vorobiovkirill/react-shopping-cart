import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Cars from './components/Cars';
import Cart from './components/Cart';
import PropTypes from 'prop-types';
import _ from 'lodash';
import cars from './data/cars';

class MyCarStore extends Component {

	constructor(props) {
		super(props);

		this.addItemToCart = this.addItemToCart.bind(this);
		this.removeItemFromCart = this.removeItemFromCart.bind(this);
		this.removeAllItemsFromCart = this.removeAllItemsFromCart.bind(this);
		// this.handleClick = this.handleClick.bind(this);
	}

	state = {
		cars,
		itemsInCart: [],
		totalPrice: 0,
		// currentPage: 1,
		// itemsPerPage: 4,
	}

	// ADD ITEM TO CART
	addItemToCart(id) {
		// WITHOUT LODASH
		const addItemInItemsInCart = this.state.itemsInCart;
		addItemInItemsInCart.push(id);

		// WITH LODASH
		// const addItemInItemsInCart = this.state.itemsInCart;
		// const updateItemsInCartAfterAdd = _.difference(addItemInItemsInCart, id);

		this.setState({
			itemsInCart: addItemInItemsInCart,
		});
	}

	// REMOVE ITEM FROM CART
	removeItemFromCart(id) {
		// WITHOUT LODASH
		// const removeItemsFromItemsInCart = this.state.itemsInCart;
		// const index = removeItemsFromItemsInCart.indexOf(id);
		// if (index === -1) {
		// 	return;
		// }
		// removeItemsFromItemsInCart.splice(index, 1);

		// WITH LODASH
		const removeItemsFromItemsInCart = this.state.itemsInCart;
		const updateItemsInCartAfterRemove = _.without(removeItemsFromItemsInCart, id);

		this.setState({
			itemsInCart: updateItemsInCartAfterRemove,
		});
	}

	// REMOVE ALL ITEMS FROM CART
	removeAllItemsFromCart() {
		// WITHOUT LODASH
		// const removeAllItemsFromCart = this.state.itemsInCart;
		// removeAllItemsFromCart.splice(0, removeAllItemsFromCart.length);

		// WITH LODASH
		const removeAllItemsFromCart = this.state.itemsInCart;
		_.remove(removeAllItemsFromCart);

		this.setState({
			itemsInCart: removeAllItemsFromCart,
			totalPrice: 0,
		});
	}

	totalPrice() {
		const cart = this.state.cart;
		let totalPrice = 0;
		for (let price in cart) {
			totalPrice += cart[price].price;
		}
		return totalPrice;
	}

	// handleClick(e, id) {
	// 	console.log(e.target.id);
	// 	const linkId = event.target.id;
	// 	this.setState({
	// 		currentPage: Number(linkId),
	// 	});
	// }

	render() {
		const cars = this.state.cars;
		const itemsInCart = this.state.itemsInCart;

		// WITHOUT LODASH
		// const carsInCart = cars.filter(itemsInCart, (car) => itemsInCart.indexOf(car.id) > -1);

		// WITH LODASH
		const carsInCart = _.map(itemsInCart, (id) => _.head(_.filter(cars, car => car.id === id)));
		return (
			<div className="container">
				<div className="cars-wrapper">
					<div className="row app-title">
						<h1>Cars Store</h1>
					</div>
					<div className="row">
						<div className="cars-list-block">
							<Cars
								cars={this.state.cars}
								addItemToCart={this.addItemToCart}
								removeItemFromCart={this.removeItemFromCart}
								itemsInCart={this.state.itemsInCart}
								// currentPage={this.state.currentPage}
								// itemsPerPage={this.state.itemsPerPage}
								// handleClick={this.handleClick}
							/>
						</div>
						<div className="cars-cart-block">
							<Cart
								cart={carsInCart}
								removeItemFromCart={this.removeItemFromCart}
								removeAllItemsFromCart={this.removeAllItemsFromCart}
								totalPrice={this.state.totalPrice}
							/>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

MyCarStore.propTypes = {
	cars: PropTypes.array,
	itemsInCart: PropTypes.array,
	addItemToCart: PropTypes.func,
	removeItemFromCart: PropTypes.func,
	removeAllItemsFromCart: PropTypes.func,
	totalPrice: PropTypes.func,
};

export default MyCarStore;
