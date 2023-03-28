import React, { useEffect, useState } from 'react'
import LocalWeather from '../../components/LocalWeather';
import getWeather from './api/weatherData';

const weather = () => {

    const [searchData,setSearchData]=useState();
   
    const[data]=getWeather();



    const searchWeatherData=async()=>{
        try {

            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchData}&units=metric&lang=tr&APPID=bb1f56b5853f61427b08d3839d89db41`);
            const data = await res.json();
            setSearchData(data);
    
        } catch (err) {
            console.log(err);
        }
    }
   
    

    return (
        <div className='flex flex-col mt-40'>
            <div className='flex justify-center items-center gap-3'>
                <input type="text" placeholder='Search City' onChange={(e)=>setSearchData(e.target.value)}
                    className='bg-transparent text-3xl overflow-hidden border-b-[1px] solid placeholder:font-mono text-center w-1/3 rounded outline-none focus:border-blue-800' />
                <button className='w-24 border-2 rounded-xl' onClick={searchWeatherData}>Search</button>
            </div>
            <div>
                <div className=' flex text-center justify-center'>
                <LocalWeather weather={data}/>
                </div>
                
            </div>
        </div>
    )
}



export default weather