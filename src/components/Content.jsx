import React from 'react'
import WeatherIcon from './WeatherIcon'
import StatusBar from './StatusBar'
import InfoSection from './InfoSection'
const Content = () => {
    return (
        <div className='flex content'>
            <WeatherIcon />
            <StatusBar />
            <InfoSection />
        </div>
    )
}

export default Content