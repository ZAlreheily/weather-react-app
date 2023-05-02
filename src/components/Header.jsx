import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

    // to be put in context
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date()
    const day = days[date.getDay()]
    const time = date.getHours() +':'+ date.getMinutes()
    // 
    
    return (
        <div className='navbar flex'>
            <h3>Dammam <FontAwesomeIcon icon="fa-solid fa-location-dot" /></h3>
            <ul>
                <li>{day}</li>
                <li>{time}</li>
            </ul>
        </div>
    )
}

export default Header