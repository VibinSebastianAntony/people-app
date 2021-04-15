import React from 'react'
import '../search/search.styles.css';

export const Search = ({ placeholder,handleChange }) => {
    return (
        <div className='search'>
            <input type='search'
                id='text'
                placeholder={placeholder}
                onChange={handleChange} />
        </div>
    )
}




