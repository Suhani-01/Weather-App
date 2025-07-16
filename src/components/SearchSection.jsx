import React from 'react'
import locationIcon from '../icons/location.png';

const SearchSection = () => {
  return (
    <div className="search-section">
        <form action="#" className="search-form">
          <button className="search-button">
            <span class="material-symbols-outlined">search</span>
          </button>
          <input
            type="search"
            placeholder="Enter a city name"
            className="search-input"
            required
          />

          <button className="location-button">
            <img alt="" src={locationIcon}/>
          </button>
        </form>
      </div>
  )
}

export default SearchSection
