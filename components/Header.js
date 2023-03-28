import React from 'react'
import getWeather from '../src/pages/api/weatherData';
import { WiCloudyWindy } from "react-icons/wi";
import { IconContext } from "react-icons";
const Header = () => {

  const [data] = getWeather();


  return (
    <div className=' flex justify-between font-serif text-3xl ml-10  mt-10  solid '>
      <div>
        <h1 className='text-xl max-[520px]:w-auto max-[520px]:text-sm'>Weather App</h1>
      </div>
      <div className='flex justify-center max-[520px]:w-auto max-[520px]:text-xs w-55 items-center text-gray-800 text-sm  p-5 border-spacing-x-4 font-serif'>
        <div className='list'>
          <ul>
            <li>Konum :      {data?.name}  {data?.sys?.country}</li>
            <li>Durum :      {data?.weather?.map(data => data.description).join(",")}</li>
            <li>Hissedilen : {data?.main.feels_like} C°</li>
            <li>Sıcaklık :   {data?.main?.temp} C°</li>
            <li className='flex flex-row '>Rüzgar :     {data?.wind?.speed}
              <IconContext.Provider value={{ color: "red"}}>
                  <WiCloudyWindy />
              </IconContext.Provider></li>

          </ul>
        </div>
        <div className='icon'>
          <img className='w-20 ml-5 max-[520px]:w-auto max-[520px]:text-sm' src={`http://openweathermap.org/img/w/${data?.weather[0].icon}.png`} />

        </div>

      </div>

    </div>
  )
}

export default Header