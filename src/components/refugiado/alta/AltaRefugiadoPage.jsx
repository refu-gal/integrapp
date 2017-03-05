import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import _ from 'lodash'
import * as actions from '../../../redux/actions'
import RefugiadoForm from './RefugiadoForm'

class AltaRefugiadoPage extends React.Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            consultares: _.merge({}, this.props.consultares)
        }

        this.onChange = this.onChange.bind(this)
        this.onSave = this.onSave.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }

    onChange(event) {
        let consultares = this.state.consultares
        _.set(consultares, event.target.name, event.target.value)

        return this.setState({consultares})
    }

    onSave() {
        this.state.consultares.consulta.publicablesn = 'S'
        this.props.actions.publishConsulta(this.state.consultares)
        this.context.router.push('/')
    }

    onCancel() {
        this.context.router.push('/')
    }


    render() {
        debugger;
        return <div>
            <RefugiadoForm necesidades={[{name: 'Trabajo'}, {name: 'Sanidad'}]}
                onSave={this.onSave}
                onCancel={this.onCancel} />
        </div>
    }
}

AltaRefugiadoPage.contextTypes = {
    router: PropTypes.object
}

AltaRefugiadoPage.propTypes = {
    necesidades: PropTypes.array
}

function mapStateToProps(state, ownProps) {
    const id = ownProps.params.id
    let consultares = {
        consulta: {
            titulo: '',
            texto: ''
        },
        respuesta: {
            texto: ''
        }
    }

    if (id) {
        consultares = state.consultas.filter((consultares) =>
            consultares.consulta.id == id
        )[0]
    }

    return {
        consultares: consultares
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AltaRefugiadoPage)
