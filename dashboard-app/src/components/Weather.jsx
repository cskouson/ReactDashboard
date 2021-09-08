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
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        //create js date from api object
        let today = new Date(newWeather[0].validTime);
        //get new list of next 7 days starting from todays date
        let index = today.getDay();
        let forecastDays = [];
        for(let i = 0; i < 7; i++){
            forecastDays.push(days[index]);
            index++;
            if(index === 7) index = 0;
        }
        console.log('Forecast list: ' + forecastDays);
        
        //get temperature list
        let forecastTemps = [];
        for(let i = 0; i < 7; i++){
            forecastTemps.push(newWeather[i].maxTempF);
        }
        console.log(forecastTemps)

        updateWeather([
            { key: 0, day: forecastDays[0], temp: forecastTemps[0] },
            { key: 1, day: forecastDays[1], temp: forecastTemps[1] },
            { key: 2, day: forecastDays[2], temp: forecastTemps[2] },
            { key: 3, day: forecastDays[3], temp: forecastTemps[3] },
            { key: 4, day: forecastDays[4], temp: forecastTemps[4] },
            { key: 5, day: forecastDays[5], temp: forecastTemps[5] },
            { key: 6, day: forecastDays[6], temp: forecastTemps[6] }
        ])


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
                        <li><div>{item.day}</div> <br /> <div id="temperature"> {item.temp}F</div></li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Weather;