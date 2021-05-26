import React from 'react';

// css
import './Card.css'

const Card = ({ weatherData, isLoaded }) => {

    console.log(weatherData);

    return (
        <div>
            {isLoaded ?
                <div className='card-container'>
                    <div className='current-card'>
                        <div >
                            <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
                            <h3>Current weather :</h3>
                            <p>{weatherData.current.temp_c} °C</p>
                            <img src={weatherData.current.condition.icon} alt="" />
                        </div>
                    </div>
                    <h3>Forecast :</h3>
                    <div className='forecast-cards'>
                        {weatherData.forecast.forecastday.map(({ date, day }, i) => (
                            <div key={i} >
                                <p>{date}, {day.avgtemp_c} °C</p>
                                <img src={day.condition.icon} alt="" />
                            </div>
                        )
                        )}
                    </div>

                </div>
                :
                <p>Waiting...</p>
            }
        </div>
    )
}

export default Card;
