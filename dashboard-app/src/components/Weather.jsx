import React, { useState } from "react";
import axios from "axios";
//icons
import sunny from "../logos/sunny.png";
import cloudy from "../logos/cloudy.png";
import kindaCloudy from "../logos/kinda_cloudy.png";
import rainy from "../logos/rainy.png";
import loading from "../logos/loading.png";

function Weather(props) {
    //state and logic
    const [weatherData, updateWeather] = useState([
        { key: 0, day: "???", temp: 0, img: loading },
        { key: 1, day: "???", temp: 0, img: loading },
        { key: 2, day: "???", temp: 0, img: loading },
        { key: 3, day: "???", temp: 0, img: loading },
        { key: 4, day: "???", temp: 0, img: loading },
        { key: 5, day: "???", temp: 0, img: loading },
        { key: 6, day: "???", temp: 0, img: loading }
    ])

    //weather type array (sunny, rainy, etc...)
    let map = new Map()
    map.set("Sunny", sunny)
    map.set("Mostly Sunny", sunny)
    map.set("Cloudy", cloudy)
    map.set("Rain Showers", rainy)
    map.set("Chance of Storms", cloudy)
    map.set("Isolated Storms", kindaCloudy)


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

        //determine weather type and icon
        let icons = []
        for(let i = 0; i < newWeather.length; i++){
            if(map.has(newWeather[i].weatherPrimary)){ icons[i] = map.get(newWeather[i].weatherPrimary) } 
            else { icons[i] = map.get("Cloudy") }
        }


        updateWeather([
            { key: 0, day: forecastDays[0], temp: forecastTemps[0], img: icons[0] },
            { key: 1, day: forecastDays[1], temp: forecastTemps[1], img: icons[1] },
            { key: 2, day: forecastDays[2], temp: forecastTemps[2], img: icons[2] },
            { key: 3, day: forecastDays[3], temp: forecastTemps[3], img: icons[3] },
            { key: 4, day: forecastDays[4], temp: forecastTemps[4], img: icons[4] },
            { key: 5, day: forecastDays[5], temp: forecastTemps[5], img: icons[5] },
            { key: 6, day: forecastDays[6], temp: forecastTemps[6], img: icons[6] }
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
            <h1 className="box-heading">7-DAY FORECAST</h1>
            <ul className="weather-array">
                {weatherData.map((item, index) => {
                    return(
                        <li>
                            <div><img className="logos" alt="weather-icon" src={item.img} width="40" height="40"></img></div> <br />
                            <div>{item.day}</div> <br /> 
                            <div id="temperature"> {item.temp}F</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Weather;