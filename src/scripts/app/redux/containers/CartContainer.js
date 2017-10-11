import { removeAllItemsFromCart, removeItemFromCart } from '../actions/actionsTypes';

import Cart from '../components/Cart';
import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	selected: state.reduser.selectedCar,
	itemsInCart: state.reduser.itemsInCart,
	totalPrice: state.reduser.totalPrice,
	cartMessage: state.reduser.cartMessage,
	currency: state.reduser.currency,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		removeAllItemsFromCart,
		removeItemFromCart,
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
