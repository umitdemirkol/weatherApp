import React, { useState } from 'react'
import { WiCloudyWindy } from "react-icons/wi";
import { IconContext } from "react-icons";
import styles from './SearchWeather.module.css';

const searchWeather = ({ weather }) => {

    return (
        <div className='container h-[650px] justify-center items-center flex'>
            <div className='ahmet bg-black flex justify-center border-[1px] border-solid border-orange-400
              rounded-lg max-[520px]:w-auto max-[520px]:text-sm text-left
                text-2xl p-5 font-mono'>
                    
                    <ul className='bg-black'>
                        <li style={{color:"black"}}>Konum :{weather?.name} {weather?.sys?.country}</li>
                        <li  style={{color:"black"}} className='bg-inherit'>Durum :{weather?.weather?.map(weather => weather.description).join(",")}</li>
                        <li style={{color:"black"}} className='bg-inherit'>Hissedilen :{weather?.main?.feels_like} C°</li>
                        <li style={{color:"black"}} className='bg-inherit'>Sıcaklık :{weather?.main?.temp} C°</li>
                        <li style={{color:"black"}}  className='flex flex-row '>Rüzgar :     {weather?.wind?.speed}
                        <span className='ml-5'>
                        <IconContext.Provider value={{ color: "black"}}>
                                <WiCloudyWindy size={40} fill="black" strokeWidth=".7" />
                            </IconContext.Provider>
                        </span>
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default searchWeather