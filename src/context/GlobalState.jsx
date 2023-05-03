import React, { createContext, useState, useEffect } from 'react';
const API_KEY = import.meta.env.VITE_API_KEY
const initalState = {
    "weather": [
        {
            "main": "Clear",
            "description": "",
        }
    ],
    "main": {
        "temp": 0,
        "feels_like": 0,
        "temp_min": 0,
        "temp_max": 0,
        "pressure": 0,
        "humidity": 0
    },
    "wind": {
        "speed": 0,
    },
    "sys": {
        "sunrise": 1681093289,
        "sunset": 1681138810
    },
    "name": "Dammam",
    "isNight": false,
    "time": 0
};

console.log(new Date(1681093289))

export const GlobalContext = createContext(initalState);

export const GlobalProvidor = ({ children }) => {
    const [weather, setWeather] = useState(initalState);
    useEffect(() => {
        fetch(`${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.cod == 200) {
                    setWeather(data);
                    data.isNight = new Date().getHours >= 18;
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (<GlobalContext.Provider value={{ weather, setState: setWeather }}>
        {children}
    </GlobalContext.Provider>);
}