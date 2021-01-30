import React from 'react'

export default function SearchBox({text, onChangeHandler}) {
    return (
      <div className="search-box">
        <input
          onChange={onChangeHandler}
          value={text}
          placeholder="Search for a Pin-Item"
        />
      </div>
    )
}
