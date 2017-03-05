import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import routes from './routes'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import configureStore from './redux/configureStore'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

let initialState = {
    searchText: '',
    consultas: []
}

const store = configureStore(initialState);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);

// Test consulta 30947, 30946, 545, 27208, 27152, 40063, 19259, 4085, 4556, 19630, 386, 44643, 5562, 3038, 3177, 999998, 3001, 3102
