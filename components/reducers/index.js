// import {combineReducers} from 'redux';

import countReducer from './countReducer';
import numberReducer from './numberReducer';
import statusReducer from './statusReducer';

let combineReducers = (reducers) => (state, action) => {
	let keys = Object.keys(reducers);
	return keys.reduce((nextState, key) => {
		nextState[key] = reducers[key](state[key], action);
		return nextState;
	}, {});
};

module.exports = combineReducers({
  countReducer,
	statusReducer,
  numberReducer
});
