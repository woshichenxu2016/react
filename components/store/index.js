import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'components/middlewares/promiseMiddleware';

import reducer from 'components/reducers';

const store = createStore(reducer, {}, applyMiddleware(promiseMiddleware));

export default store;
