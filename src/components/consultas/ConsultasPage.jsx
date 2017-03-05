import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as actions from '../../redux/actions'
import SearchForm from './SearchForm'
import ListaConsultas from './ListaConsultas'
import request from 'superagent'

class ConsultasPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searching: false
        }

        this.searchConsultas = this.searchConsultas.bind(this)
        this.changeSearchText = this.changeSearchText.bind(this)
    }

    searchConsultas() {
        this.props.actions.loadConsultas(this.props.searchText)
    }

    changeSearchText(event) {
        this.props.actions.setSearchText(event.target.value)
    }

    render() {
        return <div className="panel panel-default">
            <div className="panel-heading">Búsqueda de consultas</div>
            <div className="panel-body">
                <SearchForm
                    searchText={this.props.searchText}
                    onChange={this.changeSearchText}
                    onSearch={this.searchConsultas} />

                <ListaConsultas consultas={this.props.consultas} />
            </div>
        </div>
    }
}

ConsultasPage.propTypes = {
    consultas: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        searchText: state.searchText,
        searching: state.searching,
        consultas: state.consultas
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsultasPage)
