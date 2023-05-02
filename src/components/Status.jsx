import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function capitalizeWords(string) {
  return string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

const Status = () => {
  const { weather } = useContext(GlobalContext);
  return (
    <h2 className='status'>{capitalizeWords(weather.weather[0].description)}</h2>
  )
}

export default Status