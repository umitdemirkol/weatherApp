import { usePosition } from 'use-position';
import React, { useEffect, useState } from 'react'

 const getWeather = () => {
    const {latitude,longitude} = usePosition();
    const [weather, setWeather] = useState();
    const apikey = process.env.API_KEY;

    const getWeatherData=async(lat,lon)=>{
        try {
            if(lat!=undefined && lon!=undefined){
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=tr&appid=bb1f56b5853f61427b08d3839d89db41`);
                const data = await res.json();
                setWeather(data);
            }
           
    
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(()=>{
    
        latitude && longitude &&getWeatherData(latitude,longitude);
    
        getWeatherData(latitude,longitude);
    },[latitude,longitude])

  return[weather]
 
 }

 export default getWeather
