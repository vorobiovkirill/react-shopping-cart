import '../styles/main.sass';

import MyCarStore from './app/App';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// import '../../node_modules/semantic-ui-css/semantic.min.css';


ReactDOM.render(
	<MyCarStore />,
	document.getElementById('root'),
);
