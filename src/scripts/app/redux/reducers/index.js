import CarsReducer from './CarsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	reduser: CarsReducer,
});

export default rootReducer;
