// libs
import React from 'react'

const Card = ({ date, avgtemp_c, icon, wind_degree }) => {

    return (
        <div>
            <p>{date}</p>
            <p>{avgtemp_c} °C</p>
            {wind_degree ?
                <>
                    <p>Wind direction:</p>
                    <p style={{ transform: `rotateZ(${wind_degree}deg)` }}>↑</p>
                </>
                :
                <>
                </>
            }
            <img src={icon} alt="" />
        </div>
    )
}

export default Card
