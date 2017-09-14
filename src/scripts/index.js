import '../styles/main.sass';

import App from './app/ToDoApp';
import CarsApp from './app/CarsApp';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

ReactDOM.render(
	<CarsApp />,
	document.getElementById('root'),
);
