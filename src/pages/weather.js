import React, { useEffect, useState } from 'react'
import SearchWeather from '../../components/SearchWeather';
import getWeather from './api/weatherData';

const weather = () => {

    const [searchData,setSearchData]=useState();
   
    const[data]=getWeather();



    const searchWeatherData=async()=>{
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchData}&units=metric&lang=tr&APPID=bb1f56b5853f61427b08d3839d89db41`)
            .then( (response) => response.json() )
            .then( (data) => {
                setSearchData(data);
            } )
    
        } catch (err) {
            console.log(err);
        }
    }
   
    

    return (
        <div className='flex flex-col mt-20'>
            <div className='flex justify-center items-center gap-3'>
                <input type="text" placeholder='Search City'  onChange={(e)=>setSearchData(e.target.value)}
                    className='bg-transparent placeholder:max-[520px]:text-sm max-[520px]:text-xs font-mono focus:placeholder-shown:false  placeholder:text-stone-300
                     placeholder:max-[520px]:text-white text-3xl overflow-hidden border-b-[1px]
                      solid placeholder:font-mono text-center w-1/3 rounded outline-none focus:border-blue-800' />
                <button className='w-24 transition ease-in-out delay-250
                 bg-orange-300 hover:-translate-y-2 hover:scale-110 hover:font-mono
                  hover:bg-indigo-500 duration-300 max-[520px]:w-12 max-[520px]:text-xs border-2 rounded-xl'
                   onClick={searchWeatherData}>Ara</button>
            </div>
            <div>
                <div className=' flex text-center justify-center'>
                <SearchWeather weather={searchData}/>
                </div>
                
            </div>
        </div>
    )
}



export default weather