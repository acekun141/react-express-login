import {createBrowserHistory} from 'history';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import {routerMiddleware} from 'connected-react-router';

export const history = createBrowserHistory();

export const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware
            )
        )
    )

    return store;
}

// export default createStore(
//     rootReducer,
//     applyMiddleware(sagaMiddleware)
// )