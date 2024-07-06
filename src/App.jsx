
import '../src/components/Weather.css'
import { useState } from 'react'
import search_icon from './assets/Search.png'
import cloudy_icon from './assets/cloudy.png'
import nature_icon from './assets/nature.png'
import rain_icon from './assets/rain.png'
import sky_icon from './assets/sky.png'
import sun_icon from './assets/sun.png'
import axios from 'axios';



const weather = () => {
    const [city, setCity]=useState();
    const [weather, setWeather]=useState(false);
    const [error, setError]=useState(null);
    
    
    const apikey = 'd38f4573cef088bb11f3a7b6a5fcd780';

    // const allIcons={
    //   "01d":cloudy.png,
    //   "01n":cloudy.png,
    //   "02d":cloudy.png,
    //   "02n":cloudy.png,
    //   "03d":cloudy.png,
    //   "03n":cloudy.png,
    //   "04d":nature.png,
    //   "04n":nature.png,
    //   "05d":nature.png,
    //   "05n":nature.png,
    //   "06d":rain.png,
    //   "06n":rain.png,
    //   "07d":sky.png,
    //   "07n":sky.png,
    //   "08d":sun.png,
    // }


    
   

    const getWeather = async(city) => {
      if (city ==="") {
        alert("Enter City Name");
        return;
            }

        try {
           const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
            console.log(response.data);   
            setWeather(response.data);         
        } catch (error) {
            setError('city not found');
            setWeather(null);
            

        }
    }

   const handleSubmit=(e) => {
        e.preventDefault();
       getWeather(city)
    }


    return (
        <div className='weather' >
            <div className="search-bar">
              
                <input type="text" placeholder='Enter City Name' onChange={(e)=> setCity(e.target.value)} />
                <button className='search-button' type='submit' onClick={handleSubmit}><img src={search_icon} alt="" /></button>
              
            </div>
            <img src={nature_icon} alt="" className='weather-icon' />
            {weather &&<p className='temprature'>{Math.round(weather.main.temp-273.15)}°C</p>}
            {weather &&<p className='temprature'>{weather.name}</p>}
            <div className="weather-info">
            
        </div>
              {error && <h3> {error}</h3>}
        </div>
    )
}

export default weather
