import React from 'react'
import getWeather from '../src/pages/api/weatherData';
import Image from 'next/image'

const Header = () => {

  const [data] = getWeather();
 
  
  return (
    <div className=' flex justify-between font-serif text-3xl ml-10  mt-10  solid '>
      <div>
        <h4>Weather App</h4>
      </div>
      <div className='flex justify-center w-1/3 items-center text-gray-800 font-serif'>
        <div className='list'>
        <ul>
          <li>Konum : {data?.name}</li>
          <li>Durum : {data?.weather[0].main}</li>
          <li>Hissedilen : {data?.main.feels_like}</li>
          <li>Sıcaklık : {data?.main?.temp}</li>
          <li>Rüzgar : {data?.wind?.speed}</li>
        </ul>
        </div>
        <div className='icon'>
        <img className='w-20' src={`http://openweathermap.org/img/w/${data?.weather[0].icon}.png`} />

        </div>
        
      </div>
      
    </div>
  )
}

export default Header