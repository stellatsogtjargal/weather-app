import './App.css' 
import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather'
import { useState } from 'react'
import DailyForecast from './components/DailyForecast'
import News from './components/News'

function App() {
  const API_KEY = '2ae1e0a4ba4589fccff57de5884ef703';
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [dailyForecast, setDailyForecast] = useState(null);
  
  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`)
    const hourlyForecastFetch = fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&appid=${API_KEY}&cnt=24&units=imperial`)
    const dailyForecastFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=${API_KEY}&units=imperial`)
    
    Promise.all([currentWeatherFetch,hourlyForecastFetch,dailyForecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const hourlyForecastResponse = await response[1].json();
      const dailyForecastResponse = await response[2].json();

      setCurrentWeather({city: searchData.label, ... weatherResponse});
      setHourlyForecast({city: searchData.label, ...hourlyForecastResponse});
      setDailyForecast({city: searchData.label, ...dailyForecastResponse});
    })
    .catch((err) => console.log(err))
  };

  console.log(currentWeather);
  console.log(hourlyForecast);
  console.log(dailyForecast);

  return (
    <>
      <News></News>
      <Search onSearchChange = {handleSearchChange} ></Search>
      {currentWeather && <CurrentWeather data ={currentWeather} />}
      {dailyForecast && <DailyForecast data = {dailyForecast} />}
    </>
  )
}

export default App;