const ListaNecesidades = ({necesidades}) => {
    let items = necesidades.map( (necedidad, idx) => {
        return <li>
            <input type="checkbox" name={idx} /> {necesidad.name}
        </li>
    });

    return <ul>
        {items}
    </ul>
}
