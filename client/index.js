import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'


import store from '../store/store'
import App from './App';




const app =
     <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
ReactDOM.render(app, document.getElementById('root'));
