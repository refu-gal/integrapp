import React, {PropTypes} from 'react'

const ListaNecesidades = ({necesidades}) => {
    let items = necesidades.map( (necesidad, idx) => {
        return <li>
            <input type="checkbox" name={idx} /> {necesidad.name}
        </li>
    });

    return <ul>
        {items}
    </ul>
}

export default ListaNecesidades
