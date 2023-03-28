import React from 'react'

const localWeather = ({ weather }) => {

    return (
        <div className='container h-[650px] justify-center items-center flex'>
            <ul>
                <li>{weather?.name}</li>
                <li>{weather?.weather?.map(data=>data.description).join(",")}</li>
                <li>{weather?.main?.temp}</li>
                <li>{weather?.main?.feels_like}</li>
                <li>{weather?.wind?.speed}</li>

            </ul>


        </div>
    )
}

export default localWeather