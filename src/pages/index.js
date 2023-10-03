import WeatherCard from "@/app/components/WeatherCard";
import "../app/globals.css";

export async function getStaticProps(){
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${process.env.WEATHER_API_KEY}&units=imperial`
    );
    const weatherData = await res.json();

    return {
        props: {
            weatherData,
        },
    };
}

export default function Home({weatherData}) {
    console.log(weatherData);
     return (
        <main>
            <h1>Weather App</h1>
            <WeatherCard 
            cityName={weatherData.name}
            weatherType={weatherData.weather[0].main}
            currentTemp={weatherData.main.temp}
            lowTemp={weatherData.main.temp_min}
            highTemp={weatherData.main.temp_max}
            humidity={weatherData.main.humidity}
            cloudiness={weatherData.clouds.all}
            windSpeed={weatherData.wind.speed} />
        </main>
     )
}