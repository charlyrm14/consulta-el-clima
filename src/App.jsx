import { AppWeather } from "./components/AppWeather"
import { WeatherProvider } from "./context/WeatherProvider"
import { WiDayRainMix } from "react-icons/wi";


function App() {


  return (
      <WeatherProvider>
        <header>
          <h1> Consulta el clima en tu ciudad <WiDayRainMix/> </h1>
        </header>
        <AppWeather/>
      </WeatherProvider>
  )
}

export default App
