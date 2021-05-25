import React, { useState } from 'react'
import Card from './Card'

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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter city</label>
                <br />
                <input type="text" value={location} onChange={inputChange} />
                <br />
                <input type="submit" />
            </form>
            <Card weatherData={weatherData} isLoaded={loaded} />
        </>
    )
}

export default Form
