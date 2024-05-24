import React from 'react'
import {FaSearch} from "react-icons/fa";
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className='input-wrapper'>
        <FaSearch id='Search-icon'/>
        <input placeholder='Type to Search... ' />
    </div>
  )
}

export default SearchBar