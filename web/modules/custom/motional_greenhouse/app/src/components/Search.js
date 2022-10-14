import React from 'react'

const Search = ({ searchQuery, setSearchState }) => (
  <div className="filters__search-jobs">
    <div className="filters__search">
      <label id="search-label" htmlFor="search-input">
        Search Jobs
      </label>
      <input
        id="search-input"
        name="search"
        type="text"
        placeholder="Search"
        onInput={(e) => setSearchState(e.target.value)}
        defaultValue={searchQuery}
      />
    </div>
  </div>
)

export default Search