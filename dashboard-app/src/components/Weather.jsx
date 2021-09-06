import React, { useState } from "react";
import axios from "axios";

function Weather(props) {
    //state and logic
    const [weatherData, updateWeather] = useState([
        { key: 0, day: "???", temp: 0 },
        { key: 1, day: "???", temp: 0 },
        { key: 2, day: "???", temp: 0 },
        { key: 3, day: "???", temp: 0 },
        { key: 4, day: "???", temp: 0 },
        { key: 5, day: "???", temp: 0 },
        { key: 6, day: "???", temp: 0 }
    ])

    function handleWeatherChange(newWeather) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', ]
        let todaysDate = newWeather[0].validTime;
        console.log('today is : ' + todaysDate);
    }

    React.useEffect(() => {
        axios(
            {
                method: 'GET',
                url: 'https://aerisweather1.p.rapidapi.com/forecasts/phoenix,az',
                headers: {
                  'x-rapidapi-host': 'aerisweather1.p.rapidapi.com',
                  'x-rapidapi-key': process.env.REACT_APP_AERIS_KEY
                }
              }
        ).then(response => {
            //
            console.log(response.data.response[0].periods)
            handleWeatherChange(response.data.response[0].periods)
        }).catch((error) => {
            console.error(error)
        })


    }, []);

    //react component
    return (
        <div className="weather-box">
            <h1>Weather Box</h1>
            <ul className="weather-array">
                {weatherData.map((item, index) => {
                    return(
                        <li>{item.day} - {item.temp}F</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Weather;