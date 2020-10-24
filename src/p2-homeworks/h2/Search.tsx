import React from 'react'
import classes from './Affairs.module.css'

type propType = {
    onSearchChange: (search: string)=> void
}

function SearchBook(props: propType) {
    return (
        <input
        className = {classes.Search}
        type = 'text'
            placeholder='Type here to search your book!'
            
            onChange={(e)=>props.onSearchChange(e.target.value)}
        />
    )
}

export default SearchBook