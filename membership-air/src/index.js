import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {getFirestore, reduxFirestore} from 'redux-firestore'
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import logger from 'redux-logger'

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(
      thunk.withExtraArgument({getFirestore, getFirebase}),
      logger
    ),
      reactReduxFirebase(fbConfig),
    reduxFirestore(fbConfig),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> , document.getElementById('root'));
registerServiceWorker();
