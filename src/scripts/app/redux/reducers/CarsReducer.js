import { ADD_ITEM_TO_CART, PAGINATIONS, REMOVE_ALL_ITEMS_FROM_CART, REMOVE_ITEM_FROM_CART } from '../constants';

import _ from 'lodash';
import cars from '../data/cars';

const initialState = {
	cars,
	itemsInCart: [],
	selectedCar: [],
	activeItem: '1',
	currentPage: 1,
	itemsPerPage: 4,
	totalPrice: 0,
	cartMessage: 'Your Cart is Empty',
	currency: 'EUR',
};

const CarsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM_TO_CART: {
			const updateItemsInCartAfterAdd = [
				...state.itemsInCart,
				{
					id: action.payload.id,
					modelName: action.payload.modelName,
					price: action.payload.price,
				},
			];
			const arrayOfAllItemsPrice = _.map(updateItemsInCartAfterAdd, 'price');
			const sumOfAllItemsPriceInCart = _.sum(arrayOfAllItemsPrice);

			return Object.assign({}, state, {
				itemsInCart: updateItemsInCartAfterAdd,
				selectedCar: [
					...state.selectedCar,
					action.payload.id,
				],
				totalPrice: sumOfAllItemsPriceInCart,
			});
		}
		case REMOVE_ITEM_FROM_CART: {
			const updateItemsInCartAfterRemove = _.filter(state.itemsInCart, ({ id }) => action.payload.id !== id);
			const updateSelectedCarAfterRemove = _.filter(state.selectedCar, (id) => action.payload.id !== id);
			const arrayOfAllItemsPrice = _.map(updateItemsInCartAfterRemove, 'price');
			const sumOfAllItemsPriceInCart = _.sum(arrayOfAllItemsPrice);

			return Object.assign({}, state, {
				itemsInCart: updateItemsInCartAfterRemove,
				selectedCar: updateSelectedCarAfterRemove,
				totalPrice: sumOfAllItemsPriceInCart,
			});
		}
		case REMOVE_ALL_ITEMS_FROM_CART:
			return initialState;
		case PAGINATIONS:
			return {
				...state,
				activeItem: action.name,
			};
		default:
			return state;
	}
};

export default CarsReducer;
