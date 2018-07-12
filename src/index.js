import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
   <App />
</Provider> , document.getElementById('root'));
registerServiceWorker();
