import React, {PropTypes} from 'react'

const SearchForm = ({searchText, onChange, onSearch}) => {

    const _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          onSearch(e)
        }
    }

    return <div className="form-inline">
        <div className="form-group">
            <input type="text" className="form-control" name="search" size="80"
                placeholder="Texto de consulta"
                value={searchText}
                onChange={onChange}
                onKeyPress={_handleKeyPress}/>
        </div>
        <button className="btn btn-primary" onClick={onSearch}>
            Buscar
        </button>
    </div>
}

SearchForm.propTypes = {
    searchText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
}

export default SearchForm
