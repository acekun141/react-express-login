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
import store, {sagaMiddleware} from './ducks/store';
// import store from './ducks/store';
// sagas
import userSaga from './ducks/user/sagas';

sagaMiddleware.run(userSaga);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);