import { applyMiddleware, compose, createStore } from 'redux';

// Logger with default options
import logger from 'redux-logger';
import rootReducer from '../reducers';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = (initalState) => {
	const store = createStore(
		rootReducer,
		compose(
			applyMiddleware(logger),
			reduxDevtools,
		),
	);
	return store;
};

export default configureStore;
