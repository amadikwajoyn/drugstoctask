import React from 'react'
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className="search-wrapper">
        <div className="search-container">
            <div className="search-icon">&#128269;</div>
            <input  type="text" placeholder="Search Keyword"/>
            <div className="sort-icon">
                <p>Sort By</p>
                <div className="search-icon"><img src="../assets/menu-icon.png" alt=""/></div>
            </div>
        </div>

    </div>
  )
}

export default SearchBar