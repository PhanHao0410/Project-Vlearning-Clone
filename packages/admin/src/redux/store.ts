// import {
//   configureStore,
//   getDefaultMiddleware,
//   applyMiddleware,
// } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { thunk } from 'redux-thunk';
import saga from './saga';
import reducer from './reducer';
import history from '../utils/history';

const sagaMiddleware = createSagaMiddleware();
// const middleware = [
//   applyMiddleware(thunk)
//   sagaMiddleware,
//   routerMiddleware(history),
// ];

// const middleware = [applyMiddleware(thunk), routerMiddleware(history)];

const store = createStore(reducer, applyMiddleware(thunk));

// sagaMiddleware.run(saga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
