import {createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import apiReducer from './reducers/reducer';
import createSagaMiddleware from 'redux-saga';
const root_reducer = combineReducers({
    api: apiReducer
})
const sagaMiddleware = createSagaMiddleware();
const store = createStore(root_reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export default store;
