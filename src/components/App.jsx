import React, {Component, PropTypes} from 'react'

const App = ({children}) => {
    return (
        <div className="container-fluid">
            <div className="page-header">
                <h1>Needy - <small>Alta</small></h1>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App
