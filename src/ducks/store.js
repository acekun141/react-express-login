import {createBrowserHistory} from 'history';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import {routerMiddleware} from 'connected-react-router';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const history = createBrowserHistory();

export const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['router']
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default function configureStore(preloadedState) {
    const store = createStore(
        persistedReducer,
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware
            )
        )
    )
    let persistor = persistStore(store);

    return {store, persistor};
};
