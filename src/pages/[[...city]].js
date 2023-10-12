import WeatherCard from "@/app/components/WeatherCard";
import "../app/globals.css";
import Header from '../app/components/Header';

export async function getStaticProps({params}){
    const city = (params && params.city) || 'Boston'
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`
    );
    const weatherData = await res.json();

    return {
        props: {
            weatherData,
        },
    };
}

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
};
};

export default function Home({weatherData}) {
    console.log(weatherData);
    if(!weatherData) return null;
     return (
        <>
        <Header/>
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
        </>
     )
     
}