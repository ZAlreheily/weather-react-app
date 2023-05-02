import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GlobalContext } from '../context/GlobalState';

function getIcon(condition, isNight) {
    let icon;
    switch (condition) {
        case 'Clear':
            if (isNight) {
                icon = 'fa-solid fa-moon';
            } else {
                icon = 'fa-solid fa-sun';
            }
            break;

        case 'Rain':
            if (isNight) {
                icon = 'fa-solid fa-cloud-moon-rain';
            } else {
                icon = 'fa-solid fa-cloud-sun-rain';
            }
            break;

        case 'Thunderstorm':
            icon = 'fa-cloud-bolt';
            break;

        case 'Drizzle':
            icon = 'fa-cloud-rain';
            break;

        case 'Snow':
            icon = 'fa-snowflake';
            break;

        case 'Atmosphere':
            icon = 'fa-smog';
            break;

        case 'Clouds':
            if (isNight){
                icon = 'fa-cloud-moon';
            } else {
                icon = 'fa-cloud-sun';
            }
            break;

        default:
            icon = 'fa-solid fa-cloud';
            break;
    }
    return icon;
}

const WeatherIcon = () => {
    const { weather } = useContext(GlobalContext);
    const condition = weather.weather[0].main;
    const isNight = weather.isNight;
    const icon = getIcon(condition, isNight);
    const classes = `weather-icon ${condition == 'Clear' && !isNight ? 'slow-spin' : null}`
    return (
        <FontAwesomeIcon className={classes}  icon={icon} />
    )
}

export default WeatherIcon