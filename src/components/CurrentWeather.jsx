import React from 'react'
import cloud from '../icons/clouds.svg';

const CurrentWeather = () => {
  return (
    <div>
      <img className="weather-icon" alt="not" src={cloud}/>
      <h2 className="temprature">20 <span>°C</span></h2>
      <p className="description">Partly cloudy</p>
    </div>
  )
}

export default CurrentWeather
