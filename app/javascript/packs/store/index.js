import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import rootReducer from '../reducers';

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
