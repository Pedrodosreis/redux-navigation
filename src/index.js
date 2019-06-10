import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers/index'
import middleware from './middleware/index'

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';

const store = createStore(reducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));