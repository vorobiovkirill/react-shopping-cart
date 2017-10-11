import { ADD_ITEM_TO_CART, REMOVE_ALL_ITEMS_FROM_CART, REMOVE_ITEM_FROM_CART } from '../constants';

export const addItemToCart = (id, modelName, price) => {
	return {
		type: ADD_ITEM_TO_CART,
		payload: {
			id,
			modelName,
			price,
		},
	};
};

export const removeItemFromCart = (id) => {
	return {
		type: REMOVE_ITEM_FROM_CART,
		payload: {
			id,
		},
	};
};

export const removeAllItemsFromCart = (id) => {
	return {
		type: REMOVE_ALL_ITEMS_FROM_CART,
		payload: {
			id,
		},
	};
};
