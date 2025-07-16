import React from 'react'
import cloud from '../icons/clouds.svg';

const HourlyWeatherItem = () => {
  return (
    <div>
      <p className="time">00:00</p>
      <img className="weather-icon" alt="not" src={cloud}/>
      <p className="temprature">20°</p>
    </div>
  )
}

export default HourlyWeatherItem
