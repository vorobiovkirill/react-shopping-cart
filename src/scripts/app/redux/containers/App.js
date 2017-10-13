import React, { Component } from 'react';
import { addItemToCart, paginations, removeAllItemsFromCart, removeItemFromCart } from '../actions/actionsTypes';

import CarsContainer from '../containers/CarsContainer';
import CartContainer from '../containers/CartContainer';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const MyCarReduxStore = () => {
	return (
		<div className="container">
			<div className="cars-wrapper">
				<div className="row app-title">
					<h1>Cars Store</h1>
				</div>
				<div className="row">
					<div className="cars-list-block">
						<CarsContainer />
					</div>
					<div className="cars-cart-block">
						<CartContainer />
					</div>
				</div>
			</div>
		</div>
	);
};

export default connect()(MyCarReduxStore);
