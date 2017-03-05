import React, {Component, PropTypes} from 'react'

const App = ({children}) => {
    return (
        <div className="container-fluid">
            <div className="page-header">
                <h1>RAE - <small>Sistema publicación de consultas</small></h1>
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
