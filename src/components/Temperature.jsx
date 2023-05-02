import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


const Temperature = () => {
  const { weather } = useContext(GlobalContext);
  return (
    <h1>{`${Math.floor(weather.main.temp)} °C`}</h1>
  )
}

export default Temperature