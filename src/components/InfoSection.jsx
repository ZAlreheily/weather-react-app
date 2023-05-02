import React, { useContext } from 'react'
import InfoItem from './InfoItem'
import { GlobalContext } from '../context/GlobalState'

const InfoSection = () => {
  const {weather} = useContext(GlobalContext);
  return (
    <ul className='info-section'>
      <InfoItem attribute={'Feels Like'} value={`${Math.floor(weather.main.feels_like)} °C`} />
      <InfoItem attribute={'Pressure'} value={`${weather.main.pressure}`} />
      <InfoItem attribute={'Humidity'} value={`${weather.main.humidity}`} />
      <InfoItem attribute={'Minimum Temperature'} value={`${Math.floor(weather.main.temp_min)} °C`} />
      <InfoItem attribute={'Maximum Temperature'} value={`${Math.floor(weather.main.temp_max)} °C`} />
      <InfoItem attribute={'Wind Speed'} value={`${Math.floor(weather.wind.speed)}`} />
    </ul>

  )
}

export default InfoSection