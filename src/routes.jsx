import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import AltaRefugiadoPage from './components/refugiado/alta/AltaRefugiadoPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={AltaRefugiadoPage} />
    </Route>
)
