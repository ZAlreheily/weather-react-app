import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function getBackgroundStyle(condition, isNight) {
    let style;
    switch (condition) {
        case 'Clear':
            if (isNight){
                style = { background: 'linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(255, 255, 255, 1) 60%)' }

            } else {
                style = { background: 'linear-gradient(to bottom, rgb(255, 81, 0) 0%, rgb(255, 193, 78) 25%, rgba(255, 255, 255, 1) 60%)' }
            }
            break;

        case 'Rain':
            if (isNight) {
                style = { background: 'linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(255, 255, 255, 1) 60%)' }
            } else {
                style = { background: 'linear-gradient(to bottom, rgba(2, 0, 56, 0.974) 0%, rgba(6, 63, 116, 0.498) 40%, rgba(255, 255, 255, 1) 60%)' }
            }
            break;

        case 'Thunderstorm':
            icon = 'fa-cloud-bolt';
            break;

        case 'Drizzle':
            style = { background: 'linear-gradient(to bottom, rgba(2, 0, 56, 0.974) 0%, rgba(6, 63, 116, 0.498) 40%, rgba(255, 255, 255, 1) 60%)' }
            break;

        case 'Snow':
            style = { background: 'linear-gradient(to bottom, rgba(2, 0, 56, 0.974) 0%, rgba(6, 63, 116, 0.498) 40%, rgba(255, 255, 255, 1) 60%)' }
            break;

        case 'Atmosphere':
            style = { background: 'linear-gradient(to bottom, rgba(2, 0, 56, 0.974) 0%, rgba(6, 63, 116, 0.498) 40%, rgba(255, 255, 255, 1) 60%)' }
            break;

        case 'Clouds':
            if (isNight) {
                style = { background: 'linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(255, 255, 255, 1) 60%)' }
            } else {
                style = { background: 'linear-gradient(to bottom, rgba(2, 0, 56, 0.974) 0%, rgba(6, 63, 116, 0.498) 40%, rgba(255, 255, 255, 1) 60%)' }
            }
            break;


    }
    return style
}

const BackgroundWeather = ({ children }) => {
    const { weather } = useContext(GlobalContext);
    const condition = weather.weather[0].main;
    const isNight = weather.isNight;
    const style = getBackgroundStyle(condition, isNight);
    return (
        <div className='background-weather clear-background-weather' style={style}>
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default BackgroundWeather