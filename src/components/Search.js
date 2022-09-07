import React from 'react'

const Search = () => {
  return (
    <div className="search-container">
        <input
        className="search-bar"
        type="text"
        placeholder="Search by artist name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
  )
}

export default Search