import React from 'react';

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
                    {weatherData.forecast.forecastday.map(({ date, day }) => (
                        <ul>
                            <li>{date}, {day.avgtemp_c}</li>
                            <img src={day.condition.icon} alt="" />
                        </ul>

                    )
                    )}

                </>
                :
                <p>Loading...</p>
            }
        </div>
    )
}

export default Card;
