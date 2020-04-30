import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import  reducers from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App.js'

ReactDOM.render(
    <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <App/>
    </Provider>
, document.getElementById('root'))

// ReactDOM.render(
//         <App/>
// , document.getElementById('root'))