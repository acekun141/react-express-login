import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
// mdbreact
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// scss
import './sass/main.scss';
// store
import configureStore, {sagaMiddleware, history} from './ducks/store';
// sagas
import userSaga from './ducks/user/sagas';
import {ConnectedRouter} from 'connected-react-router';
import {PersistGate} from 'redux-persist/lib/integration/react';

const {store, persistor} = configureStore();

sagaMiddleware.run(userSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);