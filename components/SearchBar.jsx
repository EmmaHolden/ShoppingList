import { useState } from 'react';

const SearchBar = ({ items, query, setQuery, clearSearch}) => {
    {items.map((item, index) => {
        if (item.name.includes(query)) {
            item.visible = true;
        } else {
            item.visible = false
        }
    })}
    return (
      <div className = "search">
        <div>
            <label>
            Search:
            <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)} />
            </label>
        </div>
        <div>
            {query != '' ? 
            <button onClick = {() => clearSearch(items, setQuery)}>X</button>
        : ""}
            
        </div>
      </div>
    );
  };

  export default SearchBar;