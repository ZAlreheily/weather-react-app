import Header from "./components/Header";
import BackgroundWeather from "./components/BackgroundWeather";
import Content from "./components/Content";
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import { GlobalProvidor } from './context/GlobalState';

function App() {

  return (
    <GlobalProvidor>
      <BackgroundWeather>
        <Header />
        <Content />
      </BackgroundWeather>
    </GlobalProvidor>
  )
}

export default App
