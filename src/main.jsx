import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// to find a specified city 

// import cities from 'cities.json';
// console.log(cities.filter((city=>{
//   return city.name.toLowerCase().startsWith('dam');
// })))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
