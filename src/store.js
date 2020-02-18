import { createStore, applyMiddleware, compose } from 'redux';
// Replaced Wtih:
// import { createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// npm install --save redux-thunk for redux-thunk to work

// Somehow installs the redux store debugger with this idk how though LOL.


const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)))

// Replaced with:
// const store = createStore(rootReducer)

export default store;