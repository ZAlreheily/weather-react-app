import React from 'react'

const InfoItem = ({ attribute, value }) => {
    return (
        <li className='info-item'>
            <p className='info-attribute'>{attribute}</p>
            <p className='info-value'>{value}</p>
        </li>

    )
}

export default InfoItem