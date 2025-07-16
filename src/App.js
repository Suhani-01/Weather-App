import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import SearchSection from "./components/SearchSection";
import HourlyWeatherItem from "./components/HourlyWeatherItem";

function App() {
  return (
    <div className="container">
      {/************ Search Section ************/}
      <SearchSection/>


      {/************ Weather Section ************/}
      <div className="weather-section">

        {/************ Current Weather ************/}
        <div className="current-weather">
          <CurrentWeather/>
        </div>

        {/************ Hourly Weather ************/}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <li className="weather-item">
              <HourlyWeatherItem/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
