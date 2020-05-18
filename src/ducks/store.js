import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';

export const sagaMiddleware = createSagaMiddleware();

export default createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)