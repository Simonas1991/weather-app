import React from 'react';

// css
import './Card.css'

const Card = ({ weatherData, isLoaded }) => {

    console.log(weatherData);

    return (
        <div>
            {isLoaded ?
                <>
                    <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
                    <h3>Current weather:</h3>
                    <p>{weatherData.current.temp_c} °C</p>
                    <img src={weatherData.current.condition.icon} alt="" />
                    <hr />
                    <h3>Forecast:</h3>
                    {weatherData.forecast.forecastday.map(({ date, day }, i) => (
                        <div key={i}>
                            <p>{date}, {day.avgtemp_c} °C</p>
                            <img src={day.condition.icon} alt="" />
                        </div>
                    )
                    )}

                </>
                :
                <p>Waiting...</p>
            }
        </div>
    )
}

export default Card;
