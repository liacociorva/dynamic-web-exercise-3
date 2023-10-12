'use-client'
import styles from "./WeatherCard.module.css"
import WeatherIcon from "./WeatherIcon";

const WeatherCard = ({cityName, weatherType, currentTemp, 
    highTemp, lowTemp, cloudiness, humidity, windSpeed,}) => (
       <div className={styles.WeatherCardWrapper}>
        <div className={styles.WeatherCardImage}>
        <WeatherIcon weatherType={weatherType} />
        </div>
        <div className={styles.CardBody}>
        <h2>{cityName}</h2>
        <p>Weather Type: {weatherType}</p>
        <p>Current Temperature: {currentTemp}°</p>
        <p>High Temperature: {highTemp}°</p>
        <p>Low Temperature: {lowTemp}°</p>
        <p style={{backgroundColor: `rgba(0,0,0,.${cloudiness}`}}>Cloudiness: {cloudiness}%</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind Speed: {windSpeed} mph</p>
        </div>
    </div>
);

export default WeatherCard;
