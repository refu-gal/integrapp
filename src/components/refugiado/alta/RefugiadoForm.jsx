import React, {PropTypes} from 'react'
import ListaNecesidades from './ListaNecesidades'

const RefugiadoForm = ({necesidades, onSave, onCancel}) => {

    return <div className="form">
        <div className="form-group">
          <label htmlFor="alias">Alias</label>
          <input type="text" name="alias"/>
        </div>

        <div className="form-group">
          <label htmlFor="contacto">Contacto</label>
          <input type="text" name="contacto" />
        </div>

        <ListaNecesidades necesidades={necesidades} />

        <div className="form-group">
            <button className="btn btn-primary" onClick={onSave}>
                Publicar
            </button>

            <button className="btn btn-secondary" onClick={onCancel}>
                Cancelar y volver
            </button>
        </div>
    </div>
}

RefugiadoForm.propTypes = {
    necesidades: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}

export default RefugiadoForm
