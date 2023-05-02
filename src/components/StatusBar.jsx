import React from 'react'
import Temperature from './Temperature'
import Status from './Status'
const StatusBar = () => {
  return (
    <div className='status-bar flex'>
      <Temperature />
      <Status/>
    </div>
  )
}

export default StatusBar