import React, {PropTypes} from 'react'
import { browserHistory } from 'react-router';

const FilaConsulta = ({consulta}) => {
    console.log(consulta)

    const navigateToConsulta = () => {
        browserHistory.push('/consulta/' + consulta.id)
    }

    const trProps = {
        onClick: navigateToConsulta
    }

    if (consulta.publicablesn == 'S') {
        trProps['className'] = 'success'
        delete trProps.onClick
    }

    return <tr {...trProps}>
            <td>{consulta.id}</td>
            <td>{consulta.titulo}</td>
            <td>{consulta.fechahora}</td>
            <td>{consulta.usuario.email}</td>
    </tr>
}

const ListaConsultas = ({consultas}) => {
    return <table className="table table-hover">
        <thead>
            <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Fecha</th>
                <th>Usuario</th>
            </tr>
        </thead>
        <tbody>
            { (consultas === undefined || consultas.length == 0) ? <tr><td colSpan="4">Sin resultados</td></tr> :
                consultas.map((consultares, idx) => <FilaConsulta consulta={consultares.consulta} key={idx} />) }
        </tbody>
    </table>
}


ListaConsultas.propTypes = {
    consultas: PropTypes.array.isRequired
}

export default ListaConsultas
