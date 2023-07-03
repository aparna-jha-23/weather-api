import "./App.css";
import { useState } from "react";

// let imgUrl='';

const api = {
  key: "e622e48145be90dc5ee16849efd3fe87",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      //   let icon = weather.weather[0].icon;
      // console.log(icon);
    
      // imgUrl = `http://openweathermap.org/img/w/${icon}.png`;
      });

      
  };





  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>

        <div>
          <input
            type="text"
            placeholder="Enter city"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>


        {typeof weather.main !== "undefined" ? (
          <div>
            
            {/* <img src={imgUrl} alt="weather-icon"/> */}
'
            <p>{weather.name}</p>        
            <p><b>{weather.main.temp}°C</b> &#91; MIN:{weather.main.temp_min} - MAX: {weather.main.temp_max}&#93;  </p> 
            <p> &#40; feels like {weather.main.feels_like} &#41;</p>  
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default App;