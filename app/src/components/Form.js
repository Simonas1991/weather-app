// libs
import React, { useState } from 'react';

// css
import './Form.css'

// components
import Cards from './Cards'

const Form = () => {
    // hooks
    // - useState
    const [weatherData, setWeatherData] = useState([]);
    const [location, setLocation] = useState('');
    const [loaded, setLoaded] = useState(false);

    // functions
    const inputChange = (e) => {
        setLocation(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (location !== '') {

            fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "63bcefeea3msha2622c5e47aacb4p1e7438jsn496398473fed",
                    "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
                }
            })
                .then(response => response.json())
                .then(data => {
                    setWeatherData(data)
                    setLoaded(true)
                })
                .catch(err => {
                    console.error(err);
                });
            setLocation('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='form'>
                <label >Enter city</label>
                <input type="text" value={location} onChange={inputChange} />
                <button>Submit</button>
            </form>
            <Cards weatherData={weatherData} isLoaded={loaded} />
        </>
    )
}

export default Form
