import { addItemToCart, paginations, removeItemFromCart } from '../actions/actionsTypes';

import Cars from '../components/Cars';
import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		cars: state.reduser.cars,
		itemsInCart: state.reduser.itemsInCart,
		selected: state.reduser.selectedCar,
		activeItem: state.reduser.activeItem,
		currentPage: state.reduser.currentPage,
		itemsPerPage: state.reduser.itemsPerPage,
		totalPrice: state.reduser.totalPrices,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addItemToCart,
		removeItemFromCart,
		paginations,
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
