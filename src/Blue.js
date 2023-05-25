import React, { useState } from "react";
import axios from "axios";

import './App.css';


export default function Blue(props){
 let [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState(null);

  


function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1a2b7258ebd456c01aef9175dfe8b709&units=metric`;
    axios.get(url).then(showWeatherData);
    
  }

   function showWeatherData(response) {
    setWeatherData(response.data);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }


    return(
         <div className="line">
      <h1>React AJAX</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      {weatherData && (
        <div>
          <p>Temperature: {Math.round(weatherData.main.temp)}°C</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>
            Icon: {weatherData.weather.icon}
            {weatherData.weather[0].icon && (
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="Weather Icon"
              />
            )}
          </p>
          
        </div>
      )}
    </div>
          

    );



}
