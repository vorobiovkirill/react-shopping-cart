import '../styles/main.sass';
import 'babel-polyfill';

import MyCarReduxStore from './app/redux/containers/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './app/redux/store/configureStore';
import styled from 'styled-components';

const store = configureStore();
const ROOT = document.getElementById('root');

// store.subscribe(() => {
// 	console.log('subscribe', store.getState());
// });

// store.dispatch({ type: 'ADD_ITEM', payload: 'dasdasdas' });

ReactDOM.render(
	<Provider store={store}>
		<MyCarReduxStore />
	</Provider>,
	ROOT,
);
