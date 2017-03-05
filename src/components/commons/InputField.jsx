import React, {PropTypes} from 'react'

const InputField = ({label, name, value, placeholder, index, onChange}) => {

    return <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type="text" className="form-control" name={name} placeholder={placeholder} value={value || ''} onChange={onChange} />
    </div>
}

InputField.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}

export default InputField
