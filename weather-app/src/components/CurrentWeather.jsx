import "./current-weather.css"

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="weather-icon" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°F</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°F</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed} MPH</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CurrentWeather