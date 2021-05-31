// libs
import React from 'react';

// css
import './Cards.css'

// components
import Card from './Card'

const Cards = ({ weatherData, isLoaded }) => {

    console.log(weatherData);

    return (
        <div>
            {isLoaded ?
                <div className='cards-container'>
                    <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
                    <div className='card'>
                            <Card date={'Today'} avgtemp_c={weatherData.current.temp_c} icon={weatherData.current.condition.icon} wind_degree={weatherData.current.wind_degree}/>
                    </div>
                    <h3>Forecast :</h3>
                    <div className='forecast-cards'>
                        {weatherData.forecast.forecastday.map(({ date, day }, i) => (
                            <div key={i} className='card'>
                                <Card date={date} avgtemp_c={day.avgtemp_c} icon={day.condition.icon}/>
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

export default Cards;
